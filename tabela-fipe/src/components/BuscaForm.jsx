import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarca, setModelo, setAno, setResultado } from '../redux/slices/fipeSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, CircularProgress, Backdrop, Box, Paper } from '@mui/material';
import { useFipeApi } from '../hooks/useFipeApi';
import SelectField from './SelectField';

export default function BuscaForm({ fipeService }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { marca, modelo, ano } = useSelector(state => state.fipe);

  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [anos, setAnos] = useState([]);

  const { fetch, loading } = useFipeApi(fipeService);

  useEffect(() => {
    fetch(() => fipeService.getMarcas()).then(data => data && setMarcas(data));
  }, []);

  useEffect(() => {
    if (marca) {
      fetch(() => fipeService.getModelos(marca)).then(data => data && setModelos(data));
    } else {
      setModelos([]);
    }
    dispatch(setModelo(''));
    dispatch(setAno(''));
    setAnos([]);
  }, [marca]);

  useEffect(() => {
    if (marca && modelo) {
      fetch(() => fipeService.getAnos(marca, modelo)).then(data => data && setAnos(data));
    } else {
      setAnos([]);
    }
    dispatch(setAno(''));
  }, [modelo]);

  const handleBuscar = async () => {
    const data = await fetch(() => fipeService.getDetalhes(marca, modelo, ano));
    if (data) {
      dispatch(setResultado(data));
      navigate('/resultado');
    }
  };

  return (
    <Box sx={{ minHeight: '55vh', width: '40vw', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Paper elevation={6} sx={{ p: 4, mb: 2, maxWidth: 500, width: '100%', boxShadow: 3 }}>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <SelectField label="Marca" value={marca} onChange={e => dispatch(setMarca(e.target.value))} options={marcas} />
          <SelectField label="Modelo" value={modelo} onChange={e => dispatch(setModelo(e.target.value))} options={modelos} disabled={!marca} />
          {modelo && (
            <SelectField label="Ano" value={ano} onChange={e => dispatch(setAno(e.target.value))} options={anos} />
          )}
          <Button variant="contained" onClick={handleBuscar} disabled={!marca || !modelo || !ano} sx={{ mt: 2, width: '190px', alignSelf: 'center', backgroundColor: '#4a148c', '&:hover': { backgroundColor: '#310e5c' } }}>
            Consultar preço
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

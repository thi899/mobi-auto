import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarca, setModelo, setAno, setResultado } from '../redux/slices/fipeSlice';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress, Backdrop, Paper, Grid } from '@mui/material';
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
    <Grid
      container
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: 'repeat(4, auto)',
        gridTemplateColumns: '1fr',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Paper
        elevation={6}
        sx={{
          p: 4,
          boxShadow: 3,
          width: { xs: '90vw', sm: '80vw', md: '50vw', lg: '40vw' },
        }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <SelectField
              label="Marca"
              value={marca}
              onChange={e => dispatch(setMarca(e.target.value))}
              options={marcas}
            />
          </Grid>

          <Grid item>
            <SelectField
              label="Modelo"
              value={modelo}
              onChange={e => dispatch(setModelo(e.target.value))}
              options={modelos}
              disabled={!marca}
            />
          </Grid>

          {modelo && (
            <Grid item>
              <SelectField
                label="Ano"
                value={ano}
                onChange={e => dispatch(setAno(e.target.value))}
                options={anos}
              />
            </Grid>
          )}

          <Grid item sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={handleBuscar}
              disabled={!marca || !modelo || !ano}
              sx={{
                mt: 2,
                width: '190px',
                backgroundColor: '#4a148c',
                '&:hover': { backgroundColor: '#310e5c' }
              }}
            >
              Consultar preço
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

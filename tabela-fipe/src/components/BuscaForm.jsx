import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarca, setModelo, setAno, setResultado } from '../redux/slices/fipeSlice';
import { useNavigate } from 'react-router-dom';
import {
    Button, FormControl, MenuItem, Select, InputLabel, Stack,
    CircularProgress, Backdrop, Box, Paper
} from '@mui/material';
import axios from 'axios';

export default function BuscaForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [carregandoMarcas, setCarregandoMarcas] = useState(true);

    const { marca, modelo, ano } = useSelector(state => state.fipe);

    const [marcas, setMarcas] = useState([]);
    const [modelos, setModelos] = useState([]);
    const [anos, setAnos] = useState([]);

    useEffect(() => {
        setCarregandoMarcas(true);
        axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
            .then(res => setMarcas(res.data))
            .catch(err => console.error('Erro ao buscar marcas:', err))
            .finally(() => setCarregandoMarcas(false));
    }, []);

    useEffect(() => {
        if (marca) {
            axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`)
                .then(res => setModelos(res.data.modelos))
                .catch(err => console.error('Erro ao buscar modelos', err));
        } else {
            setModelos([]);
        }
        dispatch(setModelo(''));
        dispatch(setAno(''));
        setAnos([]);
    }, [marca]);

    useEffect(() => {
        if (marca && modelo) {
            axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos`)
                .then(res => setAnos(res.data))
                .catch(err => console.error('Erro ao buscar Anos', err));
        } else {
            setAnos([]);
        }
        dispatch(setAno(''));
    }, [modelo]);

    const handleBuscar = () => {
        axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
            .then(res => {
                dispatch(setResultado(res.data));
                navigate('/resultado');
            });
    };

    return (
        <Box sx={{
            minHeight: '55vh',
            width: '40vw',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={carregandoMarcas}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Paper elevation={6} sx={{ p: 4, mb: 2, maxWidth: 500, width: '100%', boxShadow: 3 }}>
                <Stack spacing={2} sx={{ mt: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel>Marca</InputLabel>
                        <Select
                            value={marca}
                            label="Marca"
                            onChange={e => dispatch(setMarca(e.target.value))}
                        >
                            {marcas.map((item) => (
                                <MenuItem key={item.codigo} value={item.codigo}>
                                    {item.nome}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth disabled={!marca}>
                        <InputLabel>Modelo</InputLabel>
                        <Select
                            value={modelo}
                            label="Modelo"
                            onChange={e => dispatch(setModelo(e.target.value))}
                        >
                            {modelos.map((item) => (
                                <MenuItem key={item.codigo} value={item.codigo}>
                                    {item.nome}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {modelo && (
                        <FormControl fullWidth>
                            <InputLabel>Ano</InputLabel>
                            <Select
                                value={ano}
                                label="Ano"
                                onChange={e => dispatch(setAno(e.target.value))}
                            >
                                {anos.map((item) => (
                                    <MenuItem key={item.codigo} value={item.codigo}>
                                        {item.nome}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    <Button
                        variant="contained"
                        onClick={handleBuscar}
                        disabled={!marca || !modelo || !ano}
                        sx={{
                            mt: 2,
                            width: '190px',
                            alignSelf: 'center',
                            backgroundColor: '#4a148c',
                            '&:hover': {
                                backgroundColor: '#310e5c',
                            },
                        }}
                    >
                        Consultar preço
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}

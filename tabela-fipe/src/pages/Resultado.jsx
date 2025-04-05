import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Paper, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setMarca, setModelo, setAno, setResultado } from '../redux/slices/fipeSlice';

export default function Resultado() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resultado = useSelector(state => state.fipe.resultado);

    const handleVoltar = () => {
        dispatch(setMarca(''));
        dispatch(setModelo(''));
        dispatch(setAno(''));
        dispatch(setResultado(null));
        navigate('/');
    };

    if (!resultado) {
        return (
            <Container>
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Nenhum resultado encontrado.
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={handleVoltar}>
                    Voltar para o início
                </Button>
            </Container>
        );
    }

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vh',
                height: '100vh',
            }}>

            <Paper sx={{ p: 2, mb: 3, width: '100vh', backgroundColor: '#DFF8F7', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>
                    <strong>Tabela Fipe: Preço {resultado.Marca} {resultado.Modelo.split(' ')[0]} {resultado.AnoModelo}</strong>
                </Typography>

                <Chip
                    label={resultado.Valor}
                    sx={{
                        pt:3,
                        pb:3,
                        backgroundColor: '#009688',
                        color: '#DFF8F7',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        borderRadius: '20px'
                    }}
                />

                <Typography
                    variant="caption"
                    sx={{ mt: 2, display: 'block', textAlign: 'center', color: 'rgba(0, 0, 0, 0.5)' }}
                >
                    Este é o preço de compra do veículo
                </Typography>
            </Paper>
            <Button
                variant="contained"
                sx={{
                    mt: 2,
                    width: '190px',
                    alignSelf: 'center',
                    backgroundColor: '#4a148c',
                    '&:hover': {
                        backgroundColor: '#310e5c',
                    },
                }}
                onClick={handleVoltar}>
                Voltar para o início
            </Button>
        </Container >
    );
}

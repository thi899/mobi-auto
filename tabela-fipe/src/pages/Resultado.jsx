import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  setMarca,
  setModelo,
  setAno,
  setResultado,
} from '../redux/slices/fipeSlice';
import ResultadoCard from '../components/ResultadoCard';

export default function ResultadoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resultado = useSelector((state) => state.fipe.resultado);

  const handleReset = () => {
    dispatch(setMarca(''));
    dispatch(setModelo(''));
    dispatch(setAno(''));
    dispatch(setResultado(null));
    navigate('/');
  };

  if (!resultado) {
    return (
      <Container sx={styles.centered}>
        <Typography variant="h6" sx={{ mt: 4 }}>
          Nenhum resultado encontrado.
        </Typography>
        <Button variant="contained" sx={styles.button} onClick={handleReset}>
          Voltar para o início
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={styles.centered}>
      <ResultadoCard resultado={resultado} />
      <Button variant="contained" sx={styles.button} onClick={handleReset}>
        Voltar para o início
      </Button>
    </Container>
  );
}

const styles = {
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    mt: 2,
    width: '190px',
    backgroundColor: '#4a148c',
    '&:hover': {
      backgroundColor: '#310e5c',
    },
  },
};

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import BuscaForm from '../components/BuscaForm';

export default function Busca() {
    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5', 
                minHeight: '100vh',
                py: 4,
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h3" align="center" sx={{ mb: 1 }}>
                    Tabela FIPE
                </Typography>
                <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{
                        mb: 2,
                        fontSize: '25px',
                    }}
                >
                    Consulte o valor de um veículo de forma gratuita
                </Typography>
                <BuscaForm />
            </Container>
        </Box>
    );
}

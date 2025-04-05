import React from 'react';
import { Container, Box } from '@mui/material';
import BuscaForm from '../components/BuscaForm';
import PageTitleSubtitle from '../components/PageTitleSubtitle';

export default function BuscaPage() {
  return (
    <Box sx={styles.pageContainer}>
      <Container maxWidth="sm">
        <PageTitleSubtitle
          title="Tabela FIPE"
          subtitle="Consulte o valor de um veículo de forma gratuita"
        />
        <BuscaForm />
      </Container>
    </Box>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    py: 4,
  },
};

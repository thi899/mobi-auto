import { Typography, Paper, Chip } from '@mui/material';

export default function ResultadoCard({ resultado }) {
  const { Marca, Modelo, AnoModelo, Valor } = resultado;

  return (
    <Paper sx={styles.card}>
      <Typography variant="h4" sx={styles.title}>
        Tabela Fipe: Preço {Marca} {Modelo.split(' ')[0]} {AnoModelo}
      </Typography>

      <Chip label={Valor} sx={styles.chip} />

      <Typography variant="caption" sx={styles.caption}>
        Este é o preço de compra do veículo
      </Typography>
    </Paper>
  );
}

const styles = {
  card: {
    p: 2,
    mb: 3,
    width: '100%',
    backgroundColor: '#DFF8F7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    mt: 4,
    mb: 2,
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 'bold',
  },
  chip: {
    pt: 3,
    pb: 3,
    backgroundColor: '#009688',
    color: '#DFF8F7',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '20px',
  },
  caption: {
    mt: 2,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
};

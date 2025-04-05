import { Typography } from '@mui/material';

export default function PageTitleSubTitle({ title, subtitle }) {
  return (
    <>
      <Typography variant="h3" align="center" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" align="center" sx={{ mb: 2, fontSize: '25px' }}>
        {subtitle}
      </Typography>
    </>
  );
}

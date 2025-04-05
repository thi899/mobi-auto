import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function SelectField({ label, value, onChange, options = [], disabled = false }) {
  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map((item) => (
          <MenuItem key={item.codigo} value={item.codigo}>
            {item.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

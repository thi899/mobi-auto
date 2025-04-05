import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  marca: '',
  modelo: '',
  ano: '',
  resultado: null,
};

const fipeSlice = createSlice({
  name: 'fipe',
  initialState,
  reducers: {
    setMarca: (state, action) => { state.marca = action.payload },
    setModelo: (state, action) => { state.modelo = action.payload },
    setAno: (state, action) => { state.ano = action.payload },
    setResultado: (state, action) => { state.resultado = action.payload },
  },
});

export const { setMarca, setModelo, setAno, setResultado } = fipeSlice.actions;
export default fipeSlice.reducer;

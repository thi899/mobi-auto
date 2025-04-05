import axios from 'axios';

export const fipeService = {
  getMarcas: () =>
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas').then(res => res.data),

  getModelos: (marcaId) =>
    axios
      .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos`)
      .then(res => res.data.modelos),

  getAnos: (marcaId, modeloId) =>
    axios
      .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos/${modeloId}/anos`)
      .then(res => res.data),

  getDetalhes: (marcaId, modeloId, anoId) =>
    axios
      .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`)
      .then(res => res.data)
};

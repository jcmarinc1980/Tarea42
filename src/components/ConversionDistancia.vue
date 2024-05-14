<template>
    <div class="conversion-container">
      <div class="conversion-box">
        <h1>Conversiones de Distancia</h1>
        <div class="input-group">
          <label for="inputValue">Valor a convertir:</label>
          <input type="number" v-model="inputValue" @input="convertir" id="inputValue">
        </div>
        <div class="input-group">
          <label for="unidadOrigen">Desde:</label>
          <select v-model="unidadOrigen" @change="convertir" id="unidadOrigen">
            <option value="metros">Metros (m)</option>
            <option value="kilometros">Kilómetros (km)</option>
            <option value="centimetros">Centímetros (cm)</option>
            <option value="milimetros">Milímetros (mm)</option>
            <option value="pies">Pies (ft)</option>
            <option value="pulgadas">Pulgadas (in)</option>
            <option value="yardas">Yardas (yd)</option>
            <option value="millas">Millas (mi)</option>
          </select>
        </div>
        <div class="input-group">
          <label for="unidadDestino">Hacia:</label>
          <select v-model="unidadDestino" @change="convertir" id="unidadDestino">
            <option value="metros">Metros (m)</option>
            <option value="kilometros">Kilómetros (km)</option>
            <option value="centimetros">Centímetros (cm)</option>
            <option value="milimetros">Milímetros (mm)</option>
            <option value="pies">Pies (ft)</option>
            <option value="pulgadas">Pulgadas (in)</option>
            <option value="yardas">Yardas (yd)</option>
            <option value="millas">Millas (mi)</option>
          </select>
        </div>
        <div class="output-group">
          <hr>
          <p class="resultado">{{ resultado }}</p>
        </div>
        <button @click="regresar" class="regresar-btn">Regresar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: null,
        unidadOrigen: 'metros',
        unidadDestino: 'metros',
        resultado: null
      };
    },
    methods: {
      convertir() {
        const unidades = {
          metros: 1,
          kilometros: 0.001,
          centimetros: 100,
          milimetros: 1000,
          pies: 3.28084,
          pulgadas: 39.3701,
          yardas: 1.09361,
          millas: 0.000621371
        };
  
        const valor = parseFloat(this.inputValue);
        const factorOrigen = unidades[this.unidadOrigen];
        const factorDestino = unidades[this.unidadDestino];
  
        if (!isNaN(valor) && factorOrigen !== undefined && factorDestino !== undefined) {
          this.resultado = (valor / factorOrigen * factorDestino).toFixed(2) + ' ' + this.unidadDestino;
        } else {
          this.resultado = 'Entrada inválida';
        }
      },
      regresar() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos */
  .conversion-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .conversion-box {
    max-width: 400px;
    padding: 20px;
    border: 3px solid black;
    border-radius: 10px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .output-group {
    text-align: center;
  }
  
  .resultado {
    font-size: 24px;
    color: red;
  }
  
  .regresar-btn {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  </style>
  
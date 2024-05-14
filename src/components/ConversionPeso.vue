<template>
    <div class="conversion-container">
      <div class="conversion-box">
        <h1>Conversiones de Peso</h1>
        <div class="input-group">
          <label for="inputValue">Valor a convertir:</label>
          <input type="number" v-model="inputValue" @input="convertir" id="inputValue">
        </div>
        <div class="input-group">
          <label for="unidadOrigen">Desde:</label>
          <select v-model="unidadOrigen" @change="convertir" id="unidadOrigen">
            <option value="gramos">Gramos (g)</option>
            <option value="kilogramos">Kilogramos (kg)</option>
            <option value="libras">Libras (lb)</option>
            <option value="onzas">Onzas (oz)</option>
            <!-- Agrega más opciones aquí -->
          </select>
        </div>
        <div class="input-group">
          <label for="unidadDestino">Hacia:</label>
          <select v-model="unidadDestino" @change="convertir" id="unidadDestino">
            <option value="gramos">Gramos (g)</option>
            <option value="kilogramos">Kilogramos (kg)</option>
            <option value="libras">Libras (lb)</option>
            <option value="onzas">Onzas (oz)</option>
            <!-- Agrega más opciones aquí -->
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
        unidadOrigen: 'gramos',
        unidadDestino: 'gramos',
        resultado: null
      };
    },
    methods: {
      convertir() {
        const unidades = {
          gramos: {
            gramos: valor => valor,
            kilogramos: valor => valor / 1000,
            libras: valor => valor / 453.592,
            onzas: valor => valor / 28.3495
            // Agrega más conversiones aquí
          },
          kilogramos: {
            gramos: valor => valor * 1000,
            kilogramos: valor => valor,
            libras: valor => valor * 2.20462,
            onzas: valor => valor * 35.274
            // Agrega más conversiones aquí
          },
          libras: {
            gramos: valor => valor * 453.592,
            kilogramos: valor => valor / 2.20462,
            libras: valor => valor,
            onzas: valor => valor * 16
            // Agrega más conversiones aquí
          },
          onzas: {
            gramos: valor => valor * 28.3495,
            kilogramos: valor => valor / 35.274,
            libras: valor => valor / 16,
            onzas: valor => valor
            // Agrega más conversiones aquí
          }
          // Agrega más unidades aquí
        };
  
        const valor = parseFloat(this.inputValue);
        const conversion = unidades[this.unidadOrigen][this.unidadDestino];
  
        if (!isNaN(valor) && conversion) {
          this.resultado = conversion(valor).toFixed(2) + ' ' + this.unidadDestino.toUpperCase();
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
  
<template>
  <div class="container">
    <h1>Bienvenido a la Aplicación de Conversiones</h1>
    <button class="button" @click="irADistancia">Conversiones de Distancia</button>
    <button class="button" @click="irATemperatura">Conversiones de Temperatura</button>
    <button class="button" @click="irAPeso">Conversiones de Peso</button>
  </div>
</template>

<script>
export default {
  methods: {
    irADistancia() {
      this.$router.push('/distancia');
    },
    irATemperatura() {
      this.$router.push('/temperatura');
    },
    irAPeso() {
      this.$router.push('/peso');
    }
  }
}
</script>

<style scoped>
/* Importa los estilos de Skeleton CSS */
@import '../css/normalize.css';
@import '../css/skeleton.css';


/* Estilos personalizados */
.container {
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  max-width: 960px; /* Limita el ancho del contenedor */
  padding: 2rem; /* Agrega un relleno interno */
  text-align: center; /* Centra el texto dentro del contenedor */
}
</style>

<template>
  <div class="pokemon-container">

      <img v-if="!showPokemon"
        :src="imgSrc"
        class="hidden-pokemon"
        alt="pokemon">

      <img v-else
        :src="imgSrc"
        class="fade-in"
        alt="pokemon">
        
  </div>
</template>

<script>
export default {

  props: {
    pokemonId: {
      type: Number,
      // default: 1,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
    }
  }

}
</script>

<style scoped>
    /* Pokemon Picture */
    .pokemon-container {
        height: 300px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-image: url('../assets/destello.png');
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        background-position: center;
        background-size: 300px;
    }
    img {
        height: 180px;
        position: absolute;
        /* right: 32%; */
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }
</style>
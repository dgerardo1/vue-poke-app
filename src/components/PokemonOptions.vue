<template>
  <div class="options-container">

    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id )">
        {{ pokemon.name[0].toUpperCase() + pokemon.name.substring(1) }}
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>

  /* Pokemon Options */
  ul {
      list-style-type: none;
      padding: 0;
      margin-bottom: 0;
  }

  li {
      background-color: white;
      border-radius: 6px;
      border: 2px solid rgba(42, 117, 187, 1);
      cursor: pointer;
      padding: 6px;
      margin-bottom: 10px;
      width: 250px;
      color: rgba(229,73,70,1);
  }

  li:hover {
      background-color: rgb(240,240,240);
  }

  .options-container {
      display: flex;
      justify-content: center;

  }

</style>
<template>

  <div class="container">

    <div v-if="!pokemon">
      <img
        src="https://fontmeme.com/permalink/211223/705fb7315efa6567446cf7f9c65b0ce1.png"
        alt="fuente-pokemon"
        border="0">
    </div>
    
    <div v-else>
    
        <img
          src="https://fontmeme.com/permalink/211208/abb56b455692b0a09af69a5d8d3135d3.png"
          alt="fuente-pokemon"
          border="0">
    
      <PokemonPicture
        :pokemonId="pokemon.id"
        :showPokemon="showPokemon"/>
      
      <PokemonOptions
        :pokemons="pokemonArr"
        @selection="checkAnswer"/>

       <template v-if="showAnswer">
          <h2>{{ message }}</h2>
          <button @click="newGame">
            Nuevo Juego
          </button>
       </template>
    
    </div>

  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log( getPokemonOptions() )

export default {
  components: { 
    PokemonPicture, 
    PokemonOptions 
  },
  data(){
    return{
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray(){

      this.pokemonArr = await getPokemonOptions()
      // console.log(this.pokemonArr)

      const rndInt = Math.floor( Math.random() * 4 )
      // console.log(rndInt)

      this.pokemon = this.pokemonArr[ rndInt ]

    },
    checkAnswer( selectedId ){

      // console.log('Pokemon page llamado', pokemonId )
      this.showPokemon = true
      this.showAnswer = true

      if ( selectedId === this.pokemon.id ) {
        this.message = `¡Correcto! Es ${ this.pokemon.name[0].toUpperCase() + this.pokemon.name.substring(1) }`
      } else {
        this.message = `¡Ups! Era ${ this.pokemon.name[0].toUpperCase() + this.pokemon.name.substring(1) }`        
      }

    },
    newGame(){
      this.showPokemon = false
      this.showAnswer  = false
      this.pokemonArr  = []
      this.pokemon     = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }

}
</script>

<style scoped>
  .container {
    max-width: 720px;
    margin: 0 auto;
  }

  img {
    width: 80%;
  }

  h2 {
    color: white !important;
    margin-top: 0;
  }

  button {
    padding: 6px 12px;
    background-color: #ffcb05;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    color: rgba(229,73,70,1);
    border: 2px solid rgba(42, 117, 187, 1);
  }

</style>
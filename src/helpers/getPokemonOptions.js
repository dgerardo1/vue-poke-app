import pokemonApi from "../api/pokemonApi";

/*************************************
 * CREA UN ARREGLO DE 650 POSICIONES *
 *************************************/
export const getPokemons = () => {
    
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map( ( _ , index) => index + 1 )
    
}

/*************************************************
 * DEFINE LAS 4 OPCIONES QUE SE USAN EN EL JUEGO *
 *************************************************/
const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 ) 
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )   

    // console.table(pokemons)

    return pokemons

}

/******************************************************************************
 * OBTIENE LOS NOMBRES DE LOS POKEMONES BASADOS EN LOS NÚMEROS (IDS) ENVIADOS *
 ******************************************************************************/
export const getPokemonNames = async( [a,b,c,d] = [] ) => {

    // const resp = await pokemonApi.get(`/2`)
    // console.log(resp.data.name, resp.data.id )
    // console.log(a,b,c,d)

    const promisesArr = [
        pokemonApi.get(`${ a }`),
        pokemonApi.get(`${ b }`),
        pokemonApi.get(`${ c }`),
        pokemonApi.get(`${ d }`)
    ]

    const [ p1, p2, p3, p4 ] = await Promise.all( promisesArr )
    
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]
    
}

export default getPokemonOptions


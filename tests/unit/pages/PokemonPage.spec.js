import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach( () => {        
        wrapper = shallowMount( PokemonPage )
    })

    test('debe de hacer match con el snapshot', () => {
        
        expect( wrapper.html() ).toMatchSnapshot()
    });

    test('debe de llamar el mixPokemonArray al montar', () => {

        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()
        
    });

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        
        const wrapper = shallowMount( PokemonPage, {
            data(){
                return{
                  pokemonArr: pokemons,
                  pokemon: pokemons[0],
                  showPokemon: false,
                  showAnswer: false,
                  message: ''
                }
            }
        } )

        expect( wrapper.html() ).toMatchSnapshot()
    });

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount( PokemonPage, {
            data(){
                return{
                  pokemonArr: pokemons,
                  pokemon: pokemons[0],
                  showPokemon: false,
                  showAnswer: false,
                  message: ''
                }
            }
        } )

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        // PokemonPicture debe existir        
        expect( picture.exists() ).toBe( true )

        // PokemonPicture debe existir
        expect( options.exists() ).toBe( true )

        // PokemonPicture attribute pokemonid === 1        
        expect( picture.attributes('pokemonid') ).toBe( '1' )

        // PokemonOptions attribute pokemons toBe true
        expect( options.attributes('pokemons') ).toBeTruthy()
        
    });

    test('pruebas con checkAnswer', async() => {
        
        const wrapper = shallowMount( PokemonPage, {
            data(){
                return{
                  pokemonArr: pokemons,
                  pokemon: pokemons[0],
                  showPokemon: false,
                  showAnswer: false,
                  message: ''
                }
            }
        } )

        await wrapper.vm.checkAnswer(1)

        expect( wrapper.find('h2').exists() ).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBe( true )
        expect( wrapper.find('h2').text() ).toBe( `¡Correcto! Es ${ pokemons[0].name[0].toUpperCase() + pokemons[0].name.substring(1) }` )

        await wrapper.vm.checkAnswer(10)
        // console.log(wrapper.vm.message )
        expect( wrapper.vm.message ).toBe( `¡Ups! Era ${ pokemons[0].name[0].toUpperCase() + pokemons[0].name.substring(1) }` )

    });
    
});
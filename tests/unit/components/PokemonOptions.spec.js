import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons
            }
        })
    })
    
    test('debe de hacer match con el snapshot', () => {

        // console.log( wrapper.html() )
        
        // .toMatchInlineSnapshot()
        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        
        const lista = wrapper.findAll('li')
        expect( lista.length ).toBe(4)

        expect( lista[0].text() ).toBe('Bulbasaur')
        expect( lista[1].text() ).toBe('Ivysaur')
        expect( lista[2].text() ).toBe('Venusaur')
        expect( lista[3].text() ).toBe('Charmander')

        
    });

    test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
        
        const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        // console.log( wrapper.emitted('selection') )

        expect( wrapper.emitted('selection').length ).toBe(4)
        expect( wrapper.emitted('selection')[0] ).toEqual([1])
        expect( wrapper.emitted('selection')[1] ).toEqual([2])
        expect( wrapper.emitted('selection')[2] ).toEqual([3])
        expect( wrapper.emitted('selection')[3] ).toEqual([4])
    });
})
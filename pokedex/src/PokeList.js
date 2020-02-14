// map here
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        const pokes = this.state.pokeData;
        const data = pokes.map(poke => {
            return (<PokeItem key={poke.pokemon} poke={poke}/>)
            
        })

        return (
            <>
            <ul className='pokes'>{data}</ul>
            </>
        )

    }
}

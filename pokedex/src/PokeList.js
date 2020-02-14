// map here
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        console.log(this.props);
        const pokes = this.props.pokeData;
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

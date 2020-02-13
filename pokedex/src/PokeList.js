// map here
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import request from 'superagent';

export default class PokeList extends Component {
    state = { pokeData: [] };

      async componentDidMount() {
        const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    
        this.setState({ pokeData: data.body.results })
      }
    render() {
        const pokes = this.state.pokeData;
        const data = pokes.map(poke => {
            return (<PokeItem key={poke.pokemon} poke={poke}/>)
            
        })
        

        return (
            <>
            <ul className='pokes'>{data}</ul>
            { this.state.data ? JSON.stringify(this.state.data) : 'loading' }
            </>
        )

    }
}

// map here
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import pokeData from './data/data.js';
import request from 'superagent';

export default class PokeList extends Component {
    state = { pokeData: [] };

      async componentDidMount() {
        const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
        console.log(data.body)
    
        this.setState({ pokeData: data.body })
      }
    render() {
        const pokes = pokeData;
        const data = pokes.map(poke => {
            console.log(poke);
            return (<PokeItem key={poke.pokemon} poke={poke}/>)
            
        })
        

        return (
            <>
            <ul className='pokés'>{data}</ul>
            { this.state.data ? JSON.stringify(this.state.data) : 'loading' }
            </>
        )

    }
}

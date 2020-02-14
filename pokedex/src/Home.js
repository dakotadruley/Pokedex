import React, { Component } from 'react';
import { getPokes } from './services/pokeAPI.js';
import PokeList from './PokeList.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';

export default class Home extends Component {
    state = { pokeData: [] };

    async loadPokes() {
        const response = await getPokes();
        const pokes = response.results;
        console.log(pokes);
        const totalResults = response.count;
        this.setState({
            pokeData: pokes,
            totalResults: totalResults,
        });
    }

    async componentDidMount() {
        await this.loadPokes();
        console.log(this.state.pokeData);
        window.addEventListener('hashchange', async () => {
            await this.loadPokes();
        });
    }

    render() {
        const { pokeData, totalResults } = this.state;

        return (
            <>
            <SearchOptions />
            <PokeList pokeData={pokeData}/>
            <Paging totalResults={totalResults}/>
            </>
        );
    }
}
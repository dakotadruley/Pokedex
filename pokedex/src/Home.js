import React, { Component } from 'react';
import { getPokes } from './services/pokeAPI.js';
import PokeList from './PokeList.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';

export default class Home extends Component {
    state = { pokeData: [] };

    async loadPokes() {
        const response = await getPokes();
        const pokes = response.Search;
        const totalResults = response.totalResults;
        this.setState({
            pokeData: pokes,
            totalResults: totalResults,
        });
    }

    async componentDidMount() {
        await this.loadPokes();

        window.addEventListener('hashchange', async () => {
            await this.loadPokes();
        });
    }

    render() {
        const { pokeData, totalResults } = this.state;

        return (
            <>
            <SearchOptions />
            <PokeList pokes={pokeData}/>
            <Paging totalResults={totalResults}/>
            </>
        );
    }
}
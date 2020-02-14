import React, { Component } from 'react';

export default class SearchOptions extends Component {
    // componentDidMount() {
    //     this.updateControls();

    //     window.addEventListener("hashchange", () => {
    //         this.updateControls();
    //     });
    
    state = {};

    // updateControls() {
    //     const qString = window.location.hash.slice(1);
    //     const searchParams = new URLSearchParams(qString);
    //     // const type = searchParams.get('type');

    //     // this.setState({
    //     //     searchInput: searchParams.get('s') || '',
    //     //     checkedRadio: type
    //     // });
    // }

    handleSubmit = (e) => {
        const form = document.querySelector('form');
        e.preventDefault();
        const formData = new FormData(form);

        const qString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(qString);

        searchParams.set('pokemon', formData.get('search'));
        // searchParams.set('type', formData.get(''));

        window.location.hash = searchParams.toString();
    }

    render() {
        return (
            <div className='searchDiv'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label for='search'><strong>Search: </strong></label>
                        <input
                            id='search'
                            name='search'
                            onChange={e => this.setState({ searchInput: e.target.value })}
                            value={this.state.searchInput}
                        /><span> </span>
                        {/* <fieldset>
                            <label>
                                <input
                                    type='radio'
                                    name='pokemon'
                                    value='pokemon'
                                    onClick={() => this.setState({ checkedRadio: 'pokemon' })}
                                    checked={this.state.checkedRadio === 'pokemon'}
                                />
                                Pokémon
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    name='type'
                                    value='type'
                                    onClick={() => this.setState({ checkedRadio: 'type' })}
                                    checked={this.state.checkedRadio === 'type'}
                                />
                                Type
                            </label>
                        </fieldset> */}
                    <button className='searchButton'><strong>Search</strong></button>
                </form>
            </div>
        );
    }
}
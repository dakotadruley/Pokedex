import React, { Component } from 'react';

export default class SearchOptions extends Component {
    componentDidMount() {
        this.updateControls();

        window.addEventListener("hashchange", () => {
            this.updateControls();
        });
    }

    state = {};

    // updateControls() {
    //     const qString = window.location.hash.slice(1);
    //     const searchParams = new URLSearchParams(qString);
    //     // if usingh radio buttons?
    // }

    // this.ListeningStateChangedEvent({
    //     searchInput: searchParams.get("s") || "",

    // })


    handleSubmit = (e) => {
        const form = document.querySelector('form');
        e.preventDefault();
        const formData = new FormData(form);

        const qString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(qString);

        searchParams.set(forData.target)
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <label for='search'>Search:</label>
                    <input
                        id='search'
                        name='search'
                        onChange={e => this.setState({ searchInput: e.target.value })}
                        value={this.state.searchInput}
                    />
                <button>Search</button>


            </form>
        );
    }
}
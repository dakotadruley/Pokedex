import React, { Component } from "react";

export default class Paging extends Component {
    state = { page: 1 };

    componentDidMount() {
        this.updateControls();

        window.addEventListener('hashchange', () => {
            this.updateControls();
        });
    }

    updatePage(add) {
        const qString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(qString);
        searchParams.set('page', this.state.page + add);

        window.location.hash = searchParams.toString();
    }

    updateControls() {
        const qString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(qString);
        let pageUsed = this.state.page;

        const parsedPage = Number(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            pageUsed = 1;
        } else {
            pageUsed = parsedPage;
        }

        this.setState({ page: pageUsed });
    }

    render() {
        const { page } = this.state;

        const perPage = 20;
        const { totalResults } = this.props;
        const qString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(qString);

        const parsedPage = parseInt(searchParams.get('page'));

        let pageUsed;
        if (isNaN(parsedPage)) {
            pageUsed = 1;
        } else {
            pageUsed = parsedPage;
        }

        if (!totalResults) {
            return <p>No Results, Try Again</p>;
        }

        const lastPage = Math.ceil(totalResults / perPage);

        return (
            <>
            <div className='pageDiv'>
            <button
                className='leftButton'
                onClick={() => this.updatePage(-1)}
                disabled={pageUsed === 1 ? 'true' : ''} 
                type='button'><strong id='previous'>Previous</strong></button>
                
            <span className='pageNumbers'>
                page<span> </span>
                {pageUsed} of<span> </span>
                {lastPage}
            </span>
            
            <button
                className='rightButton'
                disabled={pageUsed === lastPage ? 'true' : ''}
                onClick={() => this.updatePage(1)}
                type='button'><strong>Next</strong></button>
            </div>
            </>
        );
    }
}

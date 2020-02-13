import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        const pokes = this.props.poke;

        return (
            <>
            <li className='poke' key={pokes._id}>
                <div className='pokeContainer'>
                    <h2>{pokes.pokemon}</h2>
                    <p className='type1'>{pokes.type_1}</p>
                    <p className='type2'>{pokes.type_2}</p>
                </div>
                <div className='imageContainer'>
                    <img className='imageSize'src={pokes.url_image} alt={pokes.pokemon}/>
                </div>
            </li>
            <br></br>
            </>
        )

    }
}
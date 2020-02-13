import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        const pokes = this.props.poke;

        return (
            <>
            <li className='poke' key={pokes._id}>
                <table className='pokeContainer'>
                    <tr>
                        <th>{pokes.pokemon}</th>
                    </tr>
                    <tr className='tableRow'>
                        <td>Height: {pokes.height}</td>
                        <td>Weight: {pokes.weight}</td>
                        <td>Type 1: {pokes.type_1}</td>
                        <td>Type 2: {pokes.type_2}</td>
                    </tr>
                    <tr className='tableRow'>
                        <td>HP: {pokes.hp}</td>
                        <td>Attack: {pokes.attack}</td>
                        <td>Defense: {pokes.defense}</td>
                        <td>Speed: {pokes.speed}</td>
                    </tr>
                </table>
                <div className='imageContainer'>
                    <img className='imageSize'src={pokes.url_image} alt={pokes.pokemon}/>
                </div>
            </li>
            <br></br>
            </>
        )

    }
}
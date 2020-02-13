import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        const pokes = this.props.poke;

        return (
            <>
            <li className='poke' key={pokes._id}>
                <h2 id='pokeHeader'>{pokes.pokemon}</h2>
                <table>
                    <tr className='tableRow'>
                        <td><strong>Type 1:</strong> {pokes.type_1}</td>
                        <td><strong>Type 2:</strong> {pokes.type_2}</td>
                    </tr>
                    <tr className='tableRow'>
                        <td><strong>Height:</strong> {pokes.height}</td>
                        <td><strong>Weight:</strong> {pokes.weight}</td>
                    </tr>
                    <tr>
                        <td className='lastRow'><strong>Attack:</strong> {pokes.attack}</td>
                        <td className='lastRow'><strong>Defense:</strong> {pokes.defense}</td>
                        <td className='lastRow'><strong>Speed:</strong> {pokes.speed}</td>
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
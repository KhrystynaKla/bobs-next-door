import React from 'react'

function Store({store}) {
    return (
    <tr>
        <td className="row-name">
            <span>{store.name}</span>
        </td>
        <td>
            <a href={store.url} target="_blank"><b><img src={store.image} alt={store.name}/></b></a>
        </td>
        <td>
            <span>{store.season}</span>
        </td>
        <td>
            <span>{store.episode}</span>
        </td>
    </tr>
    );
}

export default Store
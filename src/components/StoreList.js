import React from "react"
import Store from "./Store"

function StoreList({stores}) {

    const info =stores.map(store=> <Store key ={store.name} store={store}/>)


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {info}
            </tbody>
        
        </table>
    );
}

export default StoreList;
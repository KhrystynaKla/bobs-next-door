import React, {useState} from "react"

function NewStoreForm({postStore}) {
    const [storeForm, setStoreForm]=useState({
        name: '',
        image: '',
        season:'',
        episode: '',
    })

    function onSubmitStore (event){
        event.preventDefault()
        postStore(storeForm)
        console.log(storeForm)
    }

    function handleChange(event){
        setStoreForm({...storeForm, [event.target.id]:event.target.value})
    }
    return(
        <form onSubmit={onSubmitStore} id ='form'> 
            <input type="text" id="name" placeholder="Store Name" onChange={handleChange}/>
            <input type="text" id="image" placeholder="Image URL" onChange={handleChange} />
            <input type="number" id="season" placeholder="Season" step="1" onChange={handleChange}/>
            <input type="number" id="episode" placeholder="Episode" step="1" onChange={handleChange}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;
import React from 'react'

function NameList(){
    const names = ['Deepak', 'Vikas', 'Vinita'];
    const person = names.map(name => <h2>{name}</h2>)
    return(
        <div>
            {person}
        </div>
    )
}

export default NameList
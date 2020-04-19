import React from 'react'

function Person({person}){
    return(
        <div>
            <h2>I am {person.name} having age {person.age} years and skills are {person.skill}</h2>
        </div>
    )
}

export default Person
import React from 'react'
import Person from './Person'

function NameList(){
    const names = ['Deepak', 'Vikas', 'Vinita'];
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Deepak',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Subhash',
    //         age: 32,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Arun',
    //         age: 34,
    //         skill: 'Testing'
    //     },
    //     {
    //         id: 4,
    //         name: 'Rahul',
    //         age: 28,
    //         skill: 'Php'
    //     }
    // ]
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    //const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return <div>{nameList}</div>
}

export default NameList
import React from 'react'
import Person from './components/Person'

function NameList(){
    // const names = ['Deepak', 'Vikas', 'Vinita'];
    const persons = [
        {
            id: 1,
            name: 'Deepak',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Subhash',
            age: 33,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Arun',
            age: 34,
            skill: 'Testing'
        },{
            id: 4,
            name: 'Rahul',
            age: 27,
            skill: 'PHP'
        }
        
    ]
    // const person = names.map(name => <h2>{name}</h2>)
    const personList = persons.map(person => <Person person={person}/>);
    return(
        <div>
            {personList}
        </div>
    )
}

export default NameList
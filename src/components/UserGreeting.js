import React, {Component} from 'react'

class UserGreeting extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }

    render(){

        // Short circuit operator
        return this.state.isLoggedIn && <div>Welcome Deepak</div>

        // Ternary operator
        // return this.state.isLoggedIn ? (<div>Welcome Deepak</div>) : (<div>Welcome Guest</div>)

        // Element Arrtibute
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Deepak</div>;
        // }else{
        //     message = <div>Welcome Guest</div>;
        // }
        // return <div>{message}</div>

        // Useing if/else statement
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Deepak</div>
        //     )
        // }else{
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return(
        //     <div>
        //         <div>Welcome Deepak</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
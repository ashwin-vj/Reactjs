import React, { Component } from 'react'

class UserGreeting extends React.Component {
    
    constructor(props){
        super(props);
        this.state={isLoggedIn:true}
    }

  render() {
    const isLoggedIn=this.state.isLoggedIn;
    if(this.state.isLoggedIn){
        return(
            <div>Welcome to Amadis Technologies</div>
        )
    }
    else{
        return(
            <div>Please sign in Amadis Technologies </div>
        )
    }
  }
}

export default UserGreeting
import React, { Component } from 'react'

export default class ClassState extends Component{
    constructor(props){
        super(props);
        this.state={statement:"wrong"}
    }
    render(){
        return(
            <>
            <h2>This is a state in class component - {this.state.statement}</h2>
            <button onClick={()=>{this.setState({statement:"correct"})}}>Change Statement</button>
            </>
        )
       
    } 
}
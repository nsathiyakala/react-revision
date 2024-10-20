import React, { Component } from "react";

// Multiple state in hooks by using Functional component
export default class ClassScooterFunc extends Component{
    constructor(){
        super();
        this.state={
            Color:"Merun",
            Brand:"Honda",
            Model:"Activa",
            Year:"2024"
        }
    }
    render(){
        return(
            <>
            <h2>This is a Class Component scooter</h2>
            <p>Color-{this.state.Color}</p>
            <p>Brand-{this.state.Brand}</p>
            <p>Model-{this.state.Model}</p>
            <p>Year - {this.state.Year}</p>
            <button onClick={()=>this.setState((previousState)=>{return{...previousState,Color:"Blue"}})}>Change Scooter Color</button>
            </>
        )
    }
}
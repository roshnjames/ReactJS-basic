import React from 'react'
function Counter({title,...obj}){

    return(
        <>
            <h3>{title}:{obj.c},  {obj.place}</h3>
        </>
    )
}
/*With class
import {Component} from 'react'

class Counter extends Component{
    render(){ 
    return(
        <div>
            <h1>{this.props.title} : {this.props.c}</h1>
        </div>
    );
}}*/

export default Counter
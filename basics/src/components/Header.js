//function Header(props){
import {Component} from 'react'
class Header extends Component{
    render(){
    return(
        <p style={{color:'red',backgroundColor:'blue'}}>Hello....{this.props.dt}</p>
    );
}}

export default Header
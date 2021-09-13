import React, { Component } from "react";

class Img extends Component{
    constructor (props){
        super(props);
    }
    render(){
        return (
        <div className="img-holder">
            <img src={this.props.src}/>
            <p>{this.props.desc}</p>
        </div>
        );

    }
}

export default Img;
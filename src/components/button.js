import React from 'react';
import './button.css';

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            active: false,
            hi:"Hello",
            deltaX: 0,
            deltaY: 0
        }
        this.myRef = React.createRef();
    }
    render(){
        return(
            <button className="btn" onClick={this.clicked.bind(this)} ref={this.myRef}>
            <span className="text">{this.state.hi}</span>
            {this.state.active === true?(
            <span className="circle" 
                  style={{top:this.state.deltaY, left:this.state.deltaX}}
                  onAnimationEnd={this.animate.bind(this)}/>
            ):("")}
            </button>
    )}
    
    clicked(event){
        let {clientX, clientY} = event
        let {x, y} = this.myRef.current.getBoundingClientRect()
        let deltaX = clientX - x - 10
        let deltaY = clientY - y - 10 
        this.setState({
            active: true,
            hi: "It's ME",
            deltaX: deltaX,
            deltaY: deltaY
        })
    }

    animate(){
        this.setState({
            active: false,
            hi: "Hello"
        })
    }
}

export default Button;
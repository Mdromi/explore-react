
import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

class MainConcept extends Component {

    state = {
        name: "Md Romi "
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({name: "Md Romi "})
        // }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Learning React Advance Concept</h1>
                <RegComp name={`${this.state.name}Reg Comp`}/>
                <PureComp name={`${this.state.name}Pure Comp`}/> {/* This comp update because i use those como navbar component, that's why render PureCompo */}
            </div>
        );
    }
}

export default MainConcept;
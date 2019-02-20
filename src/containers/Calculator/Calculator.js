import React, { Component } from 'react';
import CalScreen from '../../components/CalcScreen/CalScreen';

export default class Calculator extends Component {
    render() {
        return (
            <div className="container">
                <CalScreen />
            </div>
        )
    }
}

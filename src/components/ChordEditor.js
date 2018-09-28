import React, { Component } from 'react';
import ChordSheetJS from 'chordsheetjs';

class ChordEditor extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 0 };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getChordMarkup(){
        
        let value = this.state.value;

        return (value * value);
    }

    render(){
        return(
            <div className="chord-editor">
                <div className="panel">
                    <h3>Input</h3>
                    <textarea 
                        style={{width: "100%", height: "100%"}}
                        onChange = {this.handleChange}
                        defaultValue = {this.state.value}
                    />
                </div>
                <div className="panel">
                    <h3>Output</h3>
                    <label>{ this.getChordMarkup() }</label>
                </div>

            </div>
        );
    }
}

export default ChordEditor;
import React, {Component} from 'react';
import './Flexi.css';

class Flexi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person_name: '',
            states: '',
            frmData: this.props.fData
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.onSubmit(event.target.value);
    }

    static getDerivedStateFromProps(props, state) {
        if(props.fData !== state.frmData) {
          return {frmData: props.fData}
        }
        return null;
    }

    submitHandler = () => {
        alert(this.state.frmData);
    }

    render() {
        const form = this.props.config.items.map((item) => (
            item.type === "TextField" ? <div className="text-field">
                <label for={item.name}>{item.label} : </label>
                <input type="text" value={this.state.person_name} name={item.name} onChange={this.handleChange} placeholder={item.name} /> 
            </div> : item.type === "DropDown" ? <div className="drop-down">
                <label for={item.name}>{item.label} : </label>
                <select name={item.name} onChange={this.handleChange} value={this.state.states}>
                    {item.values.map((itms, index) => (
                        <option key={index} value={itms}>{itms}</option>
                    ))}
                </select>
            </div> : ''
        ))
        return (
        <div>{form}
            <button type="submit" className="smt-btn" onClick={this.submitHandler}>Submit</button>
        </div>
        )
    }
}

export default Flexi;
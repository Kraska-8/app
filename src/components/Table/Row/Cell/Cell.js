import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import * as actionTypes from '../../../../store/actions'  // Importing constants of action types to avoid misspellings

const Paragraph = styled.p`
  height:20px;
`;

const Span = styled.span`
  font-size:14px;
  color: #ccc;
`;

const Input = styled.input`
    display: block;
    width: 60%;
    padding: .375rem .75rem;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = { editing: false }; //State of showing/hiding input
    }
    //Focusing on input and changing the local class state
    onFocusHandler = () => {
        this.setState({
            editing: true
          }, () => {
             this.refs.input.focus();
        });
    }

    // Canging the local clsss state
    onBlurHandler = () => {
        this.setState({ editing: false });
    }

    render() {
        const { id, name, value, type } = this.props; //Get props from Row component 
        return this.state.editing ?
            <Input 
                type={type}
                ref='input'
                name={name}
                value={value}
                id={id}
                onChange={(e)=> {this.props.handleChange(id, name, e.target.value)}}
                onBlur={() => this.onBlurHandler()} 
            /> : 
            <Paragraph onClick={() => this.onFocusHandler()}>{ value ? value : <Span>Empty cell. Click to edit it</Span>}</Paragraph>
    }  
}
const mapDispatchToProps = dispatch =>{
    return{
        handleChange: (id, name, value) => dispatch({type:actionTypes.UPADATE_ROW, payload:{id, name, value}})
    }
}

export default connect(null, mapDispatchToProps)(Cell)
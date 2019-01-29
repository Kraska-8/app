import React, {Component} from 'react';
import Cell from './Cell/Cell'
import styled  from 'styled-components'
import {connect} from 'react-redux'
import * as actionTypes from '../../../store/actions'  // Importing constants of action types to avoid misspellings

// styling PrimaryButton passing props on margin
 const PrimaryButton = styled.button`
  color: #1972e8;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #1972e8;
  border-radius: 3px;
  margin-bottom: ${props => props.mrgBottom || "0"};
  background-color: transparent;
`;

// extending Styles for deleteButton
const DeleteButton = styled(PrimaryButton)`
  color: palevioletred;
  border-color:  palevioletred;
`;

// using Pseudo-classes styling for table row element
const TR = styled.tr`
  :hover{
    background-color: rgba(220, 226, 230, 0.16);
  }
`;

const TD = styled.td`
  padding: 15px
  vertical-align: center;
  border: 1px solid #dee2e6;
`;


class Row extends Component {
    state = {
        rows: [
          {name:'', amount:''}]
    };
    render() {
        let cells = this.props.rowsData.map((el, idx) => (
       <TR key={idx} >
          <TD>{idx}</TD>
          <TD>
            <Cell
              type="text"
              value={this.props.rowsData[idx].name}
              name={'name'}
              id={idx}
            />
          </TD>
          <TD>
            <Cell
              type="number"
              value={this.props.rowsData[idx].amount}
              name={'amount'}
              id={idx}
            />
          </TD>
          <TD>
            {/* handle row deleting action */}
            <DeleteButton
              onClick={ () => this.props.handleRemoveSpecificRow(idx)}
            >Remove 
              </DeleteButton>
          </TD>
        </TR>
      ));
      
        return (
          [cells]
        );
    }
}

const mapStateToProps = state =>{
    return{
        rowsData: state.rows 
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        handleRemoveSpecificRow: (idx) => dispatch({type: actionTypes.DELETED_ROW, id: idx})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Row)
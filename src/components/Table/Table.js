import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import Row from './Row/Row';
import * as actionTypes from '../../store/actions' // Importing constants of action types to avoid misspellings

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

const Table = styled.table`
  border: 1px solid #dee2e6;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  border-collapse: collapse;
  text-align: center;
`;


const TH = styled.th`
  padding: 15px;
  vertical-align: center;
  border-bottom-width: 1px solid #dee2e6;
  border: 1px solid #dee2e6;
`;


const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: flex-end;
`;

 class TableProd extends Component {   
      render() {
        return (
            <TableWrapper>
                {/* handle row adding action */}
                <PrimaryButton onClick={this.props.rowAddingHandler} mrgBottom="20px"> 
                    Add Row
                </PrimaryButton>
                <Table>
                    <thead>
                        <tr>
                            <TH> Id </TH>
                            <TH> Product Name </TH>
                            <TH> Product Amount </TH>
                            <TH> Action </TH>
                        </tr>
                    </thead>
                    <tbody>
                        <Row/>
                    </tbody>
                </Table>
            </TableWrapper>
        );
      }
    }

const mapDispatchToProps = dispatch =>{
    return{
        rowAddingHandler: () => dispatch({type:actionTypes.ADDING_ROW, item:{ name: "", amount: ""}}),
    }
}

export default connect(null,mapDispatchToProps)(TableProd) //connecting react and redux
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import axios from 'axios';
//import styled, { css } from 'styled-components'

const getBoards = (token) => {
    return new Promise ((resolve, reject) => {
        axios.get('http://localhost:8888/api/board',
        {
            headers: {
                'Authorization' : token
            }
        }).then((res) => {
            resolve(res.data.posts)
        }).catch((err) => {
            console.error(err)
        })
    })
}

class BoardPage extends Component{
    constructor(props) {
        super(props);

        const token = localStorage.getItem('token')
        this.state = {
            boards : [],
            token : token
        };
    }

    handleDeleteButtonClick = (onClick) => {
        onClick()
    }

    componentDidMount(){
        getBoards(this.state.token).then((result)=> {
            this.setState({
                boards : result
            });
        })
    }

    cellButton(cell, row, enumObject, rowIndex) {
        let title = this.state.boards[rowIndex].title
        return (
            <Link to="/board/detail" onClick={() => {
                localStorage.setItem("board", JSON.stringify(this.state.boards[rowIndex]))}}>
                {title}
            </Link>
        )
      }
    
    
    render(){
        return (
            <div className="table-div container">
                <BootstrapTable className="table" data={this.state.boards} tableHeaderClass="headColumn">
                <TableHeaderColumn columnClassName="columns" width="200" dataField="title" dataFormat={this.cellButton.bind(this)} isKey>
                    Title
                </TableHeaderColumn>
                <TableHeaderColumn columnClassName="columns" width="200" dataField="date" dataSort>
                    Date
                </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default BoardPage
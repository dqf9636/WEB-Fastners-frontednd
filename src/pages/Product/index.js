import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import axios from 'axios'
//import styled, { css } from 'styled-components'

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        axios.get('http://localhost:8888/api/product').then((res) => {
            resolve(res.data.products)
        }).catch((err) => {
            console.error(err)
        })
    })
}

class ProductPage extends Component{
    constructor(props) {
        super(props);

        this.state = {products : []}
    }

    cellButton(cell, row, enumObject, rowIndex) {
        let name = this.state.products[rowIndex].name
        return (
            <Link to="/product/detail" onClick={() => {
                localStorage.setItem("product", JSON.stringify(this.state.products[rowIndex]))}}>
                {name}
            </Link>
        )
    }

    componentDidMount(){
        getProducts().then((result)=> {
            this.setState({
                products : result
            });
        })
    }
    
    render(){
        return (
            <div className="table-div container">
                <BootstrapTable className="table" data={this.state.products} tableHeaderClass="headColumn">
                <TableHeaderColumn columnClassName="columns" width="200" dataField="name" dataFormat={this.cellButton.bind(this)} isKey>
                    Name
                </TableHeaderColumn>
                <TableHeaderColumn columnClassName="columns" width="200" dataField="category" dataSort>
                    Category
                </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default ProductPage
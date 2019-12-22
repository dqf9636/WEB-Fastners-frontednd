import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

//import styled, { css } from 'styled-components'



class ProductDetailPage extends Component{
    constructor(props) {
        super(props);
        const product = JSON.parse(localStorage.getItem("product"))
        if (product === null || typeof(product) === "undefined") {
            window.location.href = "/product"
        }
        this.state = {
            product : product
        };
    }
    componentDidMount(){
    }
    render(){
        return (

            <div className="container" style= {{margin: '50px'}} >
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue= {this.state.product.name} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product Image
                        </Form.Label>
                        <Col sm="10">
                        <div className="row">
                            <img src={"http://localhost:8888/images/" + this.state.product.img}></img>
                        </div>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly placeholder = {this.state.product.category} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Standard
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly placeholder = {this.state.product.standard} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Grade
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly placeholder = {this.state.product.grade} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Status
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly placeholder = {this.state.product.status} />
                        </Col>
                    </Form.Group>

                </Form>
            </div>
        )
    }
}

export default ProductDetailPage
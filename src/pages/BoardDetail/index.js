import React, { Component } from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

//import styled, { css } from 'styled-components'

const deleteBoardOuter = (token, board_id) => {
    return new Promise ((resolve, reject) => {
        axios.delete("http://localhost:8888/api/board",
            { 
                headers: { 'Authorization' : token },
                data: { board_id : board_id, foo : "bar"}
            }).then((res) => {
            resolve(res)
        }).catch((err) => {
            console.error(err)
        })
    })
}


class BoardDetailPage extends Component{
    constructor(props) {
        super(props);
        const board = JSON.parse(localStorage.getItem("board"))
        if (board === null || typeof(board) === "undefined") {
            window.location.href = "/board"
        }
        const token = localStorage.getItem("token")
        this.state = {
            board : board,
            token : token
        };
    }
    componentDidMount(){
    }

    

    render(){
        

        const deleteBoard= () => {
            deleteBoardOuter(this.state.token, this.state.board._id).then ((result) => {
                localStorage.removeItem("board")
                window.location.href = "/board"
            })
        }

        return (
            <div className="container" style= {{margin: '50px'}} >
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue= {this.state.board.title} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Contents
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly placeholder = {this.state.board.contents} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Date
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly placeholder = {this.state.board.date} />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={deleteBoard}>
                        Delete
                    </Button>
                </Form>
            </div>
        )
    }
}

export default BoardDetailPage
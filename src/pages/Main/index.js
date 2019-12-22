import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
//import styled, { css } from 'styled-components'
import './main.css'



class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
    }
    render(){
        return (
            <div>
                <Carousel className="banner">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="main_1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="main_2.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="main_3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default MainPage
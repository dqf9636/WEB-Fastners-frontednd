import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './pages/Nav'
import MainPage from './pages/Main'
import BoardPage from './pages/Board'
import LoginPage from './pages/Login'
import OrderPage from './pages/Order'
import ProductPage from './pages/Product'
import RegisterPage from './pages/Register'
import BoardDetailPage from './pages/BoardDetail'
import ProductDetailPage from './pages/ProductDetail'

import './App.css'

class App extends Component {

    render() {
      return(
        <BrowserRouter>
          <Nav />
          <Switch>
                <Route exact path="/" name="main" component={MainPage} />
                <Route exact path="/login/" name="login" component={LoginPage} />
                <Route exact path="/board/" name="board" component={BoardPage} />
                <Route exact path="/board/detail" name="boardDetail" component={BoardDetailPage} />

                <Route exact path="/order/" name="order" component={OrderPage} />
                <Route exact path="/product/" name="product" component={ProductPage} />
                <Route exact path="/product/detail" name="productDetail" component={ProductDetailPage} />

                <Route exact path="/register/" name="register" component={RegisterPage} />
            </Switch>
        </BrowserRouter>
      );
    };
}

export default App;
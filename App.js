
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize=12
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} country='in' category='technology' />}></Route>
            <Route path='/news' element={<News key='general1' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/news1' element={<News key='general2' pageSize={this.pageSize} country='in' category='general' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}


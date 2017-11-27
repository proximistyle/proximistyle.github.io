import React, { Component } from 'react'
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import './styles/Header.css'
import Signup from './Signup.jsx'
import HeaderImage from './images/header.jpg'

export default class Header extends Component {

  render() {
    const imgStyle = {display: "none"};
    return (
      <PageHeader className="hero">
        <img src={HeaderImage} style={imgStyle} />
        <Grid>
          <Row>
            <Col className="white-square" md={6} mdOffset={3}>
              <h1 className="brandname">Proximistyle</h1>
              <p className="hero-subtitle">For any outfit, see which stores have it in stock, in your size, nearby.</p>
              <Signup />
            </Col>
          </Row>
        </Grid>
        </PageHeader>
    )
  }
}

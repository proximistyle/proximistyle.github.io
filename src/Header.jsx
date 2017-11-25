import React, { Component } from 'react'
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import './styles/Header.css'
import Signup from './Signup.jsx'

export default class Header extends Component {

  render() {
    return (
      <PageHeader className="hero">
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

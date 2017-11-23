import React, { Component } from 'react'
import { PageHeader, Grid, Button, Row, Col, FormControl, FormGroup, Form } from 'react-bootstrap';
import './styles/Header.css'

export default class Header extends Component {
  render() {
    return (
      <PageHeader className="hero">
        <Grid>
          <Row>
            <Col className="white-square" md={6} mdOffset={3}>
              <h1 className="brandname">Proximistyle</h1>
              <p className="hero-subtitle">For any outfit, see which stores have it in stock, in your size, nearby.</p>
              <Form>
                <FormGroup>
                <FormControl type="text" bsSize="large" id="hero-email" placeholder="Enter your email address"/>
                </FormGroup>
                { ' ' }
                <Button type="submit" className="btn-hero">Get Early Access</Button>
              </Form>
            </Col>
          </Row>
        </Grid>
        </PageHeader>
    )
  }
}

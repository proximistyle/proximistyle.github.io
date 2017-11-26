import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import './styles/App.css';
import Footer from './Footer.js'
import Header from './Header.jsx'
import SignupInline from './SignupInline.jsx'
import mobileMockupPhoto from './images/iphone_app_mockup_search.png'

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <section id="howitworks">
          <Grid>
            <Row className="text-center">
              <Col md={4}>
                  <h1 className="how-number">1</h1>
                  <h3 className="how-heading">find it</h3>
                  <p className="lead">Whether you’re looking for a grey winter coat, a pair of pink pumps
                    or a dress for the christmas party,
                    <strong><i> Proximistyle will show you which stores have it in stock, in your size, nearby.</i></strong> </p>

                  <h1 className="how-number">2</h1>
                  <h3 className="how-heading">reserve it</h3>
                  <p className="lead">You can quickly reserve the items you like from within the app.</p>
              </Col>
                <Col md={4}>
                <img src={mobileMockupPhoto} className="mobile-mockup" alt="A mockup of the phone app" />
                </Col>
              <Col md={4}>
                <h1 className="how-number">3</h1>
                <h3 className="how-heading">try it</h3>
                <p className="lead">Proximistyle will show you how to get to the store to try on the clothes you just reserved.</p>

                <h1 className="how-number">4</h1>
                <h3 className="how-heading">buy it</h3>
                <p className="lead">If it’s perfect, just pay through the app and the shop assistant will wrap up the item for you.
                        No need to queue.</p>
              </Col>
            </Row>
          </Grid>
        </section>

        <section id="signup">
            <Grid>
               <h2 className="section-heading">Don't Spend Your Time Looking For Things</h2>
                <SignupInline />
            </Grid>
        </section>

        <Footer />

      </div>
    );
  }
}
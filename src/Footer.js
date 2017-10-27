import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
           <footer>
            <hr/>
            <Grid>
             <Row>
              <Col md={6}>
                <span className="copyright">&copy; Proximistyle 2017</span>
              </Col>
              <Col md={6}>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#terms">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.twitter.com">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.facebook.com">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.instagram.com">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </footer>
        );
    }
}
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
                <span className="copyright">&copy; 2017 Proximistyle </span>
              </Col>
              <Col md={6}>
                <ul className="list-inline">

                  <li className="list-inline-item">
                    <a href="http://www.twitter.com/proximistyle" target="_blank" className="social-media-icon">
                      <i className="fa fa-2x fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.facebook.com/proximistyle" target="_blank" className="social-media-icon">
                      <i className="fa fa-2x fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.instagram.com/proximistyle" target="_blank" className="social-media-icon">
                      <i className="fa fa-2x fa-instagram"></i>
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
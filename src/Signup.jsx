import React, { Component } from 'react'
import { Button, FormGroup, FormControl} from 'react-bootstrap'
import './styles/Signup.css'

export default class Signup extends Component {

  handleSubmit(event) {
    window.gtag('event', 'sign_up', {'campaign': 'early_access'});
    console.log("The sign up form has been submitted")
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form action="https://proximistyle.us17.list-manage.com/subscribe/post?u=953e74c00f02187588164396b&amp;id=e1e9ab2523"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"
          noValidate
          onSubmit={this.handleSubmit}>

          <div id="mc_embed_signup_scroll">
            <div className="inline-fields">
              <FormGroup className="mc-field-group inline" controlId="formFirstName">
                <FormControl bsSize="large" type="text" name="FNAME" className="" id="mce-FNAME" placeholder="First name"/>
              </FormGroup>
              {' '}
              <FormGroup className="mc-field-group inline" controlId="formLastName">
                <FormControl bsSize="large" type="text" name="LNAME" className="" id="mce-LNAME" placeholder="Last name" />
              </FormGroup>
            </div>
            <FormGroup className="mc-field-group" controlId="formEmail">
              <FormControl bsSize="large" type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Enter your email address"/>
            </FormGroup>
            <FormGroup id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" ></div>
              <div className="response" id="mce-success-response" ></div>
            </FormGroup>
            {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
            <div id="bottom-form" aria-hidden="true">
              <FormControl type="text" name="b_953e74c00f02187588164396b_e1e9ab2523" tabIndex="-1" value="" />
            </div>
            <div className="clear">
              <Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn-hero">
              Get Early Access
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

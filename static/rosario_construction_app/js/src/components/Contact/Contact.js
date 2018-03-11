import React from 'react';
import Map from './Map.js';

class Contact extends React.Component {
    onSubmit(event){
        event.preventDefault();
        let inputs = document.getElementById('contactForm').children;
        let control = true;
        for (let input of inputs) {
            if (input.children.length) {
               if (input.children[0].children[1].value.length) {
                    input.children[0].children[1].style.borderColor = '#ced4da';
               }
               else {
                    input.children[0].children[1].style.borderColor = 'red';
                    control = false;
               }
            }
        }
        if (control) {
            let form_data = new FormData(document.getElementById('contactForm'))
            const request = new XMLHttpRequest();
                request.open('POST', '/post/', true);
                request.send(form_data)
                request.onload = function(){
                    // console.log(request.response);
                }
            document.querySelector('#send-us-a-mess').innerText = 'Thank You';
            for (let input of inputs) {
                if (input.children.length) {
                   input.children[0].children[1].disabled = true;
                }
            }
        }
    }
    render(){
        return (
            <div className="container" style={{ 'marginBottom': '3rem'}}>
              < Map 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhIQ4d9JV5e_JQOqEsBRTzKjdg3sUhpjo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
              <div style={{ 'textAlign': 'center'}}>

                  <div className="row" style={{ marginTop: "5rem" }}>
                    <div className="col-sm col-md-4">
                          <h3>Contact Details</h3>
                          <p>
                              <br />Albuquerque, NM
                              <br />
                          </p>
                          <p>
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                              <span> (505) 459-2409</span>
                          </p>
                          <p>
                              <i className="fa fa-envelope-o" aria-hidden="true"></i>
                              <a href="mailto:strongconstruction01@gmail.com"> strongconstruction01@gmail.com</a>
                          </p>
                          <p>
                              <i className="fa fa-clock-o" aria-hidden="true"></i>
                              <span> Monday - Friday: 8:00 AM to 5:00 PM</span>
                          </p>
                      </div>

                      <hr />
                      
                      <div className="col-sm col-md-8">
                          <h3 id="send-us-a-mess">Send us a Message</h3>
                          <form onSubmit={ this.onSubmit } name="sentMessage" id="contactForm" noValidate="">
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Full Name:</label>
                                      <input type="text" className="form-control" id="name" name="name" required="" data-validation-required-message="Please enter your name." />
                                      <p className="help-block"></p>
                                  </div>
                              </div>
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Phone Number:</label>
                                      <input type="tel" className="form-control" id="phone" name="phone" required="" data-validation-required-message="Please enter your phone number." />
                                      <div className="help-block"></div>
                                  </div>
                              </div>
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Email Address:</label>
                                      <input type="email" className="form-control" id="email" name="email" required="" data-validation-required-message="Please enter your email address." />
                                      <div className="help-block"></div>
                                  </div>
                              </div>
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Message:</label>
                                      <textarea rows="10" cols="100" className="form-control" id="message" name="message" required="" data-validation-required-message="Please enter your message" maxLength="999" style={{ "resize":"none" }}></textarea>
                                      <div className="help-block"></div>
                                  </div>
                              </div>
                              <div id="success"></div>
                              <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
                          </form>
                      </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Contact;
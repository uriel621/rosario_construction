import React from 'react';

const centered = {
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0, 
    right: 0,
}
class Footer extends React.Component {
    render(){
        return (
            <footer className="nice">
                <div className="row">
                    <div className="col-md-4 col-sm-6 footer-navigation" style={{ 'textAlign':'center' }}>
                        <h5>Strong Construction & Service</h5>
                        <p className="company-name"><a href="http://www.evergarcia.com" target="_blank">Ever Uriel Garcia</a> © 2017</p>
                    </div>
                    <div className="col-md-4 col-sm-6 footer-contacts">
                        <div><span className="fa fa-map-marker footer-contacts-icon"></span>
                            <p>Albuquerque, New Mexico</p>
                        </div>
                        <div><i className="fa fa-phone footer-contacts-icon"></i>
                            <p className="footer-center-info email text-left">(505) 459-2409</p>
                        </div>
                        <div><i className="fa fa-envelope footer-contacts-icon"></i>
                            <p><a style={{ 'fontSize':'12.5px'}} href="mailto:strongconstruction01@gmail.com">strongconstruction01@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="clearfix visible-sm-block"></div>
                    <div className="col-md-4 footer-about" style={{ 'textAlign':'center' }}>
                        <h4>About the company</h4>
                        <p>We (Strong Construction & Service) are commercial and residential concrete contractors. We are experts in concrete job interpretation, design and implementation. We make concrete projects sound, functional and aesthetically pleasing.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
import React from "react";
import { Link } from 'react-router-dom';

const SomeProjects = () =>
    <div style={{ "marginTop": "3rem", "marginBottom": "3rem" }}>

        <h2 style={{ 'textAlign':'center' }}>Some of our Projects</h2>
        <hr />
        <div className="row" style={{ "margin": "0 auto" }}>
            <div className="card col-sm-12 col-md-4" style={{"width": "20rem", "margin": "0px auto", "marginBottom":"20px", 'border':0 }}>
                <Link to="/gallery">
                    <img style={{ 'height': '300px' }} className="card-img-top" src="static/rosario_construction_app/images/block_walls_1/image_1.jpg" alt="Card image cap" data-toggle="modal" data-target="#Modal1" />
                </Link>
                {/* <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> */}
            </div>
            <div className="card col-sm-12 col-md-4" style={{"width": "20rem", "margin": "0px auto", "marginBottom":"20px", 'border':0 }}>
                <Link to="/gallery">
                    <img style={{ 'height': '300px' }} className="card-img-top" src="static/rosario_construction_app/images/concrete/image_2.jpg" alt="Card image cap" data-toggle="modal" data-target="#Modal2" />
                </Link>
                {/* <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> */}
                    </div>
            </div>
    </div>

export default SomeProjects;
import React from 'react';

class About extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid rounded mb-4" src="static/rosario_construction_app/images/other/man_ladder.jpg" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2>About</h2>
                        <p>We are a Albuquerque based residential building general contractor and home builder offering concrete, block walls, interior remodeling, room additions, tile, and new construction</p>
                        <p>As a construction company our greatest assets are the level of craftsmanship, dedication and experience our employees bring to each project. We have learned that integrity, attention to detail and honesty each step of the way, makes the best working environment for everyone.</p>
                        <p>We like to get to know our customers on a first name basis. We treat you like one of the family. On each job we will listen to your wishes and needs, so ultimately you end up with exactly what you envision in your home renovation project.</p>
                        <p>We do all phases of home improvement. No project is too big or small. Call us today to set up your free in home estimate.</p>
                        <p style={{ color: 'rgb(83, 131, 211)'}}>(505) 459-2409</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;

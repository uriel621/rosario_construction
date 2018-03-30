import React from "react";

const header = {
    display: 'block',
    background: 'transparent',
    padding: '0 0 10px',
    borderBottom: '2px solid #5383d3'
}

const SomeAbout = () =>
    <div>
        <div className="row" style={{ 'textAlign': 'center', 'marginTop': '3rem', 'marginBottom': '3rem' }}>
            <div className="col-lg-4">
                <h4 style={ header }>GENERAL-<span style={{ 'color': '#5383d3' }}>CONTRACTING</span></h4>
                <ul style={{ 'listStyleType':'none', 'paddingLeft': 0 }}>
                    <li><h5>Plaster</h5></li>
                    <li><h5>Stucco</h5></li>
                    <li><h5>Concrete</h5></li>
                    <li><h5>Block Walls</h5></li>
                    <li><h5>Tile</h5></li>
                    <li><h5>EIFS</h5></li>
                </ul>
            </div>
            <div className="col-lg-4">
                <h4 style={ header }>SUB-<span style={{ 'color': '#5383d3' }}>CONTRACTING</span></h4>
                <p>We take pride in our ability to assemble the best teams for our clients using highly-skilled and qualified subcontractors and suppliers that share our commitment to quality and craftsmanship.</p>
            </div>
            <div className="col-lg-4">
                <h4 style={ header }>FREE-<span style={{ 'color': '#5383d3' }}>ESTIMATING</span></h4>
                <p>Estimating your project is an important undertaking, giving you keen insight into what you are building and what the costs are, every step of the way. A good estimate is clear and comprehensive.</p>
            </div>
        </div>
    </div>

export default SomeAbout;
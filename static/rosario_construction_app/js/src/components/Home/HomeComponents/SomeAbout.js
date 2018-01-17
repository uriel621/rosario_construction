import React from "react";

const header = {
    display: 'block',
    background: 'transparent',
    padding: '0 0 10px',
    borderBottom: '2px solid #5383d3'
}

const SomeAbout = () =>
    <div>
        <div className="row" style={{ 'textAlign': 'center', 'marginTop': '.5rem' }}>
            <div className="col-lg-4">
                <h4 style={ header }>GENERAL-<span style={{ 'color': '#5383d3' }}>CONTRACTING</span></h4>
                <p>Building a new home is not a small undertaking. In fact, it is one of the larger tasks an individual or family may involve themselves in. Building requires sound techniques and experienced people.</p>
            </div>
            <div className="col-lg-4">
                <h4 style={ header }>SUB-<span style={{ 'color': '#5383d3' }}>CONTRACTING</span></h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div className="col-lg-4">
                <h4 style={ header }>FREE-<span style={{ 'color': '#5383d3' }}>ESTIMATING</span></h4>
                <p>Estimating your project is an important undertaking, giving you keen insight into what you are building and what the costs are, every step of the way. A good Estimate is clear and comprehensive.</p>
            </div>
        </div>
    </div>

export default SomeAbout;
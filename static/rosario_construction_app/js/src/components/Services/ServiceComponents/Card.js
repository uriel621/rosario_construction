import React from 'react';

const Row = (props) => 
        <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
            <img style={{ 'height': '383px' }} onClick={ props.event } className="card-img-top" src={ props.picture } alt="Card image cap" data-toggle="modal" data-target={ props.modal } />
            <div className="card-body">
                <h4 className="card-title">{ props.title }</h4>
                <p className="card-text">{ props.paragraph }</p>
            </div>
        </div>

export default Row;

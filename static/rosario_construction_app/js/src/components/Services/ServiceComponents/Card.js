import React from 'react';

const Row = (props) => 
        <div className="card col-sm-12 col-md-4" style={{ "marginBottom":"20px", 'border':0 }}>
            <img style={{ 'height': '383px', 'cursor':'pointer', 'border': 'solid 1px rgb(255, 193, 7)' }} onClick={ props.event } className="card-img-top" src={ props.picture } alt="Card image cap" data-toggle="modal" data-target={ props.modal } />
            <div className="card-body">
                <h4 className="card-title">{ props.title }</h4>
                <p className="card-text">{ props.paragraph }</p>
            </div>
        </div>

export default Row;

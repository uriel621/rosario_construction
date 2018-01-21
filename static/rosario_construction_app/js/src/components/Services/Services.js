import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './ServiceComponents/modal_carousel/Modal';
import Card from './ServiceComponents/Card';

const jumbotron = {
    paddingTop: "6rem",
    paddingBottom: "6rem",
    marginBottom: 0,
    // backgroundcolor: "#fff",
    backgroundImage: 'url(static/rosario_construction_app/images/other/table.jpg)',
    backgroundPosition: 'left'
}

const album = {
    paddingTop: "3rem",
    paddingBottom: "3rem",
}

const card = {
    float: "left",
    width: "33.333%",
    padding: ".75rem",
    marginBottom: "2rem",
    border: 0
  }
  
var thumbnail = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22356%22%20height%3D%22280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20356%20280%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15f99d16b9b%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15f99d16b9b%22%3E%3Crect%20width%3D%22356%22%20height%3D%22280%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22117.34375%22%20y%3D%22148.1%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
let pics = [thumbnail, thumbnail, thumbnail, thumbnail, thumbnail]
class Services extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: null
        }
        this.modal_carousel = this.modal_carousel.bind(this);
        this.modals_array = ['Modal1', 'Modal2', 'Modal3', 'Modal4', 'Modal5', 'Modal6', 'Modal7', 'Modal8', 'Modal9']
        this.block_walls_1 = ['static/rosario_construction_app/images/block_walls_1/image_1.jpg', 'static/rosario_construction_app/images/block_walls_1/image_2.jpg', 'static/rosario_construction_app/images/block_walls_1/image_3.jpg', 'static/rosario_construction_app/images/block_walls_1/image_4.jpg'];
        this.block_walls_2 = ['static/rosario_construction_app/images/block_walls_2/image_1.jpg', 'static/rosario_construction_app/images/block_walls_2/image_2.jpg'];
        this.block_walls_3 = ['static/rosario_construction_app/images/block_walls_3/image_1.jpg'];
        this.concrete = ['static/rosario_construction_app/images/concrete/image_1.jpg', 'static/rosario_construction_app/images/concrete/image_2.jpg', 'static/rosario_construction_app/images/concrete/image_3.jpg', 'static/rosario_construction_app/images/concrete/image_4.jpg'];
        this.tile = ['static/rosario_construction_app/images/tile/image_1.jpg', 'static/rosario_construction_app/images/tile/image_2.jpg', 'static/rosario_construction_app/images/tile/image_3.jpg', 'static/rosario_construction_app/images/tile/image_4.jpg', 'static/rosario_construction_app/images/tile/image_5.jpg', 'static/rosario_construction_app/images/tile/image_6.jpg', 'static/rosario_construction_app/images/tile/image_7.jpg', 'static/rosario_construction_app/images/tile/image_8.jpg'];
        this.plaster = ['static/rosario_construction_app/images/plaster/image_1.jpg', 'static/rosario_construction_app/images/plaster/image_2.jpg', 'static/rosario_construction_app/images/plaster/image_3.jpg', 'static/rosario_construction_app/images/plaster/image_4.jpg'];
        
        this.thumbnail = [thumbnail, thumbnail, thumbnail]
    }
    modal_carousel(card){
        let modal = card.currentTarget.getAttribute('data-target').substring(1);
        console.log(modal);
        this.setState({modal: <Modal modal={ modal } pics={ this.if_modal(modal) } />});
    }
    if_modal(modal){
        if(modal === 'Modal1'){
            return this.block_walls_1;
        }
        else if(modal === 'Modal2'){
            return this.block_walls_2;
        }
        else if(modal === 'Modal3'){
            return this.block_walls_3;
        }
        else if(modal === 'Modal4'){
            return this.concrete;
        }
        else if(modal === 'Modal5'){
            return this.tile;
        }
        else if(modal === 'Modal6'){
            return this.plaster;
        }
        else if(modal === 'Modal7'){
            return this.thumbnail;
        }
        else if(modal === 'Modal8'){
            return this.thumbnail;
        }
        else if(modal === 'Modal9'){
            return this.thumbnail;
        }
    }
    render(){
        return (
            <main role="main">
            { this.state.modal }
                <section className="jumbotron text-center" style={jumbotron}>
                    <div className="container" style={{ "maxWidth": "40rem", "color":"white" }}>
                        <h1 className="jumbotron-heading" style={{ "fontWeight": 300 }}>Lorem ipsum </h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, urna penatibus tellus diam tristique himenaeos posuere, nisl habitasse duis aptent tortor lobortis dapibus. Bibendum quisque orci phasellus commodo, arcu laoreet.</p>
                        <p style={{ "marginBottom": 0 }}>
                            <Link className="btn" style={{ "color":"#fff", "borderColor": "#ffc107" }} to="/contact">Contact</Link>
                        </p>
                    </div>
                </section>
                <div>
                    <div className="album" style={ album }>
                        <div className="">
                            <div className="row" style={{ "margin": "0 auto" }}>
                                <Card 
                                    title="Block" 
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content" 
                                    picture={ this.block_walls_1[0] }
                                    event={ this.modal_carousel }
                                    modal="#Modal1"
                                />
                                <Card 
                                    title="Block" 
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content" 
                                    picture={ this.block_walls_2[0] }
                                    event={ this.modal_carousel }
                                    modal="#Modal2"
                                />
                                <Card 
                                    title="Block" 
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content" 
                                    picture={ this.block_walls_3[0] }
                                    event={ this.modal_carousel }
                                    modal="#Modal3"
                                />
                            </div>

                            <div className="row" style={{ "margin": "0 auto" }}>
                                <Card 
                                    title="Concrete" 
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content" 
                                    picture={ this.concrete[0] }
                                    event={ this.modal_carousel }
                                    modal="#Modal4"
                                />
                                <Card 
                                    title="Tile" 
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content" 
                                    picture={ this.tile[0] }
                                    event={ this.modal_carousel }
                                    modal="#Modal5"
                                />
                                <Card 
                                    title="Stucco" 
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content" 
                                    picture={ this.plaster[0] }
                                    event={ this.modal_carousel }
                                    modal="#Modal6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Services;
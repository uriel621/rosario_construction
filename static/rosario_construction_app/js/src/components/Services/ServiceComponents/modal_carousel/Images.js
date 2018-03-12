import React from 'react'

const Images = (props) => {
    let img = props.pics.map((src, index) => {
        let image = null;
        if(index === 0){
            image = <div className="carousel-item active" style={{ 'maxHeight':'500px' }} key={ index } >
                        <img style={{ 'height':'100%' }} className="d-block w-100" src={ src } alt="First slide" />
                    </div>  
        }
        else{
            image = <div className="carousel-item" style={{ 'maxHeight':'500px' }} key={ index } >
                        <img style={{ 'height':'100%' }} className="d-block w-100" src={ src } alt="First slide" />
                    </div>
        }
        return image;
    })
    return (
        <div id="images-for-modal">
           { img }      
        </div>
    );
}

export default Images;


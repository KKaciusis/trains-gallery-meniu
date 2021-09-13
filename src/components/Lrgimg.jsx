import React from 'react';

const LrgImg = (props) =>{
    return (
        <div>
            <div className="lg-img-hldr">
                <div className="top-bar">
                    <a onClick={props.closeImage}><img src="../icon/close-svg.svg" className="close-icon" alt="This is close icon"/></a>
                </div>
                <img className="imager" src={props.src}/>
                <div className="bottom-bar">
                <div className="description">{props.description}</div>
                </div>
            </div>
        </div>
    );
}

export default LrgImg;
import React, { Component } from "react";
import Img from "./Img";
import LrgImg from "./Lrgimg";
import './images.css';

class Images extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgLst: [
                {imgSrc: '../img/01.jpg', desc: 'Papa smurf cleans train.'},
                {imgSrc: '../img/02.jpg', desc: 'X4449 on the route.'},
                {imgSrc: '../img/03.jpg', desc: 'Big black-red beast.'},
                {imgSrc: '../img/04.jpg', desc: 'Green arrow starts engine.'},
                {imgSrc: '../img/05.jpg', desc: 'Long way home.'},
                {imgSrc: '../img/06.jpg', desc: 'Montain Daytrip in Switzerland.'},
                {imgSrc: '../img/07.jpg', desc: 'Red Darf at work.'},
                {imgSrc: '../img/08.jpg', desc: 'Funny blue train on bridge.'},
                {imgSrc: '../img/09.jpg', desc: 'Still working in Alaska mine.'},
                {imgSrc: '../img/10.jpg', desc: 'Water and train- both green.'},
                {imgSrc: '../img/11.jpg', desc: 'Rainy day in nowhere.'},
                {imgSrc: '../img/12.jpg', desc: 'Star train waiting for passengers.'}
            ],
            imgStyle: {
                imgListConStyle:{
                    display: 'flex'
                },
                lrgImgConStyle : {
                    display: 'none',
                    width: 'auto'
                }
            },
            lrgImg: {
                src: '',
                description: ''
            }
        }
    }
    handleClick = (e) => {
        console.log("Halleliuyah");
        e.preventDefault();
        if(this.state.imgStyle.imgListConStyle.display === 'flex'){
            this.setState({
                imgStyle: {
                    imgListConStyle:{
                        display: 'none'
                    },
                    lrgImgConStyle : {
                        display: 'block'
                    }
                }
            });
            Object.values(this.state.imgLst).forEach(element =>{
                let sourceString = '..'+e.target.src.toString().slice(21);
                if(element.imgSrc === sourceString){
                    this.setState({
                        lrgImg: {
                            src: e.target.src,
                            description: element.desc
                        }
                    });
                }else{
                    console.log("Death")
                }
            });
        };
    };

    lrgImgClose = (e) =>{
        e.preventDefault();
        this.setState({
            imgStyle: {
            imgListConStyle:{
                display: 'flex'
            },
            lrgImgConStyle : {
                display: 'none'
            }
        }})
    }




    render(){
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick={this.handleClick} style={{background: 'none', border:  'none'}} key={image.imgSrc[0]}><Img src={image.imgSrc} desc={image.desc}/></button>
            );
        });
        return (
        <React.Fragment>
            <div className="lg-img-con" style = {this.state.imgStyle.lrgImgConStyle}>
                <LrgImg closeImage={this.lrgImgClose} src={this.state.lrgImg.src} description={this.state.lrgImg.description}/>
            </div>
            <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                {imageItemList}
            </div>
        </React.Fragment>
        );

    }
}

export default Images;
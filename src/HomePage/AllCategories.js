import React, { Component } from "react";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import firebase from "../Firebase/FireBase.js";
import "./AllCategories.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

 
class AllCategories extends Component{

  state = {
    currentIndex: 0,
    responsive: { 500: { items: (window.innerWidth/150) },0: { items: 3 } },
    categoryList: [],
    webSite:false,
  }
  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  componentDidMount() {
  
    let imgStyle;
    let web = false;
    let size
    if(window.innerWidth < 500) // set the image size by phone or not phone
      size = (window.innerWidth-40)/3
    else{
      size = (window.innerWidth/7);
      web =true;
    }
    imgStyle = {height: size ,width: size}
    let arrTemp = [];
    let i =0;
    let ref = firebase.database().ref('/CategoryList');
    ref.on('value', snapshot => {
      snapshot.forEach(child => {
            let str = "/Category/" + child.val().name;
            arrTemp.push( // One element in displaying all categories
            <Link to={str}><div className="gallery" key={i}>
            <img alt={child.val().name} className="AllCategories" style={imgStyle} src={child.val().img}/>
            </div>
            </Link>
            );
            i++;
        });

        this.setState({categoryList:arrTemp,webSite:web});
    });
  }
 
  render() {
    return (
      <div className="AllCategories">
        <h1>All Categories</h1>
        <AliceCarousel // the component that show the "Carousel" of the all Categories
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.categoryList}
          responsive={this.state.responsive}
          slideToIndex={this.state.currentIndex}
          onSlideChanged={this.onSlideChanged}
        /> 
        {this.state.webSite ? (  // if open in phone show the buttons , else dont show
        <div className="carouselButton">
        <button className="carouselButton" onClick={() => this.slidePrev()}>&lt;</button>
        <button className="carouselButton" onClick={() => this.slideNext()}>&gt;</button>
        </div>):null}
       </div>
    )
  }
}


export default AllCategories;
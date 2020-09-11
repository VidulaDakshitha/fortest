import React, { Component } from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';
import "./Style.scss";

import pastry from "../../assets/pastry.jpg";
import logo from '../../assets/img/brand/logo2.png'
//import mobiscroll from "mobiscroll";

import Menu from "./Menu";
import CardImg from "./Card";


class MenuDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() { 

        
        return ( 
        
        <div>
            {/* <div className="justify-content-center text-center">
              <button className="dropbtn"  style={{backgroundImage:`url(${logo})`,height:100,width:100}}></button>
              <p>The Kingsbury Hotel</p>
              </div>
        <div className="scrolling-wrapper">
        <div className="card" style={{backgroundImage:`url(${pastry})`}}><h5>Pastry</h5></div>
        <div className="card"><h5>Cakes</h5></div>
        <div className="card"><h5>Dessert</h5></div>
        <div className="card"><h5>Kottu</h5></div>
        <div className="card"><h5>Pizza</h5></div>
        <div className="card"><h5>Pudding</h5></div>
        <div className="card"><h5>Noodles</h5></div>
        <div className="card"><h5>Rice</h5></div>
        <div className="card"><h5>Card</h5></div>
      </div>  */}
<div><FeedbackIcon/></div>
<div className="justify-content-center text-center">
              <button className="dropbtn"  style={{backgroundImage:`url(${logo})`,height:100,width:100}}></button>
              <p>The Kingsbury Hotel</p>
              </div>
              <CardImg/>
<div className="d-flex justify-content-center">
<Menu/>
</div>

      
      </div>
      
      
      
      );
    }


    
}
 
export default MenuDisplay;
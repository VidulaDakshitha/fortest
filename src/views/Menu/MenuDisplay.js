import React, { Component } from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';
import "./Style.scss";

import pastry from "../../assets/pastry.jpg";
import logo1 from '../../assets/img/brand/logo2.png'
//import mobiscroll from "mobiscroll";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import CardImg from "./Card";


class MenuDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state={
          matches: window.matchMedia("(min-width: 768px)").matches
        }
    }

    componentDidMount(){
      const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 768px)").addListener(handler);
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



{/* {this.state.matches && (
      <div>
        <div className="divstyle col-lg-5">
<div><FeedbackIcon/></div>
<div className="justify-content-center text-center">
              <button className="dropbtn"  style={{backgroundImage:`url(${logo1})`,height:100,width:100}}></button>
              <p>The Kingsbury Hotel</p>
              </div>
              <CardImg/>

<div className="d-flex justify-content-center">
<Menu/>
</div>
</div>


<div >

<div className="justify-content-right" >
  <div className="" style={{paddingLeft:"900px",paddingTop:"120px"}}>
<img src={logo} width="62%" height="50%" alt=""></img>
</div>
</div>
</div>




</div>
)}
      {!this.state.matches && (

<div>hellooooooooooooooo</div>

      )}
 */}



</div>

      
 
      
      
      
      );
    }


    
}
 
export default MenuDisplay;
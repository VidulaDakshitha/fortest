import React, { Component } from 'react';
import {Button} from "reactstrap";
import img from "../../../assets/img1.jpeg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,CarouselItem } from 'react-bootstrap';
import {Row} from "reactstrap";
import MediaQuery from 'react-responsive';


import logo from "../../../assets/logo.png";

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={
            result: ""
        }
    }



    render(){
        return(
<div >


<MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>

<Row className="">

<div className="divstyle col-lg-4">
<div className="">



<div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<Row className="justify-content-around" style={{paddingTop:"15px"}}>

<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={img2} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Join As Merchant</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-success" href="/#/register" style={{color:"white"}} >Proceed to register</a>
  </div>
</div>


<div className="card" style={{width: "18rem"}}>
  <img classNameName="card-img-top" src={img3} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Scan QR Code</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-success" href="/#/scan" style={{color:"white"}}>Proceed to QR-scanner</a>
  </div>
</div>

</Row>

</div>
</div>




<div className="col-lg-8">

{/* <div className="d-flex justify-content right" >
<img src={logo} width="52%" height="40%" alt=""></img>

</div> */}
</div>


</Row>




</MediaQuery>



<MediaQuery  maxWidth={1224 } device={{ deviceWidth: 480 }}>
<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<Row className="justify-content-around" style={{paddingTop:"15px"}}>

<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={img2} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Join As Merchant</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-success" href="/#/register" style={{color:"white"}} >Proceed to register</a>
  </div>
</div>


<div className="card" style={{width: "18rem"}}>
  <img classNameName="card-img-top" src={img3} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Scan QR Code</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-success" href="/#/scan" style={{color:"white"}}>Proceed to QR-scanner</a>
  </div>
</div>

</Row>

</MediaQuery>


 </div>
        );
    }
}
export default MainPage;
import React, { Component } from 'react';
import { FormText,Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback,FormGroup,Label } from 'reactstrap';
import queryString from 'query-string'
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import * as BaseService from "../../../BaseService.js";
//import { GoogleComponent } from 'react-google-location' 
import logo from "../../../assets/logo.png";
import ImageUploader from 'react-images-upload';
import Swal from 'sweetalert2';
import { GoogleComponent } from 'react-google-location' 
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { element } from 'prop-types';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Home from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';

const API_KEY = "AIzaSyAJOsEJARWcAMa1YffDEdQJzNSnONN_yGE";


class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      matches: window.matchMedia("(min-width: 768px)").matches,
      businesstype:"",
      businesscatergory:"",
      businessname:"",
      registernumber:"",
      trandingname:"",
      principalplace:"",
      address:"",
      subdomain:"",
      email:"",
      phone:"",
      nic:"",
      web:"",
      fb:"",
      insta:"",
      latitude:"",
      longitiude:"",
      file:"",
      businessCatergoryData:[],
      businessTypeData:[],
      valid:false,
      invalid:false,
      pictures:"",
      place:"" 
    }
  }

 

  componentDidMount=()=>{

    const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 768px)").addListener(handler);


      this.getBusinessType();
    this.getBusinessCatergory();
    
    
    
  }


  onDrop=(pictureFiles, pictureDataURLs) =>{
    this.setState({
      pictures: pictureDataURLs
    });

  }



  getBusinessCatergory=()=>{

    const url="/api/digital_user/get_business_category_digitaluser/?";

    BaseService.GetDataWithoutParams(url)
                .then(async(res) => {
                  this.setState({
                    businessCatergoryData:res.data.data
                  })

                }).catch(()=>console.log());
  }


  getBusinessType=()=>{

    const url="/api/digital_user/get_business_type_digitaluser/?";

    BaseService.GetDataWithoutParams(url)
                .then(async(res) => {
                  this.setState({
                    businessTypeData:res.data.data
                  })

                }).catch(()=>console.log());

  }







  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

  }

  HandleDomainConfirm=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    },()=>{


      const data={
        sub_domain:this.state.subdomain
      }
  
      const url = "/api/digital_user/checksubdomain/";
  BaseService.PostService(url, data)
    .then((res) => {
  
  
     if(res.data.success===true){
       this.setState({
         valid:true,
         invalid:false
       })
     }else{

      this.setState({
        invalid:true,
        valid:false
      })
     }
  
  
    }).catch((e)=>console.log())



    })

  }


  ValidatePhoneNumber=()=>{
    

  }


  fetchPlaces=(mapProps, map)=> {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }

  onSubmitHandler=(e)=>{
    e.preventDefault();

    if(this.state.businesstype===""||this.state.businesscatergory===""||this.state.businessname===""||this.state.registernumber===""||this.state.trandingname===""||this.state.principalplace===""||this.state.address===""||this.state.subdomain===""||this.state.email===""||this.state.phone===""||this.state.nic===""){

      Swal.fire({
        icon:"error",
        title:"oops...",
        text:"Please fill the mandatory fields"
      })


    }else{




   


const regUsers={
  business_type:this.state.businesstype,
  business_category:this.state.businesscatergory,
  registered_business_name:this.state.businessname,
  register_number:this.state.registernumber,
  tranding_name:this.state.trandingname,
  principal_place:this.state.principalplace,
  correspondence_address:this.state.address,
  sub_domain:this.state.subdomain,
  email:this.state.email,
  phone_number:this.state.phone,
  nic:this.state.nic,
  website:this.state.web,
  fblink:"https://wwww.facebook.com/"+this.state.fb,
  instagramlink:"https://wwww.instagram.com/"+this.state.insta,
  latitude:this.state.latitude,
  longitude:this.state.longitiude,
  logo_url:this.state.pictures

}

const url = "/api/digital_user/digitaluser/";
BaseService.PostService(url, regUsers)
  .then((res) => {

    console.log(res);

    if (res.data.success === true) {
      Swal.fire(
        'Good Job!',
        'You are successfully registered please wait for approval',
        'success'
      )

      window.location.href="/#/main";
      
      
    } else {
      Swal.fire({
        icon:'error',
        title:'Oopss....',
        text:'cannot perform operation '+res.data.description
      })

    
    }
  })
  .catch((err) => {
    alertify.alert("Cannot perform the operation "+err);
  });

}
  }




 
  render() {
   // const [value, setValue] = useState(null);
    return (

      
      <div className=" flex-row align-items-center" >
       {this.state.matches && (
    <div>
      
       <div className="divstyle col-lg-5">
       <div className="d-flex justify-content-between">
       <IconButton className="shadowstyle">
  <Home fontSize="medium" onClick={()=>window.location.href="/#/main"} style={{color:"black",cursor:"pointer"}}/>
  </IconButton>
  </div>
        <Container style={{position:"relative"}} >
          <Row className="justify-content-center">
            <Col style={{paddingTop:"20px"}}>
              <Card className="mx-4" className="shadowstyle">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmitHandler}>
                    <h1>Business Register</h1>
                    <p className="text-muted">Create your account</p>
                    

                    <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-bag"></i>
                        </InputGroupText>
                      </InputGroupAddon>
        <Input type="select" name="businesstype" id="businesstype" onChange={this.onChangeHandler}>
         <option value="">Select Business Type</option>
         {this.state.businessTypeData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
      </InputGroup>


      <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-basket"></i>
                        </InputGroupText>
                      </InputGroupAddon>
        <Input type="select" name="businesscatergory" id="businesscatergory" onChange={this.onChangeHandler}>
         <option value="">Select Business Catergory</option>
         {this.state.businessCatergoryData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
      </InputGroup>



                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-basket-loaded"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Business Name" name="businessname" id="businessname" value={this.state.businessname} onChange={this.onChangeHandler} required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Number" placeholder="Business Registration Number" name="registernumber" onChange={this.onChangeHandler} value={this.state.registernumber} id="registernumber" required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-globe"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Business Trading Name" name="trandingname" id="trandingname" value={this.state.trandingname} onChange={this.onChangeHandler} required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Business Place" name="principalplace" id="principalplace" value={this.state.principalplace} onChange={this.onChangeHandler} required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Corresponding Address" name="address" id="address" value={this.state.address} onChange={this.onChangeHandler}  required/>
                    </InputGroup>



                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input valid={this.state.valid} invalid={this.state.invalid}  type="text" placeholder="Business Subdomain" name="subdomain" id="subdomain" value={this.state.subdomain} onChange={this.HandleDomainConfirm} required/>
                      <FormFeedback valid>Valid Subdomain</FormFeedback>
                      <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Enter Mobile Number (eg: +94771234567)" name="phone" id="phone" value={this.state.phone} onChange={this.onChangeHandler} required />
                    </InputGroup>


                   


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" name="email" id="email" value={this.state.email} onChange={this.onChangeHandler} required/>
                    </InputGroup>



                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Enter NIC" name="nic" id="nic" value={this.state.nic} onChange={this.onChangeHandler} required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-social-facebook"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Enter Website" name="web" id="web" value={this.state.web} onChange={this.onChangeHandler} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-social-facebook"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Enter Facebook page Name" name="fb" id="fb" value={this.state.fb} onChange={this.onChangeHandler}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-social-instagram"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Enter Instagram page Name" name="insta" id="insta" value={this.state.insta} onChange={this.onChangeHandler}/>
                    </InputGroup>

                  
                    <GoogleComponent
         
         apiKey="AIzaSyAjT5CUd_6F5bb5gWErov6Ns2evmXHuKKM"
         language={'en'}
         country={'country:lk'}
         coordinates={true}
        
         onChange={(e) => {this.setState({latitude:e.coordinates.lat,longitiude:e.coordinates.lng}) }} />





      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg",".png"]}
        maxFileSize={5242880}
        singleImage={true}
        withPreview={true}
      />

                    <div >
                    <Button color="success" block type="submit">Create Account</Button>
                    </div>
                  </Form>
                </CardBody>
               
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
        
      


        {/* <div >

<div className="justify-content-right" >
  <div className="" style={{paddingLeft:"900px",paddingTop:"120px"}}>
<img src={logo} width="62%" height="50%" alt=""></img>
</div>
</div>
</div> */}

<div >

<div className="justify-content-right" >
  <div className="text-right px-5 align-middle" >
<img src={logo} width="32%" height="20%" alt=""></img>
</div>
</div>
</div>

</div>

)}
      {!this.state.matches && (

<div>   <div className="d-flex justify-content-between">
  <IconButton className="shadowstyle">
  <Home fontSize="medium" onClick={()=>window.location.href="/#/main"} style={{color:"grey",cursor:"pointer"}}/>
  </IconButton>
  </div>
 
 <Container >
   <Row className="justify-content-center">
     <Col >
       <Card className="mx-4" className="shadowstyle" >
         <CardBody className="p-4">
           <Form onSubmit={this.onSubmitHandler}>
             <h1>Business Register</h1>
             <p className="text-muted">Create your account</p>
             

             <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-bag"></i>
                        </InputGroupText>
                      </InputGroupAddon>
        <Input type="select" name="businesstype" id="businesstype" onChange={this.onChangeHandler}>
         <option value="">Select Business Type</option>
         {this.state.businessTypeData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
      </InputGroup>


      <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-basket"></i>
                        </InputGroupText>
                      </InputGroupAddon>
        <Input type="select" name="businesscatergory" id="businesscatergory" onChange={this.onChangeHandler}>
         <option value="">Select Business Catergory</option>
         {this.state.businessCatergoryData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
      </InputGroup>



             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-basket-loaded"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="text" placeholder="Business Name" name="businessname" id="businessname" value={this.state.businessname} onChange={this.onChangeHandler} required/>
             </InputGroup>


             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-user"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Number" placeholder="Business Registration Number" name="registernumber" onChange={this.onChangeHandler} value={this.state.registernumber} id="registernumber" required/>
             </InputGroup>


             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-globe"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="text" placeholder="Business Trading Name" name="trandingname" id="trandingname" value={this.state.trandingname} onChange={this.onChangeHandler} required/>
             </InputGroup>


             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-pin"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Text" placeholder="Business Place" name="principalplace" id="principalplace" value={this.state.principalplace} onChange={this.onChangeHandler}required />
             </InputGroup>


             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-location-pin"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Text" placeholder="Corresponding Address" name="address" id="address" value={this.state.address} onChange={this.onChangeHandler} required />
             </InputGroup>



             <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input valid={this.state.valid} invalid={this.state.invalid}  type="text" placeholder="Business Subdomain" name="subdomain" id="subdomain" value={this.state.subdomain} onChange={this.HandleDomainConfirm} required/>
                      <FormFeedback valid>Valid Subdomain</FormFeedback>
                      <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    </InputGroup>


             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-phone"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Text" placeholder="Enter Mobile Number (eg: +94771234567)" name="phone" id="phone" value={this.state.phone} onChange={this.onChangeHandler} required/>
             </InputGroup>


            


             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>@</InputGroupText>
               </InputGroupAddon>
               <Input type="text" placeholder="Email" autoComplete="email" name="email" id="email" value={this.state.email} onChange={this.onChangeHandler} required/>
             </InputGroup>



             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-user"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Text" placeholder="Enter NIC" name="nic" id="nic" value={this.state.nic} onChange={this.onChangeHandler} required/>
             </InputGroup>


             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-social-facebook"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Text" placeholder="Enter Website" name="web" id="web" value={this.state.web} onChange={this.onChangeHandler} />
             </InputGroup>

             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-social-facebook"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Text" placeholder="Enter Facebook page Name" name="fb" id="fb" value={this.state.fb} onChange={this.onChangeHandler}/>
             </InputGroup>

             <InputGroup className="mb-3">
               <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                   <i className="icon-social-instagram"></i>
                 </InputGroupText>
               </InputGroupAddon>
               <Input type="Text" placeholder="Enter Instagram page Name" name="insta" id="insta" value={this.state.insta} onChange={this.onChangeHandler}/>
             </InputGroup>

             <GoogleComponent
         
         apiKey="AIzaSyAjT5CUd_6F5bb5gWErov6Ns2evmXHuKKM"
         language={'en'}
         country={'country:lk'}
         coordinates={true}
        
         onChange={(e) => {this.setState({latitude:e.coordinates.lat,longitiude:e.coordinates.lng}) }} />
             
          

             <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".png"]}
        maxFileSize={5242880}
        singleImage="true"
        withPreview="true"
      />


             <div >
             <Button color="success" block type="submit">Create Account</Button>
             </div>
           </Form>



         </CardBody>
      
       </Card>
     </Col>
   </Row>
 </Container>


 </div>
      )}
      </div>
    );
  }
}



// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBFXGs4NsR5hWVzF5rjhh10AM7KUDofRMo"
// })(Register)

export default Register;
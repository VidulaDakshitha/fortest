import React, { Component } from 'react';
import { FormText,Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback,FormGroup,Label } from 'reactstrap';
import queryString from 'query-string'
import axios from "axios";
import {Link} from "react-router-dom";
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
      matches: window.matchMedia("(min-width: 1024px)").matches,
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
      place:"" ,
      validphone:false,
      invalidphone:false,
      phoneMessage:"",
      validemail:false,
      invalidemail:false,
      emailMessage:"",
      isSubmit:false,
      subdomainMessage:"",
    }
  }

 

  componentDidMount=()=>{

    const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 1024px)").addListener(handler);


      this.getBusinessType();
    this.getBusinessCatergory();
    
    
    
  }


  onDrop=(pictureFiles, pictureDataURLs) =>{
    this.setState({
      pictures: pictureDataURLs[0]
    });

    //console.log(pictureDataURLs[0]);

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
        sub_domain:this.state.subdomain.replace(/\s/g, '')
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
        valid:false,
        subdomainMessage:"Oh no! that name is already taken"
      })
     }
  
  
    }).catch((e)=>console.log())



    })

  }




    HandleEmailConfirm=(e)=>{


    
    
    this.setState({
      [e.target.name]:e.target.value
    },()=>{


            const re = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    
    if(!re.test(this.state.email))
    {

          this.setState({
            invalidemail:true,
            validemail:false,
            emailMessage:"Invalid Email format"
          })
    }else{

      const data={
        email:this.state.email
      }
  
      const url = "/api/digital_user/checksubdomain/";
  BaseService.PostService(url, data)
    .then((res) => {
  
  
     if(res.data.success===true){
       this.setState({
         validemail:true,
         invalidemail:false
       })
     }else{

      this.setState({
        invalidemail:true,
        validemail:false,
        emailMessage:"This email is already taken"
      })
     }
  
  
    }).catch((e)=>console.log())



    
      
    }




  })
    }


  ValidatePhoneNumber=(e)=>{

    this.setState({
     phone:e.target.value
    },()=>{


console.log(this.state.phone.length);
      if (this.state.phone !== "") {

         

        var pattern = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
      
        if (!pattern.test(this.state.phone)) {

          this.setState({
            invalidphone:true,
            validphone:false,
            phoneMessage:"Invalid phone number format"
          })
      
         
      
        }else if(this.state.phone.length !== 12){
          this.setState({
            invalidphone:true,
            validphone:false,
            phoneMessage:"Invalid phone number format"
          })
      
      
        }else{

             const data={
        phone_number:this.state.phone
      }
  
      const url = "/api/digital_user/checksubdomain/";
  BaseService.PostService(url, data)
    .then((res) => {
  
  
     if(res.data.success===true){
       this.setState({
         validphone:true,
         invalidphone:false
       })
     }else{

      this.setState({
        invalidphone:true,
        validphone:false,
        phoneMessage:"This phone number is already in use"
      })
     }
  
  
    }).catch((e)=>console.log())
        }
      
      }





     // phone_number: ['',[Validators.required,Validators.pattern('^(?:\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\\d)\\d{6}$')]];

      


    })



  }


  fetchPlaces=(mapProps, map)=> {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }

  onSubmitHandler=(e)=>{
    e.preventDefault();

    if(this.state.businesstype===""||this.state.businesscatergory===""||this.state.businessname===""||this.state.registernumber===""||this.state.trandingname===""||this.state.principalplace===""||this.state.address===""||this.state.subdomain===""||this.state.email===""||this.state.phone==="" ||this.state.pictures==="" ||this.state.latitude==="" ||this.state.longitiude==="" ){

this.setState({
  isSubmit:true
})

if(this.state.phone==="" && this.state.email!=="" && this.state.subdomain!=="")
{
  this.setState({
  invalidphone:true,
  phoneMessage:"Cannot keep this field blank"
})
}else if(this.state.email==="" && this.state.phone!=="" && this.state.subdomain!=="")
{
   this.setState({
        invalidemail:true,
        validemail:false,
        emailMessage:"Cannot keep this field blank"
      })

}else if(this.state.subdomain==="" && this.state.phone!=="" && this.state.email!=="")
{
      this.setState({
        invalid:true,
        valid:false,
        subdomainMessage:"Cannot keep this field blank"
      })

}else if(this.state.subdomain==="" && this.state.phone==="" && this.state.email!=="")
{

      this.setState({
        invalid:true,
        valid:false,
        subdomainMessage:"Cannot keep this field blank",
         invalidphone:true,
        phoneMessage:"Cannot keep this field blank",
       

      })

}else if(this.state.email==="" && this.state.phone==="" && this.state.subdomain!=="")
{

      this.setState({
       
         invalidphone:true,
        phoneMessage:"Cannot keep this field blank",
        invalidemail:true,
        validemail:false,
        emailMessage:"Cannot keep this field blank"

      })

}else if(this.state.subdomain==="" && this.state.email==="" && this.state.phone!=="")
{

      this.setState({
        invalid:true,
        valid:false,
        subdomainMessage:"Cannot keep this field blank",
        invalidemail:true,
        validemail:false,
        emailMessage:"Cannot keep this field blank"

      })

}else if(this.state.subdomain==="" && this.state.phone==="" && this.state.email==="")
{

      this.setState({
        invalid:true,
        valid:false,
        subdomainMessage:"Cannot keep this field blank",
         invalidphone:true,
        phoneMessage:"Cannot keep this field blank",
        invalidemail:true,
        validemail:false,
        emailMessage:"Cannot keep this field blank"

      })

}



      Swal.fire({
        allowOutsideClick: false,
        icon:"error",
        title:"oops...",
        text:"Please fill the mandatory fields"
      })


    }else{

if(this.state.invalidphone || this.state.invalidemail||this.state.invalid)
{

      Swal.fire({
        allowOutsideClick: false,
        icon:"error",
        title:"oops...",
        text:"Please make sure subdomain, email and phone number fields are valid"
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
  sub_domain:this.state.subdomain.replace(/\s/g, ''),
  email:this.state.email,
  phone_number:this.state.phone,
  website:this.state.web,
  fblink:this.state.fb,
  instagramlink:this.state.insta,
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
        'You are successfully registered. Check your email to proceed',
        'success'
      )

      window.location.href="/#/main";
      
      
    } else {
      Swal.fire({
        allowOutsideClick: false,
        icon:'error',
        title:'Oopss....',
        text:'cannot perform operation '+res.data.description
      })

    
    }
  })
  .catch((err) => {
    alertify.alert("Cannot perform the operation "+err);
  });


console.log(regUsers)
    }
}
  }




 
  render() {
   // const [value, setValue] = useState(null);
    return (

      
      <div className=" flex-row align-items-center" >
       {this.state.matches && (
    <div >
      
       <div className=" divstyle col-lg-5" id="style-15">
       <div className="d-flex justify-content-between pt-2 pl-2">
       <Link style={{ textDecoration: 'none' }} to="/main">
       <IconButton className="shadowstyle3">
  <Home fontSize="medium" style={{cursor:"pointer"}}/>
  </IconButton></Link>
  </div>
        <Container style={{position:"relative"}} >
          <Row className="justify-content-center">
            <Col style={{paddingTop:"20px"}}>
             
                  <Form onSubmit={this.onSubmitHandler}>
                    <h1>Business Registration</h1>
                    <p className="text-muted">Create your account</p>
                    

                    <FormGroup className="mb-3">
                     <Label className="Label" for="exampleEmail">Select Business Type <span style={{color:"red"}}>*</span></Label>
                    {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-bag"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
        <Input invalid={this.state.businesstype==="" && this.state.isSubmit?true:false} type="select" name="businesstype" id="businesstype" onChange={this.onChangeHandler}>
         <option value=""></option>
         {this.state.businessTypeData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
        <FormFeedback valid>Valid Business Type</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
      </FormGroup>


      <FormGroup className="mb-3">
       <Label className="Label" >Select Business Catergory <span style={{color:"red"}}>*</span></Label>
                    {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-basket"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
        <Input  invalid={this.state.businesscatergory==="" && this.state.isSubmit?true:false} type="select" name="businesscatergory" id="businesscatergory" onChange={this.onChangeHandler}>
         <option value=""></option>
         {this.state.businessCatergoryData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
         <FormFeedback valid>Valid Business Catergory</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
      </FormGroup>



                    <FormGroup className="mb-3">
                      <Label className="Label">Business Name <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-basket-loaded"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off"  invalid={this.state.businessname==="" && this.state.isSubmit?true:false} type="text"  name="businessname" id="businessname" value={this.state.businessname} onChange={this.onChangeHandler} />
                     <FormFeedback valid>Valid Business Name</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>


                    <FormGroup className="mb-3">
                    <Label className="Label">Business Registration Number <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input invalid={this.state.registernumber==="" && this.state.isSubmit?true:false} type="Text"  name="registernumber" onChange={this.onChangeHandler} value={this.state.registernumber} id="registernumber" />
                     <FormFeedback valid>Valid Registration Number</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>


                    <FormGroup className="mb-3">
                    <Label className="Label">Business Trading Name <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-globe"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off" invalid={this.state.trandingname==="" && this.state.isSubmit?true:false} type="text"  name="trandingname" id="trandingname" value={this.state.trandingname} onChange={this.onChangeHandler} />
                    <FormFeedback valid>Valid Business Trading Name</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                   
                    </FormGroup>


                    <FormGroup className="mb-3">
                                        <Label className="Label">Business Place Address <span style={{color:"red"}}>*</span></Label>

                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input  autocomplete="off" invalid={this.state.principalplace==="" && this.state.isSubmit?true:false} type="Text"  name="principalplace" id="principalplace" value={this.state.principalplace} onChange={this.onChangeHandler} />
                     <FormFeedback valid>Valid principal place</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>


                    <FormGroup className="mb-3">
                      <Label className="Label">Corresponding Address <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off" invalid={this.state.address==="" && this.state.isSubmit?true:false} type="Text"  name="address" id="address" value={this.state.address} onChange={this.onChangeHandler}  />
                    <FormFeedback valid>Valid Corresponding Address</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>



                    <FormGroup className="mb-3">
                     <Label className="Label">Business Subdomain <span style={{color:"red"}}>* </span> <span className=" pl-4" style={{fontWeight:"600",display:this.state.subdomain===""?'none':''}}> https://{this.state.subdomain.replace(/\s/g, '')}.alacartes.lk</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off" valid={this.state.valid} invalid={this.state.invalid}  type="text" placeholder="(eg :- coffeebean)" name="subdomain" id="subdomain" value={this.state.subdomain} onChange={this.HandleDomainConfirm} />
                      <FormFeedback valid>Valid Subdomain</FormFeedback>
                      <FormFeedback>Oh no! that name is already taken</FormFeedback>
                    </FormGroup>



                    <FormGroup className="mb-3">
                    <Label className="Label">Enter Mobile Number <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input  valid={this.state.validphone} autocomplete="off"  invalid={this.state.invalidphone} type="Text" placeholder="(eg: +94771234567)" name="phone" id="phone" value={this.state.phone} onChange={this.ValidatePhoneNumber}  />
                      <FormFeedback valid>Valid phone number</FormFeedback>
                      <FormFeedback>{this.state.phoneMessage}</FormFeedback>
                    </FormGroup>


                   


                    <FormGroup className="mb-3">
                     <Label className="Label">Enter Email <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon> */}
                      <Input valid={this.state.validemail} autocomplete="off"  invalid={this.state.invalidemail} type="text"  autoComplete="email" name="email" id="email" value={this.state.email} onChange={this.HandleEmailConfirm} />
                        <FormFeedback valid>Valid Email address</FormFeedback>
                      <FormFeedback>{this.state.emailMessage}</FormFeedback>
                    </FormGroup>



           


                    <FormGroup className="mb-3">
                     <Label className="Label">Enter Website URL </Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-globe"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input type="Text"  name="web" id="web" value={this.state.web} onChange={this.onChangeHandler} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                     <Label className="Label">Enter Facebook page URL </Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-social-facebook"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input type="Text"  name="fb" id="fb" value={this.state.fb} onChange={this.onChangeHandler}/>
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Label className="Label">Enter Instagram page URL </Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-social-instagram"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input type="Text"  name="insta" id="insta" value={this.state.insta} onChange={this.onChangeHandler}/>
                    </FormGroup>

                  <Label className="Label">Search For Location <span style={{color:"red"}}>*</span></Label>
                    <GoogleComponent
         
         apiKey="AIzaSyAjT5CUd_6F5bb5gWErov6Ns2evmXHuKKM"
         language={'en'}
         country={'country:lk'}
         coordinates={true}
  
         onChange={(e) => {this.setState({latitude:e.coordinates.lat,longitiude:e.coordinates.lng}) }} />
<span style={{display:this.state.latitude==="" &&this.state.isSubmit?'block':'none',color:"red",fontSize:'80%'}}>Cannot keep this field blank</span>




      <ImageUploader
        withIcon={true}
        buttonText="Choose image for logo *"
        onChange={this.onDrop}
        imgExtension={[".jpg",".png"]}
        maxFileSize={5242880}
        singleImage={true}
        withPreview={true}
      />
      <span className="pb-2" style={{display:this.state.pictures==="" &&this.state.isSubmit?'block':'none',color:"red",fontSize:'80%'}}>Cannot keep image field blank</span>


                    <div className="pb-4">
                    <Button style={{height:"50px",fontWeight:"700"}}  color="success" block type="submit">Create Account</Button>
                    </div>
                  </Form>
              
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

{/* <div >

<div className="justify-content-right" >
  <div className="text-right px-5 align-middle" >
<img src={logo} width="52%" height="40%" alt=""></img>
</div>
</div>
</div> */}

<div >
<div >
<div className="d-flex align-items-end flex-column px-51" >

<img src={logo} width="52%" height="40%" alt="" ></img>

</div>
</div>
</div>

</div>

)}
      {!this.state.matches && (

<div>   <div className="d-flex justify-content-between pt-2 pl-2">
  <Link style={{ textDecoration: 'none' }} to="/main"> <IconButton className="shadowstyle3 ">
 <Home fontSize="medium" style={{cursor:"pointer"}}/>
  </IconButton></Link>
  </div>
 
  <Container style={{position:"relative"}} >
          <Row className="justify-content-center">
            <Col style={{paddingTop:"20px"}}>
              <Card className="mx-4" className="shadowstyle">
                <CardBody className="p-4">
                                        <Form onSubmit={this.onSubmitHandler}>
                    <h1>Business Registration</h1>
                    <p className="text-muted">Create your account</p>
                    

                    <FormGroup className="mb-3">
                     <Label className="Label" for="exampleEmail">Select Business Type <span style={{color:"red"}}>*</span></Label>
                    {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-bag"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
        <Input invalid={this.state.businesstype==="" && this.state.isSubmit?true:false} type="select" name="businesstype" id="businesstype" onChange={this.onChangeHandler}>
         <option value=""></option>
         {this.state.businessTypeData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
        <FormFeedback valid>Valid Business Type</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
      </FormGroup>


      <FormGroup className="mb-3">
       <Label className="Label" >Select Business Catergory <span style={{color:"red"}}>*</span></Label>
                    {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-basket"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
        <Input  invalid={this.state.businesscatergory==="" && this.state.isSubmit?true:false} type="select" name="businesscatergory" id="businesscatergory" onChange={this.onChangeHandler}>
         <option value=""></option>
         {this.state.businessCatergoryData.map((val)=>(
          <option value={val.id}>{val.type}</option>
         ))}
        </Input>
         <FormFeedback valid>Valid Business Catergory</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
      </FormGroup>



                    <FormGroup className="mb-3">
                      <Label className="Label">Business Name <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-basket-loaded"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off"  invalid={this.state.businessname==="" && this.state.isSubmit?true:false} type="text"  name="businessname" id="businessname" value={this.state.businessname} onChange={this.onChangeHandler} />
                     <FormFeedback valid>Valid Business Name</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>


                    <FormGroup className="mb-3">
                    <Label className="Label">Business Registration Number <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input invalid={this.state.registernumber==="" && this.state.isSubmit?true:false} type="Text"  name="registernumber" onChange={this.onChangeHandler} value={this.state.registernumber} id="registernumber" />
                     <FormFeedback valid>Valid Registration Number</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>


                    <FormGroup className="mb-3">
                    <Label className="Label">Business Trading Name <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-globe"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off" invalid={this.state.trandingname==="" && this.state.isSubmit?true:false} type="text"  name="trandingname" id="trandingname" value={this.state.trandingname} onChange={this.onChangeHandler} />
                    <FormFeedback valid>Valid Business Trading Name</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                   
                    </FormGroup>


                    <FormGroup className="mb-3">
                                        <Label className="Label">Business Place Address <span style={{color:"red"}}>*</span></Label>

                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input  autocomplete="off" invalid={this.state.principalplace==="" && this.state.isSubmit?true:false} type="Text"  name="principalplace" id="principalplace" value={this.state.principalplace} onChange={this.onChangeHandler} />
                     <FormFeedback valid>Valid principal place</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>


                    <FormGroup className="mb-3">
                      <Label className="Label">Corresponding Address <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off" invalid={this.state.address==="" && this.state.isSubmit?true:false} type="Text"  name="address" id="address" value={this.state.address} onChange={this.onChangeHandler}  />
                    <FormFeedback valid>Valid Corresponding Address</FormFeedback>
                      <FormFeedback>Cannot keep this field blank</FormFeedback>
                    </FormGroup>



                    <FormGroup className="mb-3">
                     <Label className="Label">Business Subdomain <span style={{color:"red"}}>* </span> <span className=" pl-4" style={{fontWeight:"600",display:this.state.subdomain===""?'none':''}}> https://{this.state.subdomain.replace(/\s/g, '')}.alacartes.lk</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input autocomplete="off" valid={this.state.valid} invalid={this.state.invalid}  type="text" placeholder="(eg :- coffeebean)" name="subdomain" id="subdomain" value={this.state.subdomain} onChange={this.HandleDomainConfirm} />
                      <FormFeedback valid>Valid Subdomain</FormFeedback>
                      <FormFeedback>Oh no! that name is already taken</FormFeedback>
                    </FormGroup>



                    <FormGroup className="mb-3">
                    <Label className="Label">Enter Mobile Number <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input  valid={this.state.validphone} autocomplete="off"  invalid={this.state.invalidphone} type="Text" placeholder="(eg: +94771234567)" name="phone" id="phone" value={this.state.phone} onChange={this.ValidatePhoneNumber}  />
                      <FormFeedback valid>Valid phone number</FormFeedback>
                      <FormFeedback>{this.state.phoneMessage}</FormFeedback>
                    </FormGroup>


                   


                    <FormGroup className="mb-3">
                     <Label className="Label">Enter Email <span style={{color:"red"}}>*</span></Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon> */}
                      <Input valid={this.state.validemail} autocomplete="off"  invalid={this.state.invalidemail} type="text"  autoComplete="email" name="email" id="email" value={this.state.email} onChange={this.HandleEmailConfirm} />
                        <FormFeedback valid>Valid Email address</FormFeedback>
                      <FormFeedback>{this.state.emailMessage}</FormFeedback>
                    </FormGroup>



           


                    <FormGroup className="mb-3">
                     <Label className="Label">Enter Website URL </Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-globe"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input type="Text"  name="web" id="web" value={this.state.web} onChange={this.onChangeHandler} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                     <Label className="Label">Enter Facebook page URL </Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-social-facebook"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input type="Text"  name="fb" id="fb" value={this.state.fb} onChange={this.onChangeHandler}/>
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Label className="Label">Enter Instagram page URL </Label>
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-social-instagram"></i>
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input type="Text"  name="insta" id="insta" value={this.state.insta} onChange={this.onChangeHandler}/>
                    </FormGroup>

                  <Label className="Label">Search For Location <span style={{color:"red"}}>*</span></Label>
                    <GoogleComponent
         
         apiKey="AIzaSyAjT5CUd_6F5bb5gWErov6Ns2evmXHuKKM"
         language={'en'}
         country={'country:lk'}
         coordinates={true}
  
         onChange={(e) => {this.setState({latitude:e.coordinates.lat,longitiude:e.coordinates.lng}) }} />
<span style={{display:this.state.latitude==="" &&this.state.isSubmit?'block':'none',color:"red",fontSize:'80%'}}>Cannot keep this field blank</span>




      <ImageUploader
        withIcon={true}
        buttonText="Choose image for logo *"
        onChange={this.onDrop}
        imgExtension={[".jpg",".png"]}
        maxFileSize={5242880}
        singleImage={true}
        withPreview={true}
      />
      <span className="pb-2" style={{display:this.state.pictures==="" &&this.state.isSubmit?'block':'none',color:"red",fontSize:'80%'}}>Cannot keep image field blank</span>


                    <div className="pb-4">
                    <Button style={{height:"50px",fontWeight:"700"}}  color="success" block type="submit">Create Account</Button>
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
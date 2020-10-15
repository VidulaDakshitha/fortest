import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import queryString from 'query-string'
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import * as BaseService from "../../../BaseService.js";
import Swal from 'sweetalert2';
import logo from "../../../assets/logo.png";
import Home from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';

class RegisterConfirm extends Component {

    constructor(props){
      super(props);
      this.state={
        matches: window.matchMedia("(min-width: 768px)").matches,
        token:"",
        userId:"",
        password:"",
        confirmPass:"",
        valid:false,
        invalid:false,
        valid1:false,
        invalid1:false,
  
      }
    }
  
  
    componentDidMount=()=>{
      
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addListener(handler);

        const values = queryString.parse(this.props.location.search)
  
        if(values.token===undefined||values.user_id===undefined)
        {
          alertify.alert("Unable to register. Please contact system administrator or check your email inbox for registration link");
          window.location.href="/#/main";
        }else{
  
          this.setState({
            token:values.token,
            userId:values.user_id
          })
        }
        
      
      
    }
  
    onChangeHandler=(e)=>{
  
      this.setState({
        [e.target.name]:e.target.value
      })
  
      if(e.target.value.length<7)
      {
        console.log("visited")
        this.setState(
          {
            confirmPass:"",
            valid1: false,
            invalid1: true,
            invalid: true

          }
        );
  
      }else{
        console.log("visited 2")
        this.setState(
          {
            confirmPass:"",
            invalid1: false,
            valid1: true,
            invalid: true
          }
        );
  
      }
     
    }
  
    HandlepasswordConfirm=(e)=>{

      this.setState({
        confirmPass:e.target.value
      })
  
      if (e.target.value === this.state.password) {
        this.setState(
          {
            valid: true,
            invalid: false,
          }
        );
      } else {
        this.setState(
          {
            invalid: true,
            valid: false,
          }
        );
      }
      // console.log(this.state.malidi);
    
    }
  
    onSubmitHandler=(e)=>{
  e.preventDefault();


  
  const regUsers={
    user_id:parseInt(this.state.userId),
    new_password:this.state.password,
    token:this.state.token,
    confirm_password:this.state.password
  }
  
  const url = "/api/digital_user/rest_new_password/";
  BaseService.PostData(url, regUsers)
    .then((res) => {
      if (res.data.success === true) {
        Swal.fire(
          'Good job!',
          'Your password is successfully set. Wait for approval',
          'success'
        )

        window.location.href="/#/main"
       
      } else {
        alertify.alert("Cannot perform the operation");
      }
    })
    .catch((err) => {
      alertify.alert("Cannot perform the operation "+err);
    });
  
  
    }
    
    render() {
      return (
  
        
        <div >
             {this.state.matches && (
       <div>
       <div className="divstyle col-lg-5">
       <div className="d-flex justify-content-between">
       <IconButton className="shadowstyle">
  <Home fontSize="medium" onClick={()=>window.location.href="/#/main"} style={{color:"black",cursor:"pointer"}}/>
  </IconButton>
  </div>
      

  <Container style={{position:"relative"}}>
            <Row className="justify-content-center">
              <Col style={{paddingTop:"20px"}}>
                <Card className="mx-4" className="shadowstyle">
                  <CardBody className="p-4">
                    <Form onSubmit={this.onSubmitHandler}>
                      <h1>Register Confirm</h1>
                      <p className="text-muted">Create your account</p>
                      
                  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="password" value={this.state.password} autoComplete="new-password" valid={this.state.valid1} invalid={this.state.invalid1} onChange={this.onChangeHandler}/>
                        <FormFeedback>Password length should be more than 7</FormFeedback>
                      </InputGroup>
                      
                      
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Repeat password" name="confirmPass" autoComplete="new-password" value={this.state.confirmPass} valid={this.state.valid} invalid={this.state.invalid} onChange={this.HandlepasswordConfirm}/>
                        <FormFeedback>Passwords doesn't match</FormFeedback>
                      </InputGroup>
                      <Button color="success" block>Create Account</Button>
                    </Form>
                  </CardBody>
            
                </Card>
              </Col>
            </Row>
          </Container>







        </div>
        
      



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
<div>
<div className="d-flex justify-content-between">
  <IconButton className="shadowstyle">
  <Home fontSize="medium" onClick={()=>window.location.href="/#/main"} style={{color:"grey",cursor:"pointer"}}/>
  </IconButton>
  </div>
 
<Container>
<Row className="justify-content-center">
  <Col md="9" lg="7" xl="6">
    <Card className="mx-4">
      <CardBody className="p-4">
        <Form onSubmit={this.onSubmitHandler}>
          <h1>Register Confirm</h1>
          <p className="text-muted">Create your account</p>
          
      
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-lock"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="password" placeholder="Password" name="password" value={this.state.password} autoComplete="new-password" valid={this.state.valid1} invalid={this.state.invalid1} onChange={this.onChangeHandler}/>
            <FormFeedback>Password length should be more than 7</FormFeedback>
          </InputGroup>
          
          
          <InputGroup className="mb-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-lock"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="password" placeholder="Repeat password" name="confirmPass" autoComplete="new-password" valid={this.state.valid} invalid={this.state.invalid} onChange={this.HandlepasswordConfirm}/>
            <FormFeedback>Passwords doesn't match</FormFeedback>
          </InputGroup>
          <Button color="success" block>Create Account</Button>
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
  
  export default RegisterConfirm;
  
import React, { Component } from 'react';

import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";
import "./loaderstyle.css";

const override = css`
  display: absolute;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends Component{
    constructor(props){
        super(props);
        this.state={
         
          loading:true,
        }
      }


      componentDidMount(){
 

        setTimeout(()=>{
          this.setState({
            loading:false
          },()=>{window.location.href="/#/main";})
        },2000)
        
        }

        render() {
   
          return (
            
             
            <div className="sweet-loading loaderalign" >
            <CircleLoader
              css={override}
              size={100}
              color={"#123abc"}
              loading={this.state.loading}
            />
            </div>
            
          );
        }
      



}

export default Loader;
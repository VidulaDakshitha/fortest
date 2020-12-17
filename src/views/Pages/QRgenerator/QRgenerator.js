import React, { Component } from 'react';
import QRCode from "qrcode.react";
import Swal from 'sweetalert2';
import queryString from "query-string";
import logo from "../../../assets/logo.png";

class QRgenerator extends Component{
    constructor(props){
        super(props);
        this.state={
            result: "",
            subdomain:"",
            empty:[],
            matches: window.matchMedia("(min-width: 1008px)").matches
        }
    }


    componentDidMount() {
      const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 1008px)").addListener(handler);
console.log(window.location.href);


              let value=window.location.href.split("?");
               const values=queryString.parse(value[1]);
              console.log("values",value[1])



              if(value[1]===undefined)
              {
                 Swal.fire({
              icon:'error',
              title:'Oopss....',
              text:"please provide valid URL"
            })
             window.location.href="#/main"
              }else  if(value[1].includes("sub_domain"))
          {

            this.setState({
              subdomain:values.sub_domain
            })

  
           
          }else{
            Swal.fire({
              icon:'error',
              title:'Oopss....',
              text:"please provide valid URL"
            })
             window.location.href="#/main"

          }


    }

// handleScan=(data)=>{

//     if (data) {
//         this.setState({
//           result: data
//         },async()=>{


//           if(this.state.result!=="")
//           {
//             let value3=this.state.result.split("?");
//             const values=queryString.parse(value3[1]);

      
//           if(value3[1].includes("sub_domain"))
//           {

//            await localStorage.setItem("sub_domain",values.sub_domain);
//             window.location.href="#/menu"
           
//           }else{
//             Swal.fire({
//               icon:'error',
//               title:'Oopss....',
//               text:"please provide valid QR code for digital menu"
//             })

//           }
            
//           }
//         })
//       }
// }

handleError = err => {
    Swal.fire({
        icon:'error',
        title:'Oopss....',
        text:err
      })
  }


    render(){
        return(
<div>
{this.state.matches && (
  <div>
    <div className="divstyle col-lg-5">
        <div className="d-flex justify-content-center mt-5">
                    <div className="files-list">
                    <QRCode value={'https://alacartes.lk/#/menu?sub_domain='+this.state.subdomain} style={{width:"250px",height:"250px"}} />
                    </div>
        </div>
        <h1 className="d-flex justify-content-center mt-5"><b>Scan QR Code</b></h1>
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

<div className="d-flex justify-content-center mt-5">

<div className="files-list">

<QRCode value={'https://alacartes.lk/#/menu?sub_domain='+this.state.subdomain} style={{width:"250px",height:"250px"}} />
</div>

</div>

<h1 className="d-flex justify-content-center mt-5"><b>Scan QR Code</b></h1>
</div>
 )}

</div>

        );
    }
}
export default QRgenerator;
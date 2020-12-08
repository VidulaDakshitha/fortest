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
            empty:[],
            matches: window.matchMedia("(min-width: 1008px)").matches
        }
    }


    componentDidMount() {
      const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 1008px)").addListener(handler);
console.log(window.location.href);

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
    <QRCode value={window.location.href} style={{width:"250px",height:"250px"}} />
    </div>
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


<div className="d-flex justify-content-center mt-5">


<QRCode value={window.location.href} style={{width:"250px",height:"250px"}} />
</div>
 )}

</div>

        );
    }
}
export default QRgenerator;
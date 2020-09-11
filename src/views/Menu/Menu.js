import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MultiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as BaseService from "../../BaseService.js";
import Swal from "sweetalert2";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import {
  
  ModalBody,
  ModalHeader,
  Modal,
  ModalFooter,
  Button,
  Form, FormGroup, Label, Input, FormText,CardFooter
} from "reactstrap";

const tileData=[
  { img:"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",
   title:"Chicken pastry",
   price:"150"}
]

const useStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  cardstyle:{
    maxWidth: 345,
    alignItems: 'center'
  }
});


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

class Menu extends React.Component {
  constructor(props){
             super(props);
             this.state={
              large: false,
              name:"",
              price:"",
              time:"",
              description:"",
              btnclicked:false,
              rating:"",
              email:"",
              feedback:"",
              itemID:"",
              Items:1,
              cartItem:[],
             }
            
            }

changeHandler=(e)=>{

  this.setState({
    [e.target.name]:e.target.value
  })

}

            toggleLarge1=()=> {
              this.setState({
                large: !this.state.large,
              });
            }

            dataAssign=(name,price,time,desc,item)=>{
console.log("item"+item)
this.setState({
  name:name,
  price:price,
  time:time,
  description:desc,
  itemID:item
})
            }


            addrating=(x)=>{

               this.setState({
            rating:x
        });

            }

            onSubmitHandler=(e)=>{

              e.preventDefault();

              const url="/api/digital_user/getfeedback/";
              const data={

                feedback:this.state.feedback,
                item_id:this.state.itemID,
                rate:this.state.rating,
                email:this.state.email,
              }

              BaseService.PostService(url,data)
              .then(async(res) => {
                this.setState({large:false,email:"",feedback:"",rating:""})

                Swal.fire(
                  'Good job!',
                  'Thank you for feedback',
                  'success'
                );

                console.log(res)

              }).catch((err)=>{

              })

            }


            AddItem=()=>{

              this.setState({
                Items:this.state.Items+1

              })



            }


            RemoveItem=()=>{

              if(this.state.Items!==1){

                this.setState({
                  Items:this.state.Items-1
  
                })

              }

           
            }


            AddItemsToCart=(Amount)=>{

              const cart={
                itemID:this.state.itemID,
                itemName:this.state.name,
                price:this.state.price,
                NoOfamount:Amount

              }

              // this.setState({
              //   cartItem:[...cart,this.state.cartItem]
              // },()=>console.log(this.state.cartItem[0]))

              this.state.cartItem.push({...cart})

              localStorage.setItem("item",this.state.cartItem);
            }



            render() { 
              //console.log(this.props.item)
              const {classes} = this.props;

 
  return (
    <div>
       
    <List style={{width:400}}>
      {this.props.item.map(tile=>(

     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={"data:image/jpeg;base64," +  tileData[0].img} />
        </ListItemAvatar>
        <ListItemText
           primary={tile.item_name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                LKR {tile.price}
              </Typography>
              
            </React.Fragment>
          }
          onClick={()=>{this.toggleLarge1();this.dataAssign(tile.item_name,tile.price,tile.preparing_time,tile.description,tile.itemID);}}
        />
      </ListItem>
      ))}

    
<Divider variant="inset" component="li" />
    </List>
   

    <Modal
            isOpen={this.state.large}
            toggle={this.toggleLarge1}
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader><KeyboardBackspaceIcon onClick={this.toggleLarge1}/>    View Item</ModalHeader>

            <ModalBody>

            
            

 
            <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={"data:image/jpeg;base64," +  tileData[0].img}
          title="Contemplative Reptile"
        />
        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="h2">
          {this.state.name}
          </Typography>
        
          <Typography variant="body2" color="textSecondary" component="p">
          <p style={{fontSize:"18px"}}><b>LKR {this.state.price}</b></p>
          <p style={{fontSize:"16px"}}>{this.state.time} minutes</p>
          <p style={{fontSize:"14px"}}>{this.state.description}</p>
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="justify-content-center">

          
        <div>
        <Button onClick={()=>this.RemoveItem()}><i className="fa fa-minus"></i></Button>
        </div>
        <b>{this.state.Items}</b>
        <div>
        <Button onClick={()=>this.AddItem()}><i className="fa fa-plus"></i></Button>
        </div>

        
        
        {/* <Button size="small" color="primary" onClick={()=>{
          this.setState({
            btnclicked:true
          })
        }}>
          Give feedback
        </Button>
        <Button size="small" color="primary" onClick={()=>{this.toggleLarge1();this.setState({rating:"",btnclicked:false})}}>
          cancel
        </Button> */}
      </CardActions>
      <CardFooter className="d-flex justify-content-center">
      <buttom className="btn btn-success" block onClick={()=>{this.AddItemsToCart(this.state.Items);}}>Add {this.state.Items} Item To Cart</buttom>
      </CardFooter>

    </Card>
             
   
              </ModalBody>
             
          </Modal>

    </div>
  );
}


}



export default withStyles(useStyles)(Menu);

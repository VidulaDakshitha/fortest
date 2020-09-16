import React, {Component, useEffect, useState} from 'react';
import axios from "axios";

function AddProductDialog(props) {


    const productImagesSubmitHanlder=(e)=>{
        e.preventDefault();

        const fileInput = document.querySelector("#p1").files[0];
        const fileInput2 = document.querySelector("#p2").files[0];
        const fileInput3 = document.querySelector("#p3").files[0];

        let images=[];

        images.push(fileInput)
        images.push(fileInput2)
        images.push(fileInput3)
        console.log(images)


            var bodyFormData = new FormData();
            bodyFormData.append('file', images[0]);
            bodyFormData.set('productid', "hello");
            console.log(images[0]);
            axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            }).then(res=> {
                if (res.data){
                    var bodyFormData = new FormData();
                    bodyFormData.append('file', images[1]);
                    bodyFormData.set('productid',"hello");
                    //console.log(productId);
                    axios({
                        method: 'post',
                        url: 'https://jsonplaceholder.typicode.com/posts',
                        data: bodyFormData,
                        headers: {'Content-Type': 'multipart/form-data' }
                    }).then(res=> {
                        if (res.data){
                            var bodyFormData = new FormData();
                            bodyFormData.append('file', images[2]);
                            bodyFormData.set('productid', "productId");
                            //console.log(productId);
                            axios({
                                method: 'post',
                                url: 'https://jsonplaceholder.typicode.com/posts',
                                data: bodyFormData,
                                headers: {'Content-Type': 'multipart/form-data' }
                            }).then(res=> {
                                if (res.data){
                                   
                                    alert("all images uploaded");
                                }
                            })

                        }
                    })
                }
            })
    }



    return (
        <div>
           <form onSubmit={productImagesSubmitHanlder} >
                        <input name={"image1"} autoFocus margin="dense" id="p1" label="product photo" type="file" fullWidth style={{marginTop:10}}/>
                        <input name={"image2"} margin="dense" id="p2" label="product photo" type="file" fullWidth style={{marginTop:10}}/>
                        <input name={"image3"} margin="dense" id="p3" label="product photo" type="file" fullWidth style={{marginTop:10}}/>
                        <button type={"submit"} className={"float-right"} style={{marginTop:5}} variant="contained" color="primary">Add Images</button>
                    </form>
        </div>
    );
}
export default AddProductDialog;
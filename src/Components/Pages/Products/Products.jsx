import React, { useEffect } from "react";

const Products = function()
{
    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });


      },[])
     
    return(
        <>
        Prodc
        </>
    )
   
}


export default Products;
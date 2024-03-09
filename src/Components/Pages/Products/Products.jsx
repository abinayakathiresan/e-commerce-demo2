import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductAsync,
  } from "../../../State/Slice/productSlice.jsx";

function Products(){
    const {products, isProductLoading} = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductAsync());
  },[]);


  const renderProducts = () => {
    return products && products?.map(item=>{
        return <div className="row">
            <div className="col-1">
                {item.id}
            </div>
            <div className="col-2">
                {item.title}
            </div>
            <div className="col-2">
                {item.completed?"Active":"Inactive"}
            </div>
        </div>
    })
  }
  return (
    <div>
      {isProductLoading ?<div>Loading...</div>:<div className="todos__list">{renderProducts()}</div>}
       
    </div>
  );
}
export default Products;


  
  /*
  const [products,setProduct] = useState();
    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          console.log(data);

        });


      },[])
     
    return(
        <>
          {products ?.map((item)=>{
            return (
              <div>
                <div>Product Id:{item.id}</div>
                <div>Product Description:{item.title}</div>
              </div>
            )
          })}
        </>
    )
   */
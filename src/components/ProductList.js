import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {


    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts();
    }, []);
    
    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    };



    const deleteProduct = async (id) => {
        console.warn(id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    };

    const srchHnadel = async (event) => {

        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if(result){
                setProducts(result);
            }
        }else{
            getProducts();
        }
    };

   




  return (
      <div className='product-list'>
          

          <h1>products list</h1>


          <input className='search-product-box' type="text" placeholder='search your products' name="" id="" onChange={srchHnadel} />

          <ul>
              <li>S.no</li>
              <li>Name</li>
              <li>Price</li>
              <li>Company</li>
              <li>Operation</li>
          </ul>

          {
            products.length>0? products.map((iteam, index)=>
                  
                <ul key={iteam._id}>
                    <li>{ index+1}</li>
                    <li>{ iteam.name}</li>
                    <li>{ iteam.price}</li>
                      <li>{iteam.category}</li>
                      <li><button onClick={() => deleteProduct(iteam._id)}>Delete</button></li>
                      <Link to={"/update/"+iteam._id}>update</Link>
              </ul>
              
              )
              :<h1>No Result Found</h1>
          }




    </div>
  )
}

export default ProductList
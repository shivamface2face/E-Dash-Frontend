import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [compnay, setcompnay] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
       
        getProductDetails();

    }, []);

    
    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.warn(result);
        setName(result.name);
        setCategory(result.category);
        setcompnay(result.compnay);
        setPrice(result.price);
    
    };



    const UpdateProducts = async () => {
        console.warn(name, price, category, compnay);
        let result =await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, compnay }),
            headers: {
                'Content-Type':'application/json'
            }
         });

        result = await result.json;
        console.warn(result);
        navigate('/');
     
    
    };
    




  return (
      <div className='product'>
          

          <h1>Update Products</h1>
          <input type="text" placeholder='enter product name' name="" id="" className='inputBox' onChange={(e)=>setName(e.target.value)} /> 
          <input type="number" placeholder='enter prodct price'  className='inputBox' name="" id="" onChange={(e)=>setPrice(e.target.value)} /> 
          <input type="text" placeholder='enter product category'  className='inputBox' name="" id="" onChange={(e)=>setCategory(e.target.value)}/> 
          <input type="text" placeholder='enter company name'  className='inputBox' name="" id="" onChange={(e)=>setcompnay(e.target.value)} /> 
          <button onClick={UpdateProducts} className='button'>Update product</button>

    </div>
  )
}

export default UpdateProduct
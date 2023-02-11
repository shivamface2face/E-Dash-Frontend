import React,{useState} from 'react'

const AddProduct = () => {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [compnay, setcompnay] = useState("");


  const AddProducts = async () => {
    console.warn(name, price, category, compnay);
   const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: 'post',
      body: JSON.stringify({ name, price, category, compnay, userId }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
      );

    result =  await result.json();
    console.warn(result);

  };






  return (
      <div className='product'>
          

          <h1>Add Products</h1>
          <input type="text" placeholder='enter product name' name="" id="" className='inputBox' onChange={(e)=>setName(e.target.value)} /> <span>enter valid name</span>
          <input type="number" placeholder='enter prodct price'  className='inputBox' name="" id="" onChange={(e)=>setPrice(e.target.value)} /> <span>enter valid price</span>
          <input type="text" placeholder='enter product category'  className='inputBox' name="" id="" onChange={(e)=>setCategory(e.target.value)}/> <span>enter valid product category</span>
          <input type="text" placeholder='enter company name'  className='inputBox' name="" id="" onChange={(e)=>setcompnay(e.target.value)} /> <span> enter valid compnay name</span>
          <button onClick={AddProducts} className='button'>Add product</button>

    </div>
  )
}

export default AddProduct
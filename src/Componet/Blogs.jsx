import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Store/Storecontext'

const Blogs = () => {
    const [data,setdata] = useState([])
    const search = useContext(StoreContext)

    function handitem(products){
      const product ={
        'title':products.title,
        "image":products.image,
        "price":products.price,
        "description":products.description
      }
      search.setaddtocart((prev)=> [...prev,product])
    }
    useEffect(()=>{
        const Getdata = async ()=>{
            const res = await fetch("https://fakestoreapi.com/products")
            const value = await res.json()
            setdata(value)
            // console.log(data)
            console.log(search.addtocart)
        }
        Getdata()
    },[])
    console.log(data)
  return (
    <div className='container mt-5 text-center'>
    <h1>Our Products</h1>
    <div className='container d-flex justify-content-between gap-4' style={{flexWrap:"wrap"}}>
    {data.filter((item)=>{return search.values.toLowerCase() == "" ? item :  item.title.toLocaleLowerCase().includes(search.values) }).map((item)=>{
        return (
            <div className="card" style={{ width: "19rem",height:"500px",padding:"20px"}}>
  <img src={item.image} className="card-img-top"  style={{height:"50%",objectFit:"contain"}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a onClick={()=>handitem(item)} className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>


        )
    })}
</div>      
    </div>
  )
}

export default Blogs

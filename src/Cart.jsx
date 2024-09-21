import React from 'react'
import { StoreContext } from './Store/Storecontext'
import { useContext } from 'react'
const Cart = () => {

    let data = useContext(StoreContext)

  return (
    <div>
      <h1>Our Products</h1>
    <div className='container d-flex justify-content-between gap-4' style={{flexWrap:"wrap"}}>
    {data.addtocart.map((item)=>{
        return (
            <div className="card" style={{ width: "19rem",height:"500px",padding:"20px"}}>
  <img src={item.image} className="card-img-top"  style={{height:"50%",objectFit:"contain"}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" onClick={()=>handitem(item)} className="btn btn-primary">
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

export default Cart

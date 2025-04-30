import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// const data=[
//     {
//         title:"A",
//         desc:" a voj oodnk jovkmdf fljvln vjn ljfv lj vlnv slmv, v,mvldnvdlvjdvl ljvm;mv;d  blmlv mdkls lnns f vfsn cfkmffmf.m ff",
//         img:"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//         price:"200"
//     },
//     {   title:"A",
//         desc:"checking",
//         img:"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//         price:"200"
//     },
//     {    title:"A",
//         desc:"checking",
//         img:"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//         price:"200"
//     },
//     {    title:"A",
//         desc:"checking",
//         img:"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//         price:"200"
//     },
//     {
//         title:"B",
//         desc:"check",
//         img:"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//         price:"100"
//     },
//     {
//         title:"C",
//         desc:"checked",
//         img:"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//         price:"300"
//     }
// ]
const ProductDetails = ({data}) => {
    const {id}=useParams(); 
    console.log(id);
  return (
    <div style={{display:"flex", marginLeft:"225px",gap:"150px"}}>
        <div className='img'>
            <img style={{height:"500px",width:"400px"}} src={data[id].img} alt='detailed-img'/>
        </div>
        <div className='details' style={{fontSize:"30px",width:"500px"}}>
            <h1 style={{}}>{data[id].title}</h1>
            <p>Price: {data[id].price} Rs</p>
            <h3>Desc:</h3>
            <p>{data[id].desc}</p>
            <Link to="/" style={{borderRadius:"3px",padding:"7px",marginLeft:"250px",backgroundColor:"gray",color:"white"}}>Other Products</Link>
        </div>
      
    </div>
  );
}

export default ProductDetails;

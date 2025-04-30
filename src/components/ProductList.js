import React from 'react';
import { Link } from 'react-router-dom';
// const data=[
//     {
//         title:"A",
//         desc:"checking",
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
const ProductList = ({data}) => {
  return (
    <div>
      <div 
        style={{width:"80vw", display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",marginLeft:"100px",gap:"20px"}}
      >
        {
            data.map((item,id)=>{
                return <div style={{display:"flex", border:"1px solid black", width:"400px"}}>
                    <div key={id} className='mobile-img'>
                        <img style={{height:"150px",width:"150px"}} src={item.img} alt='img-src'/>
                    </div>
                    <div style={{marginLeft:"30px"}}>
                        <h1 style={{textAlign:"center"}}>{item.title}</h1>
                        <div>
                            <span>Price: {item.price}</span>
                            <Link style={{borderRadius:"3px",padding:"5px",marginLeft:"20px",backgroundColor:"gray",color:"white"}} 
                            to={`/products/${id}`}>Buy</Link>
                        </div>
                    </div>
                </div>
            })
        }
      </div>
    </div>
  );
}

export default ProductList;

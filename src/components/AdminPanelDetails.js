import React, { use, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
const AdminPanelDetails = ({data}) => {
    const {id}=useParams();
    const [price,setPrice]=useState(id<data.length?data[id].price:"")
    const [title,setTitle]=useState(id<data.length?data[id].title:"")
    const [desc,setDesc]=useState(id<data.length?data[id].desc:"")
    const [img,setImg]=useState(id<data.length?data[id].img:"")
    const navigate=useNavigate();
    function handleDelete(){
        console.log(id);
        if(id>=data.length)
        {
            alert("Nothing to delete");
        }
        else 
        {
            data.splice(id,1);
            navigate("/admin");
        }
    }
    function updateChanges(){
        if(!title || !desc || !img || !price)
        {
            alert("Enter all the credentials");
            return;
        }
        if(id>=data.length)
        {
            data.push({
                title:title,
                desc:desc,
                img:img,
                price:price
            })
        }
        else{
            data[id]={
                title:title,
                desc:desc,
                img:img,
                price:price
            }
        }
        navigate("/admin");
    }
  return (
    <div>
      <div className='container' style={{textAlign:"center"}}>
        <h1>Title</h1>
        <input style={{width:"500px", padding:'7px'}} onChange={(e)=>setTitle(e.target.value)} type="text" value={title}/>
        <h1>Description</h1>
        <input style={{width:"500px", padding:'7px'}} onChange={(e)=>setDesc(e.target.value)} type="text" value={desc}/>
        <h1>image</h1>
        <input style={{width:"500px", padding:'7px'}} onChange={(e)=>setImg(e.target.value)} type="text" value={img}/>
        <div>
            <h1>Price</h1>
            <input onChange={(e)=>setPrice(e.target.value)} type='text' value={price}/>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={updateChanges}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanelDetails;

import React from "react";
import { Link } from "react-router-dom";

// const data = [
//   {
//     title: "Apple",
//     desc: " a voj oodnk jovkmdf fljvln vjn ljfv lj vlnv slmv, v,mvldnvdlvjdvl ljvm;mv;d  blmlv mdkls lnns f vfsn cfkmffmf.m ff",
//     img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     price: "200",
//   },
//   {
//     title: "Apple",
//     desc: "checking",
//     img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     price: "200",
//   },
//   {
//     title: "Apple",
//     desc: "checking",
//     img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     price: "200",
//   },
//   {
//     title: "Apple",
//     desc: "checking",
//     img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     price: "200",
//   },
//   {
//     title: "Blackberry",
//     desc: "check",
//     img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     price: "100",
//   },
//   {
//     title: "C",
//     desc: "checked",
//     img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     price: "300",
//   },
// ];

const AdminPanel = ({data}) => {
  let n = data.length;

  return (
    <div
      className="admin"
      style={{
        marginLeft: "200px",
        gap: "10px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <Link
          to={`/admin/products/${n}`}
          style={{
            borderRadius: "3px",
            padding: "7px",
            backgroundColor: "gray",
            color: "white",
          }}
        >
          Add Products
        </Link>
      </div>

      {data.map((item, id) => (
        <div
          key={id}
          className="prod-list"
          style={{
            display: "flex",
            marginBottom: "20px",
            backgroundColor: "grey",
            width: "50vw",
          }}
        >
          <div style={{ marginRight: "50px" }}>
            <img src={item.img} alt="product" style={{ height: "50px", width: "50px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={`/admin/products/${id}`}
              style={{
                borderRadius: "3px",
                padding: "5px 10px",
                backgroundColor: "#333",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {item.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;

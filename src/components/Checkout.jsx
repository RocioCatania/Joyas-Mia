// import { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { collection, addDoc } from "firebase/firestore";
// import baseDeDatos from "../firebase/firebase";

// export default function Checkout(){

//     const {register, handleSubmit} =useForm();

//     const [pedidoId, setPedidoId]= useState("");

//     const comprar =(data)=>{
//         const pedido = {
//             cliente: data,
//             productos: carrito,
//             total: precioTotal()
//         }

//         const referenciaDePedidos = collection(baseDeDatos,"pedidos");
//         addDoc(referenciaDePedidos, pedido)
//         .then((doc)=> {
//         setPedidoId(doc.id);
//         vaciarCarrito();
//         })
//     }

//     if (pedidoId) {
//         return (
//             <div className="conteiner">
//                 <h1>Tu Numero de Orden es: {pedidoId} </h1>
//             </div>
//         )
//     }

//         const mostrarAlert=(event)=>{
//         event.preventDefault();
// Swal.fire({
//     position: "top-end",
//     icon: "success",
//     text: "Sus Datos fueron enviados correctamente",
//     title: "¡Gracias por su Compra!",
//     showConfirmButton: false,
//     timer: "2000",
// });
//     }


//     return(
//         <>
//         <div>
//             <h1>Finalizar Compra</h1>
//             <form   onSubmit={handleSubmit(comprar)}
//                     className=" d-flex flex-column justify-content-center align-items-center m-5 p-5">

//                 <input className="m-3 w-75 placeholder col-12 bg-warning"  type="text" placeholder="Nombre y Apellido "{...register("nombre")}/>
//                 <input className="m-3 w-75 placeholder col-12 bg-warning"  type="email" placeholder="Email" {...register("email")}/>
//                 <input className="m-3 w-75 placeholder col-12 bg-warning"  type="tel" placeholder="Telefono"{...register("telefono")} />

//                 <button onClick={mostrarAlert} className=" m-3 btn btn-outline-warning " type="submit">
//                     <Link >Comprar</Link>
//                 </button>

//             </form>
//         </div>
//         </>
//     )
// }
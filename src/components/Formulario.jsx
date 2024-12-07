
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { baseDeDatos } from "../firebase/firebase";
import { ProductsContext } from "./context/ProductsContext";
import { Link } from "react-router-dom";


export default function Formulario() {
    const { carrito, precioTotal } = useContext(ProductsContext); 
    const pedidosRef = collection(baseDeDatos, "pedidos");
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate(); 
    const [pedidoId,setPedidoId]= useState("");


    const comprar = async (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        try {
        const docRef = await addDoc(pedidosRef, pedido);
                setPedidoId(docRef.id);
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                text: "Sus Datos fueron enviados correctamente",
                title: "¡Compra Exitosa!",
                showConfirmButton: false,
                timer: 2000,
            });
        } catch (error) {
            console.error("Error al enviar el pedido:", error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                text: "Hubo un error al procesar su pedido. Inténtelo de nuevo.",
                title: "Error",
                showConfirmButton: true,
            });
        }
    };

    if (pedidoId) {
        return(
            <div>
                <h1>Gracias por su Compra </h1>
                <br/>
                <h4 className="m-3">Su numero de pedido es: {pedidoId}</h4>
                <h3 className="m-3">Guardelo para cualquier consulta</h3>
                <br/>
                <Link className= "btn btn-outline-warning mx-4 " to="/">Seguir Comprando</Link>

            </div>
        )
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(comprar)}
                className="d-flex flex-column justify-content-center align-items-center m-5 p-5"
            >
                <input
                    className="m-3 w-75 placeholder col-12 bg-warning"
                    type="text"
                    placeholder="Nombre y Apellido"
                    {...register("nombre")}
                />
                <input
                    className="m-3 w-75 placeholder col-12 bg-warning"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
                <input
                    className="m-3 w-75 placeholder col-12 bg-warning"
                    type="tel"
                    placeholder="Telefono"
                    {...register("telefono")}
                />

                <button className="m-3 btn btn-outline-warning" type="submit">
                    Comprar
                </button>
            </form>
        </div>
    );
}

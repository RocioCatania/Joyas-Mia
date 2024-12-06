import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


export default function Formulario(){

    const {register, handleSubmit} =useForm();

    const enviado=(data)=>{
        console.log(data);
    }

        const mostrarAlert=(event)=>{
        event.preventDefault();
Swal.fire({
    position: "top-end",
    icon: "success",
    text: "Sus Datos fueron enviados correctamente",
    title: "¡Gracias por su Compra!",
    showConfirmButton: false,
    timer: "2000",
});
    }


    return (
        <> 
        <div>
            <form   onSubmit={handleSubmit(enviado)}
                    className=" d-flex flex-column justify-content-center align-items-center m-5 p-5">

                <input className="m-3 w-75 placeholder col-12 bg-warning"  type="text" placeholder="Nombre y Apellido "{...register("nombre")}/>
                <input className="m-3 w-75 placeholder col-12 bg-warning"  type="email" placeholder="Email" {...register("email")}/>
                <input className="m-3 w-75 placeholder col-12 bg-warning"  type="tel" placeholder="Telefono"{...register("telefono")} />

                <button onClick={mostrarAlert} className=" m-3 btn btn-outline-warning " type="submit">
                    <Link to="/checkout">Comprar</Link>
                </button>

            </form>
        </div>
        </>
    )
}



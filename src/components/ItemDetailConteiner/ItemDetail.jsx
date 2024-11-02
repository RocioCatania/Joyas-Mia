import ItemCount from "../ItemListConteiner/ItemCount";

export default function Item ({detail}) {
    return (
        <>
        <section className="w-50 rounded border border-warning-subtle border border-3 m-3 p-3 ">
            
            <img  className="w-100 h-50" src={detail.img} alt="" />
            
        <h3>{detail.name}</h3>
        <p>${detail.precio}.- </p>
        <p>Mas Detalles: {detail.descripcion} </p>
        <p> stock:{detail.stock} </p>
        <p className="text-danger">Pagos por Transferencias Bancarias 10% de descuento</p>
        <ItemCount max= {detail.stock}/>
        </section>
        </>
    )
}
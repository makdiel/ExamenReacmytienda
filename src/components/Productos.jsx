import React from 'react'

export const Productos = () => {
    const TablaProductos = [
        {
            id: 1,
            nombre_producto: "VENTILADOR SANKEY PEDESTAL",
            precio: "350.00",
            ombre_proveedor: "COMERCIAL LINO",
            nombre_tipo: "Ventiladores",
            nombre_categoria: "Linea Blanca"
        },
        {
            id: 2,
            nombre_producto: "VENTILADOR SANKEY P/PARED",
            precio: "650.00",
            nombre_proveedor: "PAJARO AZUL",
            nombre_tipo: "Ventiladores",
            nombre_categoria: "Linea Blanca"
        }
        ,
        {
            id: 3,
            nombre_producto: "LAMPARA / VENTILADOR",
            precio: "4500.00",
            nombre_proveedor: "MUNDO OFERTA",
            nombre_tipo: "Lamparas",
            nombre_categoria: "Linea Blanca"
        }
    ];
    return (
        <>
            <div className='container card mt-4' >
                <h1>Catalago de Productos  </h1>
                <table className="table table-dark table-striped table-responsive " >
                    <tbody>
                        <tr><th>ID-PRODUCTO </th><th>NOMBRE DEL PRODUCTO</th><th>PRECIO</th><th>PROVEEDOR</th><th>TIPO PRODUCTO</th><th>CATEGORIA</th></tr>
                        {TablaProductos.map((item) => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.nombre_producto} </th>
                                <th>{item.precio} </th>
                                <th>{item.nombre_proveedor} </th>
                                <th>{item.nombre_tipo} </th>
                                <th>{item.nombre_categoria} </th>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </>
    )
}

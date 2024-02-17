import React from 'react'

export const TiposProductos = () => {
    const TablaTiposProductos = [
        {
            id: 1,
            Nombre: "Lamparas"
        },
        {
            id: 2,
            Nombre: "Auriculares"
        }
        ,
        {
            id: 3,
            Nombre: "Cargadores de telefonos"
        },
        {
            id: 4,
            Nombre: "Ventiladores"
        },
        {
            id: 5,
            Nombre: "Televisores"
        },
        {
            id: 6,
            Nombre: "Espejos"
        },
        {
            id: 6,
            Nombre: "Impresoras"
        },
        {
            id: 7,
            Nombre: "Mochilas"
        },
        {
            id: 8,
            Nombre: "Cuadernos"
        }

    ];
    return (
        <>
            <div className='container card mt-4' >
                <h1>Catalago de Tipos de Productos </h1>
                <table className="table table-dark table-striped table-responsive " >
                    <tbody>
                        <tr><th>ID-TIPO </th><th>NOMBRE DEL TIPO DE PRODUCTO</th></tr>
                        {TablaTiposProductos.map((item) => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.Nombre} </th>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </>
    )
}

import React from 'react'

export const Categorias = () => {
    const TablaCategorias = [
        {
            id: 1,
            Nombre: "Electronica",
        },
        {
            id: 2,
            Nombre: "Linea Blanca",
        }
        ,
        {
            id: 3,
            Nombre: "Utencilios de Cocina"
        },
        {
            id: 4,
            Nombre: "Utiles Escolares"
        },
        {
            id: 5,
            Nombre: "Articulos p/Hogar"
        }

    ];
    return (
        <>
            <div className='container card mt-4' >
                <h1>Catalago de Categorias de Productos </h1>
                <table className="table table-dark table-striped table-responsive " >
                    <tbody>
                        <tr><th>ID-CATEGORIA </th><th>NOMBRE DE LA CATEGORIA</th></tr>
                        {TablaCategorias.map((item) => (
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

import React from 'react'

export const Categorias = () => {
    const TablaCategorias = [
        {
            posicion: 1,
            equipo: "Real Madrid",
            puntos: 100
        },
        {
            posicion: 2,
            equipo: "Barcelona",
            puntos: 99
        },
        {
            posicion: 3,
            equipo: "Ateltico de Madrid",
            puntos: 88
        }

    ];

    return (
        <>
            <div className='container'>

                <h1>Categorias de Productos</h1>

                <table className="table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Equipo</th>
                            <th scope="col">Puntos</th>

                        </tr>
                    </thead>
                    <tbody>

                        {TablaCategorias.map((item) => (

                            <tr key={item.posicion}>
                                <td>{item.posicion}</td>
                                <td>{item.equipo} </td>
                                <td>{item.puntos} </td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>
    )
}

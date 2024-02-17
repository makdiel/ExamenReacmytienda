import React from 'react'

export const Proveedores = () => {
    const TablaProveedores = [
        {
            id: 1,
            Nombre: "Comercial Lino",
            Direccion: "SPS, 6 y 7 ave 8 Calle",
            Contacto: "Wilmer cel. 984547654"
        },
        {
            id: 2,
            Nombre: "Pajaro Azul",
            Direccion: "SPS, 3 y 4 ave 12 Calle",
            Contacto: "SEBASTIAN cel. 984547654"
        }
        ,
        {
            id: 3,
            Nombre: "La Curacao",
            Direccion: "SPS, 7 ave 4 Calle",
            Contacto: "CARLOS cel. 984547654"
        },
        {
            id: 4,
            Nombre: "Utiles de Honduras",
            Direccion: "SPS, 1 ave 1 Calle",
            Contacto: "JOEL cel. 984547654"
        },
        {
            id: 5,
            Nombre: "PACASA",
            Direccion: "SPS,  7 ave 4 Calle",
            Contacto: "MARIA cel. 984547654"
        }

    ];
    return (
        <>
            <div className='container card mt-4' >
                <h1>Catalago de Proveedores de Productos </h1>
                <table className="table table-dark table-striped table-responsive " >
                    <tbody>
                        <tr><th>ID-PROVEEDOR </th><th>NOMBRE DEL PROVEEDOR</th><th>DIRECCION</th><th>CONTACTO</th></tr>
                        {TablaProveedores.map((item) => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.Nombre} </th>
                                <th>{item.Direccion} </th>
                                <th>{item.Contacto} </th>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </>
    )
}

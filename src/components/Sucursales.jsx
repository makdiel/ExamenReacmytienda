import React from 'react'

export const Sucursales = () => {
    const TablaSucursales = [
        {
            id: 1,
            Nombre: "MyTiendaEnLinea#1",
            Direccion: "SPS, 6 y 7 ave 8 Calle",
            Contacto: "javier cel. 984547654"
        },
        {
            id: 2,
            Nombre: "MyTiendaEnLinea#2",
            Direccion: "Tegucigalpa, 3 y 4 ave 12 Calle",
            Contacto: "SEBASTIAN cel. 984547654"
        }
        ,
        {
            id: 3,
            Nombre: "MyTiendaEnLinea#3",
            Direccion: "Comayagua, 7 ave 4 Calle",
            Contacto: "CARLOS cel. 984547654"
        }

    ];
    return (
        <>
            <div className='container card mt-4' >
                <h1>Nuestras Sucursales en el pais </h1>
                <table className="table table-dark table-striped table-responsive " >
                    <tbody>
                        <tr><th>ID-SUCURSAL </th><th>NOMBRE DEL SUCURSAL</th><th>DIRECCION</th><th>CONTACTO</th></tr>
                        {TablaSucursales.map((item) => (
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

//import React from 'react'
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Proveedores = () => {

    // Logica de la vista
    const url = 'http://localhost:4000/api/Proveedor/'
    //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

    //const navigate = useNavigate();

    //no me funciono
    //  const [dataForm, setDataForm] = useState({
    //      proveedor: "",
    //      dir: "",
    //      cont: ""
    //  });

    //  const [Proveedores, setRegistroProveedor] = useState("");
    //  const onChangeHandler = (event) => {
    //      const { name, value } = event.target;
    //      setDataForm({ ...dataForm, [name]: value });
    //  }


    const [id_, setId] = useState();

    const [nombre, setNombre] = useState();

    const [dir, setDireccion] = useState();

    const [cont, setContacto] = useState();

    const idHandler = (event) => {
        const { name, value } = event.target;
        setId(value);
    }

    const nombreHandler = (event) => {
        const { name, value } = event.target;
        setNombre(value);
    }

    const direccionHandler = (event) => {
        const { name, value } = event.target;
        setDireccion(value);
    }

    const contactoHandler = (event) => {
        const { name, value } = event.target;
        setContacto(value);
    }


    const submitHandler = async () => {
        event.preventDefault();
        // const url = `http://localhost:4000/api/Proveedor/${dataForm.nombre_proveedor}/${dataForm.direccion}/${dataForm.contacto}`;
        const data = {
            nombre_proveedor: nombre,
            direccion: dir,
            contacto: cont
        }
        try {
            const result = await axios.post(url, data);
            const resultData = (await result).data;
            setRegistroProveedor("Existo al registrar un nuevo proveedor");
            navigate('/components/Home');
            console.log(result);
            console.log(resultData);
        } catch (err) {
            setRegistroProveedor("Error al registrar un nuevo proveedor");
            console.log(result);
            console.log(resultData);
        }

    }

    const updatetHandler = async () => {
        event.preventDefault();

        const data = {
            id: id_,
            nombre_proveedor: nombre,
            direccion: dir,
            contacto: cont
        }
        const url = `http://localhost:4000/api/Proveedor/${data.id}`;

        try {
            const result = await axios.put(url, data);
            const resultData = (await result).data;
           // setRegistroProveedor("Existo al actualizar el  proveedor");
            navigate('/components/Home');
            console.log(result);
            console.log(resultData);
        } catch (err) {
         //   setRegistroProveedor("Error al actualizar el proveedor");
            console.log(result);
            console.log(resultData);
        }

    }

    const deletetHandler = async () => {
        event.preventDefault();

        const data = {
            id: id_
        }
        const url = `http://localhost:4000/api/Proveedor/${data.id}`;

        try {
            const result = await axios.delete(url, data);
            const resultData = (await result).data;
           // setRegistroProveedor("Existo al actualizar el  proveedor");
            navigate('/components/Home');
            console.log(result);
            console.log(resultData);
        } catch (err) {
         //   setRegistroProveedor("Error al actualizar el proveedor");
            console.log(result);
            console.log(resultData);
        }

    }

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

                <div className='container mt-5' >
                    <form onSubmit={submitHandler} >
                        <fieldset>
                            <legend>Registrar nuevos proveedores</legend>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Nombre del Proveedor</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="nombre"
                                        onChange={nombreHandler}
                                    />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Direccion : </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="dir"
                                        onChange={direccionHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Contacto : </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="cont"
                                        onChange={contactoHandler} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Registrar Proveedor</button>
                        </fieldset>
                    </form>
                </div>

                <div className='container mt-5' >
                    <form onSubmit={updatetHandler} >
                        <fieldset>
                            <legend>Actualizar proveedores</legend>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Id del Proveedor</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="id_"
                                        onChange={idHandler}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Nombre del Proveedor</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="nombre"
                                        onChange={nombreHandler}
                                    />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Direccion : </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="dir"
                                        onChange={direccionHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Contacto : </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="cont"
                                        onChange={contactoHandler} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Actualizar Proveedor</button>
                        </fieldset>
                    </form>
                </div>
                <div className='container mt-5' >
                    <form onSubmit={deletetHandler} >
                        <fieldset>
                            <legend>Eliminar proveedores</legend>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Id del Proveedor</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext"
                                        name="id_"
                                        onChange={idHandler}
                                    />
                                </div>
                            </div>
                          
                            <button type="submit" className="btn btn-primary w-100">Eliminar Proveedor</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}

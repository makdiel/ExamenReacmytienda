import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My Tienda En Linea</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">

                            <Link to="/" className="nav-link active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Categorias" className="nav-link" >Categorias</Link>

                        </li>

                        <li className="nav-item">
                            <Link to="/TiposProductos" className="nav-link" >Tipos de Productos</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/Proveedores" className="nav-link" >Proveedores de Productos</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/Productos" className="nav-link" >Catalago de Productos</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/Sucursales" className="nav-link" >Nuestras Sucursales</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

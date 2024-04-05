import React from 'react';
import './CSS/barraLateral.css';
import './CSS/contenido.css';
import { BiList, BiHouseDoorFill, BiBox2Fill, BiArrowDown, BiFileEarmarkPersonFill, BiBagFill, BiCardText, BiPower } from 'react-icons/bi';

function BarraDashboard() {
    return (
        <>
            <nav>
                <div className="menu-dashboard">
                    <div className="top-menu">
                        <div className="logo">
                            <img src="../pag_Inicial/logo.png" alt="logo" />
                            <span>TechBeauty</span>
                        </div>
                        <div className="toggle">
                            <BiList />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="enlace">
                            <a className="inicio" href="administrador.php">
                                <BiHouseDoorFill />
                                <span>Inicio</span>
                            </a>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="enlace list__item">
                            <div className="list__button list__button--click">
                                <BiBox2Fill />
                                <span>Productos</span>
                                <BiArrowDown />
                            </div>
                            <ul className="list__show">
                                <li className="list__inside">
                                    <a href="./registrar_Producto.php" className="nav__link nav__link--inside">Registrar Producto</a>
                                </li>
                                <li className="list__inside">
                                    <a href="./listarProductos.php" className="nav__link nav__link--inside">Consultar Producto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="enlace list__item">
                            <div className="list__button list__button--click">
                                <BiFileEarmarkPersonFill />
                                <span>Proveedores</span>
                                <BiArrowDown />
                            </div>
                            <ul className="list__show">
                                <li className="list__inside">
                                    <a href="./registrar_proveedores.php" className="nav__link nav__link--inside">Agregar Proveedor</a>
                                </li>
                                <li className="list__inside">
                                    <a href="./consultar_proveedores.php" className="nav__link nav__link--inside">Consultar Proveedores</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="enlace list__item">
                            <div className="list__button list__button--click">
                                <BiBagFill />
                                <span>Compras</span>
                                <BiArrowDown />
                            </div>
                            <ul className="list__show">
                                <li className="list__inside">
                                    <a href="./error404.php" className="nav__link nav__link--inside">Registrar Compra</a>
                                </li>
                                <li className="list__inside">
                                    <a href="./error404.php" className="nav__link nav__link--inside">Buscar Compra</a>
                                </li>
                                <li className="list__inside">
                                    <a href="./error404.php" className="nav__link nav__link--inside">Ventas Registradas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="enlace">
                            <a className="datos" href="./error404.php">
                                <BiCardText />
                                <span>Datos Personales</span>
                            </a>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="CS">
                            <div className="cerrarSesion">
                                <a className="cerrarS" href="../../Model/cerrarSesion.php">
                                    <BiPower />
                                    <span>Cerrar Sesión</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BarraDashboard;

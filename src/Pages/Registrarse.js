import React from 'react';
import './CSS/registrarse.css';
import imgSignIn from './img/img1.jpeg'

const Registrarse = () => {
    return (
        <>
            <form className="registrarse">
                <div className="form-signin">
                    <div className="box">
                        <div className="form-img">
                            <h2>Registrarse</h2>
                            <img src={imgSignIn} alt="imgForm" />
                        </div>
                    </div>
                    <div className="box">
                        <br /><br />
                        <label htmlFor="nombre">Nombre: </label>
                        <input className="control-signin" type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required />
                        <br /><br />
                        <label htmlFor="apellido">Apellido: </label>
                        <input className="control-signin" type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido" required />
                        <br /><br />
                        <label htmlFor="correo">Correo: </label>
                        <input className="control-signin" type="text" id="correo" name="correo" placeholder="Ingrese su correo" required />
                        <br /><br />
                        <label htmlFor="contraseña">Contraseña: </label>
                        <input className="control-signin" type="password" id="contraseña" name="contraseña" placeholder="Ingrese su contraseña" required />
                        <br /><br />
                        <button type="submit">Registrarse</button>
                    </div>
                </div>
            </form>
            <script src="./JS/index.js"></script>
        </>
    );
}

export default Registrarse;

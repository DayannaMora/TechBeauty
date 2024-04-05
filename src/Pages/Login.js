import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import imgLogin from './img/img2.jpeg';
import './CSS/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Hacer la solicitud para obtener todos los usuarios
            const response = await axios.get('http://localhost:8080/api/user/');
            const users = response.data;

            // Buscar un usuario en la lista de usuarios cuyo correo electrónico y contraseña coincidan
            const user = users.find(u => u.email === email && u.passwordU === password);

            if (user) {
                // Redireccionar según el rol del usuario
                switch (user.numRole.id) {
                    case 1:
                        window.location.href = '/cliente';
                        break;
                    case 2:
                        window.location.href = '/vendedor';
                        break;
                    case 3:
                        window.location.href = '/administrador';
                        break;
                    case 4:
                        window.location.href = '/jefe';
                        break;
                    default:
                        break;
                }
            } else {
                setError('Credenciales inválidas. Inténtalo de nuevo.');
            }
        } catch (error) {
            setError('Hubo un error al procesar la solicitud. Inténtalo de nuevo.');
            console.error('Error en el inicio de sesión:', error);
        }
    };

    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <div className="form-login">
                    <div className="box">
                        <div className="form-img">
                            <h2>Iniciar Sesión</h2>
                            <img src={imgLogin} alt="imgForm" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="input-form">
                            <label htmlFor="usuario">Correo</label>
                            <input className="control-login" type="email" id="usuario" name="usuario" placeholder="Ingrese su Correo" required onChange={(e) => setEmail(e.target.value)} />
                            <br/><br/>
                            <label htmlFor="contraseña">Contraseña</label>
                            <input className="control-login" type="password" id="contraseña" name="contraseña" placeholder="Ingrese su Contraseña" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="password_lost">
                            <Link to={"/Recuperar"}>¿Has olvidado la contraseña?</Link>
                            <br/><br/>
                        </div>
                        {error && <p>{error}</p>}
                        <button type="submit">Iniciar sesión</button>
                        <div className="no_account">
                            <Link to={"/Registrarse"}>¿No tienes cuenta? Regístrate</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;

import { useState, useEffect } from "react";
import Menu from "../nav-bar/Menu";
import { useForm } from "../hooks/useForm";
import { access } from "../../MunicipiosYProvincias";
import Logo from "../../image/Logo.png"

function Login () {

    const { formValues, handleInputChange}  = useForm({
        user: '',
        pass: ''
      });
    const { user, pass } = formValues;
    const [login, setLogin] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        iniciarSesion();
    }

    const iniciarSesion = () => {
        if(user == access.user && pass == access.pass) {
            window.location='/registros';
        }
    }

    return (
        <>
            <Menu />
            <div className="container row login">
                <img src={Logo} className="logo-login"/>
                <h3>Iniciar Sesión</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <label htmlFor="user">Usuario: </label>
                        <input                             
                            type="text" 
                            name="user"
                            id="user"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-field col s12">
                        <label htmlFor="pass">Contraseña: </label>
                        <input 
                            type="password" 
                            name="pass"
                            id="pass"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="waves-effect waves-light btn blue darken-4 col s12">Guardar</button>
                </form>
            </div>
        </>
    )
}

export default Login;
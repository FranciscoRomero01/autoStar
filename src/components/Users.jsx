import { useState, useContext } from 'react';
import '../style/Users.css';
import { UsersContext } from '../context/UsersContext';

const Users = () => {

    const user = useContext(UsersContext);

    // Estado del nombre del usuario
    const [name, setName] = useState([]);
    // Estado del mail del usuario
    const [mail, setMail] = useState([]);
    // Estado de la contraseña
    const [password, setPassword] = useState([]);
    // Estado del DNI 
    const [dni, setDni] = useState([]);

    // Asignando valor al estado de nombre
    const nameUsers = (e) => {
        setName(e.target.value)
    }

    // Asignando valor al estado de mail
    const mailUsers = (e) => {
        setMail(e.target.value)
    }

    const dniUsers = (e) => {
        setDni(e.target.value)
    }

    // Asignando valor al estado de contraseña
    const passwordUsers = (e) => {
        setPassword(e.target.value)
    }
    
    function submit(e) {
        e.preventDefault();
        
        user.addUsers(name, mail, password, dni);
    }

    
    return(
            <div className="users">
                <div className="usersDiv center">
                    {
                        user.users.length === 0
                        ? 
                        <>
                            <h3 className='usersDivTitle'>Iniciar Sesión</h3>
                            <form className='usersDivForm' onSubmit={submit}>
                                <input onChange={nameUsers} type="text" placeholder="ingrese su nombre completo" />
                                <input onChange={mailUsers} type="email" placeholder="ingrese su mail" />
                                <input onChange={dniUsers} type="number" placeholder="ingrese su DNI" />
                                <input onChange={passwordUsers} type="password" placeholder="ingrese scontraseña" />
                                <input className='submit' type="submit" value="Iniciar sesion"/>
                            </form>
                        </>
                        :
                        <h3>Ya se ha registrado</h3>
                    }
                </div>
            </div>
    )
}

export default Users;
import { useState, useContext } from 'react';
import '../style/Users.css';
import { UsersContext } from '../context/UsersContext';

const Users = () => {

    const user = useContext(UsersContext);

    // Username Status
    const [name, setName] = useState([]);
    // User email status
    const [mail, setMail] = useState([]);
    // password status
    const [password, setPassword] = useState([]);
    // Status of the user's ID
    const [dni, setDni] = useState([]);

    // Assigning value to name state
    const nameUsers = (e) => {
        setName(e.target.value)
    }

    // Assigning value to mail status
    const mailUsers = (e) => {
        setMail(e.target.value)
    }

    // Assigning value to the DNI status
    const dniUsers = (e) => {
        setDni(e.target.value)
    }

    // Assigning value to password state
    const passwordUsers = (e) => {
        setPassword(e.target.value)
    }
    
    function submit(e) {
        e.preventDefault();
        
        // Assigning parameters to the addUsers function
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
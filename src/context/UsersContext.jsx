import { createContext, useState } from "react";
import {collection, doc, setDoc} from 'firebase/firestore';
import swal from 'sweetalert';
import db from '../utils/firebaseConfig';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    const addUsers = (name, mail, password, dni) => {
        let user = {
            name : name,
            mail: mail,
            password : password,
            dni : dni
        }
        setUsers(user);
    }
    console.log(users);
    
    const createOrderInFirestore = async () => {
            const newOrder = doc(collection(db, "users"));
            await setDoc(newOrder, users);
            return newOrder;
        };
    
        createOrderInFirestore()
            .then(result => swal({
                text: 'Gracias por registrarse',
                title: `Se ha regitrado con exito ${users.name}`,
                icon: 'success',
                Button: 'Ok',
            }))
            .catch(err => console.log(err));

    return (
        <UsersContext.Provider value={{users, addUsers}}>
            { children }
        </UsersContext.Provider>
    )
}

export default UsersContextProvider
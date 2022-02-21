import {React} from 'react';
import "./style.css"
import {auth} from "../../service/firebase.js"



const LoginPage = () => {
    return ( 
        <div className="LoginPage">
        <div className='LoginPage_LoginWraper'>
            <h1 className='LoginPage_Titulo'>Nome Da Rede</h1>
            <button className='LoginPage_Btn'>Inscrever-se no Google</button>
            <p>Já tem uma conta?</p>
            <button className='LoginPage_Btn'>Entrar</button>
        </div>
        </div>
     );
}

export default LoginPage;
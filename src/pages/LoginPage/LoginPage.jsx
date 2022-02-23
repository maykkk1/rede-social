import { React} from "react";
import "./style.css";
import { firebase, auth } from "../../service/firebase";
import useAuth from "../../hooks/useAuth";
import {useNavigate } from "react-router-dom";

const LoginPage = () => {
  let nav = useNavigate();
  const { user, setUser } = useAuth();
  const handleLoginBtn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { uid, displayName, photoURL } = result.user;
      setUser({
        id: uid,
        avatar: photoURL,
        nome: displayName,
      });
    }
    nav("/feed")
  };
  return (
    <div className="LoginPage">
      <div className="LoginPage_LoginWraper">
        <h1 className="LoginPage_Titulo">Thinking</h1>
        <button onClick={handleLoginBtn} className="LoginPage_Btn">
          Entrar com o Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

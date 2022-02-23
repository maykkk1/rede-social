import React from "react";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import useUpdate from "../../hooks/useUpdate";
import { useState } from "react";
import { db } from "../../service/firebase";

export default function UserPanel() {
  const { setUpdate, update } = useUpdate();
  const { user } = useAuth();
  const [post, setPost] = useState([]);

  return (
    <div className="userPanel_content">
      <div className="userPanel_AvatarAndName">
        <p>{user.nome}</p>
        <div className="userPanel_AvatarWrapper">
          <img src={user.avatar} alt="" />
        </div>
      </div>
      <div className="UserPanel_Post">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            db.collection("posts").add(post);
            let aux = update
            aux++
            setUpdate(aux)
            e.target.reset()
          }}
          action=""
        >
          <textarea
          placeholder="Digite uma ideia..."
            onChange={(e) => {
              setPost({
                conteudo: e.target.value,
                nome: user.nome,
                avatar: user.avatar,
              });
            }}
            name="post"
            id=""
          ></textarea>
          <button className="submitBtn" type="submit">
            Postar
          </button>
        </form>
      </div>
    </div>
  );
}

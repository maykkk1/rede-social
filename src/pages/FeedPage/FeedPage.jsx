import "./style.css";
import UserPanel from "../../components/UserPanel/UserPanel";
import { db } from "../../service/firebase";
import { useEffect, useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useUpdate from "../../hooks/useUpdate";

function FeedPage() {
  const {update} = useUpdate();
  const [postList, setPosts] = useState([]);
  const { user } = useAuth();
  const postListAux = []
  useEffect(() => {
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          postListAux.push(doc.data());
        });
        setPosts(postListAux)
        console.log('aconteci')
      });
  },[update]);

  return (
    <div className="feed_mainContainer">
      <div className="feed_content">
        <section className="feed_userPanel">
          <UserPanel />
        </section>
        <section className="PostsPanel">
          <ul>
            {postList.map((post, index) => {
              return (
                <li key={index}>
                  <div className="feed_postText">
                    <p>{post.conteudo}</p>
                  </div>
                  <div className="feed_userPostInfo">
                    <div className="feed_avatarWrapper">
                      <img src={post.avatar} alt="" />
                    </div>
                    <p className="feed_userName">{post.nome}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default FeedPage;

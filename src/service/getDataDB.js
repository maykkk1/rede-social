import { db } from "./firebase";

const getDataDB = () => {
    const lista = []
    db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        lista.push(doc.data());
      });
    });
    return lista;
}

export {getDataDB}
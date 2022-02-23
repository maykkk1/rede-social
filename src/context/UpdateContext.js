import { createContext, useState } from "react";

export const UpdateContext = createContext();

export default function UpdateContextProvider(props) {
  const [update, setUpdate] = useState(0);
  return (
    <UpdateContext.Provider value={{update, setUpdate}}>
      {props.children}
    </UpdateContext.Provider>
  );
}
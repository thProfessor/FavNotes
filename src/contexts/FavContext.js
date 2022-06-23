import { createContext, useReducer, useEffect } from "react";
import { FavReducer } from "../reducers/FavReducers";

export const FavContext = createContext();

const FavContextProvider = ({ children }) => {
  const [fav, dispatch] = useReducer(FavReducer, [], () => {
    const currentFavs = localStorage.getItem("fav");
    return currentFavs ? JSON.parse(currentFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);
  return (
    <FavContext.Provider value={{ fav, dispatch }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;

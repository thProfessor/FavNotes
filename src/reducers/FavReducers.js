import { v4 as uuidv4 } from "uuid";

export const FavReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [
        ...state,
        {
          title: action.sfav.title,
          detail: action.sfav.detail,
          category: action.sfav.category,
          id: uuidv4(),
        },
      ];
    case "REMOVE_FAV":
      return state.filter((fav) => fav.id !== action.id);
    default:
      return state;
  }
};

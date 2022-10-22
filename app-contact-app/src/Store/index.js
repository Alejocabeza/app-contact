import { createStore } from "redux";
import { reducers } from "../Reducers";

export const store = createStore(reducers);

store.subscribe(() => console.log(store));

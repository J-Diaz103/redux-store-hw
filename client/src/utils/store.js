//import createStore
import { createStore } from "redux";

// import the reducer
import reducers from "./reducers";

// taking in the reducer
export default createStore(reducers);

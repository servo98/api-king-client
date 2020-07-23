import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//DUCKS
import projects from './ProjectDuck';
// import products from "./ProductDuck";
// import user from "./UserDuck";
// import cart from "./CartDuck";

export const rootReducer = combineReducers({
//   products,
//   user,
//   cart,
  projects
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
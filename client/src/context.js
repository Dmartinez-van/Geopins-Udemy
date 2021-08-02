import { createContext } from "react";

// Context is like the initial state for app
const Context = createContext({
  currentUser: null,
  isAuth: false,
  draft: null, // for draft pin
  pins: [],
  currentPin: null,
});

export default Context;

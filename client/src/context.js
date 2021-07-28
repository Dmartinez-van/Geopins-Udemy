import { createContext } from "react";

// Context is like the initial state for app
const Context = createContext({
  currentUser: null,
});

export default Context;

// export default function reducer(state, { type, payload}) {
// We can destructure the action parameter to type and payload to avoid having to repeat ourselves
export default function reducer(state, { type, payload }) {
  switch (type) {
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "IS_LOGGED_IN":
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
}

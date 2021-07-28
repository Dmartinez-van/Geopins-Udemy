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
    case "SIGNOUT_USER":
      return {
        ...state,
        currentUser: null,
        isAuth: false,
      };
    case "CREATE_DRAFT":
      return {
        ...state,
        draft: {
          latitude: 0,
          longitude: 0,
        },
      };
    case "UPDATE_DRAFT_LOCATION":
      return {
        ...state,
        draft: payload,
      };

    default:
      return state;
  }
}

const initState = {
  isLoggedIn: false,
};

const Auth = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default Auth;

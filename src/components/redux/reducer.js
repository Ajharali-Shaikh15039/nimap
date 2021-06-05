export default (state, action) => {
    switch (action.type) {
      case "login":
        return {
          login: action.payload
        };
      default:
        return state;
    }
  };
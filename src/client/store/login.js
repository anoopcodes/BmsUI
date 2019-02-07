const requestLogin = 'REQUEST_LOGIN';
const receiveLogin = 'RECEIVE_LOGIN';
const initialState = {
    success: false
};

export const actionCreators = {
    login: startDateIndex => async (dispatch, getState) => {
    debugger;
        dispatch({ type: requestLogin });
    
        const loginResponse = {success: true};
        localStorage.setItem("login","true");
        dispatch({ type: receiveLogin, loginResponse });
      }
  };
  
  export const reducer = (state, action) => {
    state = state || initialState;
  
    if (action.type === login) {
      return { ...state, success: true };
    }
  
    return state;
  };


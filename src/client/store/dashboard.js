const requestDashboard = 'REQUEST_DASHBOARD';
const receiveMeasure = 'RECEIVE_DASHBOARD';
const initialState ={
    hqmf: {},
    measure: {},
    isLoading: false,
    measureId: ''
}

export const actionCreators = {
    requestDashboard: ()=>({type: requestDashboard})
}

export const reducer = (state, action) => {
    state = state || initialState;
    
  if (action.type === requestDashboard) {
    return { ...state, count: 1 };
  }
  return state;
};
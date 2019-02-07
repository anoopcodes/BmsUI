const requestDashboard = 'REQUEST_DASHBOARD';
const recieveDashboard = 'RECEIVE_DASHBOARD';
const initialState = {
    content: [],
    pageable: {},
    numberOfElements: 0,
    number: 0,
    empty: false,
    isLoading: true
}

export const actionCreators = {
    requestDashboard: (pageNo) => async (dispatch, getState) => {
        if (!pageNo && getState().dashboard.content.length) {
            return;
        }
        dispatch({
            type: requestDashboard
        });
        pageNo = pageNo? pageNo-1 : 0;
        const url = "bms/data?pageNo="+pageNo;
        const response = await fetch(url);
        const data = await response.json();
        dispatch({
            type: recieveDashboard,
            ...data
        });
    }
}

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestDashboard) {
        return {
            ...state,
            isLoading: true
        };
    }
    if (action.type === recieveDashboard) {
        return {
            ...state,
            ...action,
            number: action.number+1,
            isLoading: false
        };
    }
    return state;
};
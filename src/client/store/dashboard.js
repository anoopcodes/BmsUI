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
    requestDashboard: () => async (dispatch, getState) => {
        if (getState().dashboard.content.length) {
            return;
        }
        dispatch({
            type: requestDashboard
        });

        const url = "bms/data";
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
            isLoading: false
        };
    }
    return state;
};
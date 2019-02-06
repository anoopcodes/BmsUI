import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import * as Dashboard from "./dashboard";

export default (history) => combineReducers({
    router: connectRouter(history),
    dashboard: Dashboard.reducer
  });
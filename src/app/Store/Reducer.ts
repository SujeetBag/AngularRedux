import { IAppState, AppState } from './IAppState';
import { ADD_EMPLOYEE, GET_EMPLOYEE, FILTER_EMPLOYEE } from '../Employee/actiontype';

const initialState: IAppState = new AppState();
initialState.employee = [];
initialState.mysearch = [];

function getEmployee(state, action): IAppState {
  return Object.assign({}, state, {
    employee: action.employee,
    mysearch: action.employee,
  });
}

function addEmployee(state, action): IAppState {
  state.employee.push(action.employee);
  return Object.assign({}, state);
}

function filterEmployee(state, action): IAppState {
  return Object.assign({}, state, {mysearch: action.employee});
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return addEmployee(state, action);
    case GET_EMPLOYEE:
      return getEmployee(state, action);
      case FILTER_EMPLOYEE:
        return filterEmployee(state, action);
    default:
      return state;
  }
}

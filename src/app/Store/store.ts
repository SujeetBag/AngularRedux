import { createStore} from 'redux';
import { IAppState } from './IAppState';
import { reducer } from './Reducer';

export const store = createStore<IAppState, any, any, any>(reducer);

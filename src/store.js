import { createStore } from 'redux';
import { guessReducer } from './reducers';

export const store = createStore(guessReducer);
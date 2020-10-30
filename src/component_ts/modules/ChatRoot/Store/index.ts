import {combineReducers, createStore }  from 'redux';

import {defaultStoreState} from "./Data/store.data";
import {StoreHandlerMap} from "./store.i";
import System from './system';
import ChatList from "./chatList";
import Message from './message';
import Users from './users'

const reducers: StoreHandlerMap = {
    System,
    ChatList,
    Message,
    Users
}

// @ts-ignore
const store = createStore(combineReducers(reducers), defaultStoreState);

// @ts-ignore
window.$store = store;
export default store;

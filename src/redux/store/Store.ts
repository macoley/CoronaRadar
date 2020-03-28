import { applyMiddleware, compose, createStore, StoreEnhancer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';

import * as actions from '../actions';
import { rootEpic } from '../epics/RootEpic';
import { AppReducer } from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import { persistedBranches } from './PersistedBranches';
import { StoreState } from '../branches/StoreState';

export type Action = ActionType<typeof actions>;

const epicMiddleware = createEpicMiddleware<Action, Action, StoreState>();
const composeVersion: (middleware: StoreEnhancer) => StoreEnhancer<StoreState> = __DEV__
  ? composeWithDevTools
  : compose;
const middleware = applyMiddleware(epicMiddleware);
const enhancers = composeVersion(middleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: persistedBranches as string[],
};

// persistedReducer should has type as Reducer<StoreState & PersistPartial, Action> but something doesn't work
const persistedReducer = (persistReducer(persistConfig, AppReducer) as unknown) as typeof AppReducer;
// stora has to be typed statically
const store: Store<StoreState, Action> = createStore<StoreState, Action, {}, {}>(persistedReducer, enhancers);
const persistor: Persistor = persistStore(store);

export { store, persistor };

epicMiddleware.run(rootEpic);

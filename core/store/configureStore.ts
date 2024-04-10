import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import sagaMonitor from "@redux-saga/simple-saga-monitor";
import createLogger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "dev",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger),
);

sagaMiddleware.run(rootSaga);

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
export const persistor = persistStore(store);

export default store;

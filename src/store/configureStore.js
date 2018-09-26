import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetchLibrariesSaga from '../components/LibrariesList/sagas';
import librariesReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    librariesReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(fetchLibrariesSaga);
  return store;
};

export default configureStore;

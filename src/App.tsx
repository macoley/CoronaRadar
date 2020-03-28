import firebase from 'firebase';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppScreen from './modules/app/screens/AppScreen';
import { persistor, store } from './redux/store/Store';

export default class App extends React.PureComponent<{}, {}> {
  public componentDidMount() {
    if (!firebase.apps.length) {
      this.initFirebase();
    }
  }

  public render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppScreen />
        </PersistGate>
      </Provider>
    );
  }

  private initFirebase() {
    const firebaseConfig = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: '',
    };

    firebase.initializeApp(firebaseConfig);
  }
}

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import { CryptoWrapper } from './components/CryptoComponentWrapper';
import { InputWrapper } from './components/InputWrapper';
import { store } from './redux-saga/root-reducer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CryptoWrapper />
        <InputWrapper />
      </Provider>
    </div>
  );
}

export default App;

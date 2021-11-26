import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CryptoWrapper } from './components/CryptoComponentWrapper';
import { InputWrapper } from './components/InputWrapper';

function App() {
  return (
    <div className="App">
      <CryptoWrapper />
      <InputWrapper />
    </div>
  );
}

export default App;

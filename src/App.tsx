import Routes from './routes/routes'
import store from './store/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

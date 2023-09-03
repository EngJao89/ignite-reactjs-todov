import { AppProvider } from './context';

import { Header } from './components/Header';
import { Main } from './components/Main';

import './global.css';

function App() {
  return (
    <AppProvider>
      <Header />

      <Main />
    </AppProvider>
  );
}

export default App;
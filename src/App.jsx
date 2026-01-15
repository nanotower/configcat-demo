import { useMemo } from 'react';
import EnvironmentTab from './components/EnvironmentTab';
import { generateUsers } from './utils/userContextGenerator';
import './styles/App.css';

function App() {
  const users = useMemo(() => generateUsers(), []);

  return (
    <>
      <div className="sparkles"></div>
      <div className="app">
        <header>
          <h1>ConfigCat Feature Flag Demo</h1>
          <p>Real-time visualization of feature flag targeting and propagation</p>
        </header>
        <main>
          <EnvironmentTab users={users} />
        </main>
      </div>
    </>
  );
}

export default App;

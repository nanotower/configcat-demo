import { useState } from 'react';
import EnvironmentProvider from './EnvironmentProvider';
import Grid from './Grid';
import { CONFIG } from '../constants/config';
import '../styles/EnvironmentTab.css';

const EnvironmentTab = ({ users }) => {
  const [activeTab, setActiveTab] = useState('envA');

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 'envA' ? 'active' : ''}
          onClick={() => setActiveTab('envA')}
        >
          Environment A
        </button>
        <button
          className={activeTab === 'envB' ? 'active' : ''}
          onClick={() => setActiveTab('envB')}
        >
          Environment B
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'envA' && (
          <EnvironmentProvider
            sdkKey={CONFIG.ENV_A_SDK_KEY}
            environmentName="Environment A"
          >
            <Grid users={users} flagKey={CONFIG.FEATURE_FLAG_KEY} />
          </EnvironmentProvider>
        )}

        {activeTab === 'envB' && (
          <EnvironmentProvider
            sdkKey={CONFIG.ENV_B_SDK_KEY}
            environmentName="Environment B"
          >
            <Grid users={users} flagKey={CONFIG.FEATURE_FLAG_KEY} />
          </EnvironmentProvider>
        )}
      </div>
    </div>
  );
};

export default EnvironmentTab;

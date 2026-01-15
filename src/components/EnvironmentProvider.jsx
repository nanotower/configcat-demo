import { ConfigCatProvider } from 'configcat-react';
import { PollingMode } from 'configcat-common';
import { CONFIG } from '../constants/config';
import '../styles/EnvironmentProvider.css';

const EnvironmentProvider = ({ sdkKey, children, environmentName }) => {
  return (
    <div>

      <ConfigCatProvider
        sdkKey={sdkKey}
        pollingMode={PollingMode.AutoPoll}
        options={{
          pollIntervalSeconds: CONFIG.POLL_INTERVAL_SECONDS,
          setupHooks: (hooks) => {
            hooks.on('configChanged', () => {
              console.log(`Config changed in ${environmentName}`);
            });
          },
        }}
      >
        {children}
      </ConfigCatProvider>
    </div>
  );
};

export default EnvironmentProvider;

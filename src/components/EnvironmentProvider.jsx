import { ConfigCatProvider } from 'configcat-react';
import { PollingMode } from 'configcat-common';
import { CONFIG } from '../constants/config';

const EnvironmentProvider = ({ sdkKey, children, environmentName }) => {
  return (
    <div>
      <h2>{environmentName}</h2>
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

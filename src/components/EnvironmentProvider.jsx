import { OpenFeatureProvider } from '@openfeature/react-sdk';
import { OpenFeature } from '@openfeature/web-sdk';
import { createConfigCatWebProvider } from '@openfeature/config-cat-web-provider';
import { PollingMode } from 'configcat-common';
import { CONFIG } from '../constants/config';
import { useEffect, useState } from 'react';
import '../styles/EnvironmentProvider.css';

const EnvironmentProvider = ({ sdkKey, children, environmentName }) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      const provider = createConfigCatWebProvider(sdkKey, PollingMode.AutoPoll, {
        pollIntervalSeconds: CONFIG.POLL_INTERVAL_SECONDS,
        setupHooks: (hooks) => {
          hooks.on('configChanged', () => {
            console.log(`Config changed in ${environmentName}`);
          });
        },
      });

      const ofClient = OpenFeature.getClient(environmentName);
      await OpenFeature.setProviderAndWait(environmentName, provider);
      setClient(ofClient);
    };

    initializeProvider();
  }, [sdkKey, environmentName]);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <OpenFeatureProvider client={client}>
        {children}
      </OpenFeatureProvider>
    </div>
  );
};

export default EnvironmentProvider;

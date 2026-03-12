import { useBooleanFlagValue } from '@openfeature/react-sdk';
import '../styles/GridBox.css';

const GridBox = ({ user, flagKey, defaultValue }) => {
  const flagValue = useBooleanFlagValue(
    flagKey,
    defaultValue,
    {
      targetingKey: user.identifier,
      email: user.email,
      userType: user.custom.userType,
      region: user.custom.region,
      tier: user.custom.tier,
      isTestUser: user.custom.isTestUser
    }
  );

  const getColorClass = () => {
    return flagValue ? 'enabled' : 'disabled';
  };

  return (
    <div className={`grid-box ${getColorClass()}`}>
      <div className="tooltip">
        <p>ID: {user.identifier}</p>
        <p>Email: {user.email}</p>
        <p>User Type: {user.custom.userType}</p>
        <p>Region: {user.custom.region}</p>
        <p>Tier: {user.custom.tier}</p>
        <p>Test User: {user.custom.isTestUser.toString()}</p>
      </div>
    </div>
  );
};

export default GridBox;

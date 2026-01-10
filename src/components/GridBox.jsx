import { useFeatureFlag } from 'configcat-react';
import '../styles/GridBox.css';

const GridBox = ({ user, flagKey, defaultValue }) => {
  const { value: flagValue, loading } = useFeatureFlag(
    flagKey,
    defaultValue,
    user
  );

  const getColorClass = () => {
    if (loading) return 'loading';
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

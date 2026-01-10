import GridBox from './GridBox';
import '../styles/Grid.css';

const Grid = ({ users, flagKey }) => {
  return (
    <div className="grid-container">
      {users.map((user) => (
        <GridBox
          key={user.identifier}
          user={user}
          flagKey={flagKey}
          defaultValue={false}
        />
      ))}
    </div>
  );
};

export default Grid;

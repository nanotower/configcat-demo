import GridBox from './GridBox';
import '../styles/Grid.css';

const Grid = ({ users, flagKey }) => {
  return (
    <div>
      <div className="grid-title">


      </div>
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
    </div>
  );
};

export default Grid;

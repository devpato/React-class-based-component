import React from 'react';
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
const SeasonDisplay = props => {
  const SEASON = getSeason(props.lat, new Date().getMonth());
  const ICON = SEASON === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
      <i className={`${ICON} icon`} />
      <h1>
        {SEASON === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'}
      </h1>
      <i className={`${ICON} icon`} />
    </div>
  );
};

export default SeasonDisplay;

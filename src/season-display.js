import React from 'react';

const SeasonConfig = {
  summer: {
    text: "Let's go to the beach",
    iconName: 'sun'
  },
  winter: {
    text: "Let's go to the skiing",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
const SeasonDisplay = props => {
  const SEASON = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[SEASON];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

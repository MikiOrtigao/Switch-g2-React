import React from 'react';

const list = [
  {
    id: 'US250',
    us: 'Get a list of all sensors in a room.'
  },
  {
    id: 'US253',
    us: 'Add a new sensor to a room from the list of available sensor types.'
  },
];

const UserStoryList = () => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.us} ({item.id})</div>
      </li>
    ))}
  </ul>
);

export default UserStoryList;

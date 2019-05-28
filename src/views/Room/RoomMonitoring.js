import React from 'react';

const list = [
  {
    id: 'US605',
    us: 'Get the current temperature in a room.'
  },
  {
    id: 'US610',
    us: 'Get the maximum temperature in a room in a given day.'
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

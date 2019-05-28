import React from 'react';

const list = [
{
  id: 'US600',
    us: 'Get the current temperature in the house area.'
},
{
  id: 'US620',
    us: 'Get the total rainfall in the house area for a given day.'
},
{
  id: 'US623',
    us: 'Get the average daily rainfall in the house area for a given period (days).'
},
{
  id: 'US630',
    us: 'Get the last coldest day (lower maximum temperature) in the house area in a given period.'
},
{
  id: 'US631',
    us: 'Get the first hottest day (higher maximum temperature) in the house area in a given period.'
},
{
  id: 'US633',
    us: 'Get the day with the highest temperature amplitude in the house area in a given period.'
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

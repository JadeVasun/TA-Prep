import React from 'react';
import ListEntry from './ListEntry';

const List = ({items}) => {
  // console.log(items);
  return (
  <ul>
    {
      items.map(item => 
        <ListEntry item = {item} />
      )}
  </ul>
  )
};

export default List;
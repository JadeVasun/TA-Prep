import React from 'react';
import ListEntry from './ListEntry';

const List = ({style, items, completed, finished}) => {
  console.log('THIS IS', completed);
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
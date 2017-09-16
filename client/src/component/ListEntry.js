import React from 'react';

const ListEntry = ({item}) => {
  console.log(item);
  return (
 <div>
   {item.tasks}
 </div>
  )
};

export default ListEntry;
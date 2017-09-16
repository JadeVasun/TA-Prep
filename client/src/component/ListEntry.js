import React from 'react';

const ListEntry = ({item}) => {
  // console.log(item);
  return (
 <div>
   {item.tasks} 
   <span> X </span>
 </div> 
  )
};

export default ListEntry;
import React from 'react';

function RentalItem({ hot }) {
  return (
	<div>
    
      <div>{hot.name} - ${hot.price} per night - Rating: {hot.rating}</div>
    
	</div>
  );
}

export default RentalItem;

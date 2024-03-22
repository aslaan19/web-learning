import React from 'react';
import RentalItem from "./RentalItem";

function Rental({ items }) { // Changed parameter name to items for clarity
  return (
	<>
     {/* Encapsulate list items within <ul> for proper HTML structure */}
      {items.map((property) => (
        <RentalItem key={property.id} hot={property} /> // Added key prop for list rendering
      ))}
    </>
  );
}

export default Rental;

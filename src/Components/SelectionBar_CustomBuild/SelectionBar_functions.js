
export const calculate_horizontal_position = (difference, actual_position, max_points, type) => {
  let minimum =  difference
  
  let coords = 0;
  let count = 1;
  


  for( let i = 0; i <= max_points; i++) {
      let pozitive_number = Math.abs(actual_position - (i * difference));
      
      if (pozitive_number < minimum ) {
          minimum = actual_position - (i * difference);
          coords = i === 0 ?  i * difference + 5 : i * difference - 15;
          count = i+1;
      }
  }
  let new_coords = (100*coords) / (max_points*difference);
  return {
    coords : new_coords,
    count : count 
  }
}
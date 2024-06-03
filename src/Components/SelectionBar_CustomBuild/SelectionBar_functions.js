
export const calculate_horizontal_position = (difference, actual_position, max_points) => {
    let minimum =  difference
    
    let coords = 0;
    let count = 1;
    


    for( let i = 0; i < max_points; i++) {
        let pozitive_number = Math.abs(actual_position - (i * difference));
        
        if (pozitive_number < minimum ) {
            minimum = actual_position - (i * difference);
            coords = i * difference;
            count = i+1;
        }
    }
    let new_coords = (100*coords) / (max_points*difference);
    return {
      coords : new_coords,
      count : count
    }
  }





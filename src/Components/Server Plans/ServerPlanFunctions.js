import { act } from "react";

export const scroll_page_up = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }); 
}



export const scroll_page_down = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
}



export const calculate_horizontal_position = (difference, actual_position, type) => {
  let minimum =  difference
  
  let coords = 0;
  let count = 1;
  
  for( let i = 0; i <= 7; i++) {
      let pozitive_number = Math.abs(actual_position - (i * difference));
      
      if (pozitive_number < minimum ) {
          minimum = actual_position - (i * difference);
          coords = i * difference;
          count = i+1;
      }
  }
  console.log(difference,coords)
  console.log("Actual pos:", actual_position)
  return {
    coords : coords,
    count : count
  }
}
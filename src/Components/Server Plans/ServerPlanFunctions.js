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



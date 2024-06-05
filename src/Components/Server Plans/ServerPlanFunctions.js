import { act } from "react";

export const scroll_page_up = (id) => {
  const html_dropdown_element = document.getElementById(id);
  html_dropdown_element.scrollIntoView({behavior : 'smooth'})
}



export const scroll_page_down = (id) => {
  const html_dropdown_element = document.getElementById(id);
  html_dropdown_element.scrollIntoView({behavior : 'smooth'})
}



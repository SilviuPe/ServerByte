import { React } from "react";

export const scroll_page_up = (id) => {
  const html_dropdown_element = document.getElementById(id);
  html_dropdown_element.scrollIntoView({behavior : 'smooth'})
}



export const scroll_page_down = (id) => {
  const html_dropdown_element = document.getElementById(id);
  html_dropdown_element.scrollIntoView({behavior : 'smooth'})
}




export const Price_functions = () => {
    const update_price = (data_prices, configuration) => {
          let price = 0;

          price += data_prices.vCPU[configuration.cpu];
          price += data_prices.RAM[configuration.ram];
          price += data_prices.Storage.Memory[configuration.storage.memory];
          
          if (configuration.network.units === 'Mbps') 
            price += data_prices.Bandwidth.Mbps;
          else 
            price += data_prices.Bandwidth.Gbps[configuration.network.memory];

          return price;
          console.log(price)
      }


    return {
      update_price
    }
}
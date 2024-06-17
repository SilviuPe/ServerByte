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

export const Plans_functions = () => {
    
  
  
  const select_plan = (callback, plan_type) => {
      if (plan_type === "bronze")  
        callback({
          bronze: true,
          silver: false,
          gold: false
        })
      if (plan_type === "silver")  
        callback({
          bronze: false,
          silver: true,
          gold: false
        })
      if (plan_type === "gold")  
        callback({
          bronze: false,
          silver: false,
          gold: true
        })
    }


    const calculate_min_height_of_box = (selectedPlan,callback_box_refference) => {
      let plan;
      if (selectedPlan.bronze === true) plan = 'bronze_plan'; 
      if (selectedPlan.silver === true) plan = 'silver_plan'; 
      if (selectedPlan.gold === true) plan = 'gold_plan';

      let plan_html_component = document.getElementById(plan).getBoundingClientRect();
      callback_box_refference(plan_html_component.height);
    }
    return {
      select_plan,
      calculate_min_height_of_box
    }

}
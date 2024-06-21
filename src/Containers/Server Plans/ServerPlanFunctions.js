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
          console.log(configuration);
          price += data_prices.vCPU[configuration.cpu];
          price += data_prices.RAM[configuration.ram];
          price += data_prices.Storage.Memory[configuration.storage.memory];
          
          /* if (configuration.network.units === 'Mbps') 
            price += data_prices.Bandwidth.Mbps;
          else 
            price += data_prices.Bandwidth.Gbps[configuration.network.memory];
          */
          return price;
          console.log(price)
    }


    return {
      update_price
    }
}

export const Plans_functions = () => {
    
  
  
  const select_plan = (callback, plan_type) => {
      if (plan_type === "entry")  
        callback({
          entry: true,
          standard: false,
          premium: false,
          platinum: false,
          diamond: false
        })
      if (plan_type === "standard")  
        callback({
          entry: false,
          standard: true,
          premium: false,
          platinum: false,
          diamond: false
        })
      if (plan_type === "premium")  
        callback({
          entry: false,
          standard: false,
          premium: true,
          platinum: false,
          diamond: false
        })
      if (plan_type === "platinum")  
        callback({
          entry: false,
          standard: false,
          premium: false,
          platinum: true,
          diamond: false
        })
      if (plan_type === "diamond")  
        callback({
          entry: false,
          standard: false,
          premium: false,
          platinum: false,
          diamond: true
        })
    }


    const calculate_min_height_of_box = (selectedPlan,callback_box_refference) => {
      let plan;
      if (selectedPlan.entry === true) plan = 'entry_plan';
      if (selectedPlan.standard === true) plan = 'standard_plan'; 
      if (selectedPlan.premium === true) plan = 'premium_plan';
      if (selectedPlan.platinum === true) plan = 'platinum_plan'; 
      if (selectedPlan.diamond === true) plan = 'diamond_plan';

      let plan_html_component = document.getElementById(plan).getBoundingClientRect();
      callback_box_refference(plan_html_component.height);
    }
    return {
      select_plan,
      calculate_min_height_of_box
    }

}
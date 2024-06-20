const Storage_functions = (barRefference) => {


    const enable_storage_hardware = (enable_callback, hardware_name_callback, type) => {
        if (type === 'hdd') {
            hardware_name_callback("HDD")
            enable_callback({
                hdd: 100,
                sata: 50,
                ssd: 50
            })
        }
        if (type === 'sata') {
            hardware_name_callback("SATA-SSD")
            enable_callback({
                hdd: 50,
                sata: 100,
                ssd: 50
            })
        }
        if (type === 'ssd') {
            hardware_name_callback("NVMe-SSD")
            enable_callback({
                hdd: 50,
                sata: 50,
                ssd: 100
            })
        }
    }
    

    const handle_mouse_down = (mouse_down_callback, point_position_callback, event) => {
        mouse_down_callback(true);
        let bar = barRefference.current;
        let barRect = bar.getBoundingClientRect();
        const mouse_pos = (event.clientX - barRect.left) * 100 / barRect.width;
        point_position_callback(mouse_pos);
    }


    const handle_mouse_up = (component_count_callback, point_position_callback, mouse_status_callback,event) => {
        let bar = barRefference.current;
        
        let barRect = bar.getBoundingClientRect();
        const difference_between_CPU = barRect.width / 6;
        const position = event.clientX - barRect.left;
        let pos = calculate_horizontal_position(difference_between_CPU, position,5)
        component_count_callback(pos.count)
        point_position_callback(pos.coords)
        mouse_status_callback(false);
    }


    const handle_mouse_movement = (point_position_callback,event) => {
        let bar = barRefference.current;
        let barRect = bar.getBoundingClientRect();
        const mouse_pos = (event.clientX - barRect.left) * 100 / barRect.width;
        point_position_callback(mouse_pos);
    }

    return {
        enable_storage_hardware,
        handle_mouse_down,
        handle_mouse_up,
        handle_mouse_movement
    }
}




export const calculate_horizontal_position = (difference, actual_position, max_points) => {
    let minimum =  difference
    
    let coords = 0;
    let count = 1;
    


    for( let i = 0; i <= max_points; i++) {
        let pozitive_number = Math.abs(actual_position - (i * difference));
        
        if (pozitive_number < minimum ) {
            minimum = actual_position - (i * difference);
            coords = i === 0 ? i * difference : i * difference - 10;
            count = i+1;
        }
    }
    let new_coords = (100*coords) / (max_points*difference);
    return {
      coords : new_coords,
      count : count
    }
  }

  export default Storage_functions;
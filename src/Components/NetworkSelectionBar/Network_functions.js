export const calculate_horizontal_position_network = (difference, actual_position, max_points) => {
    
    let minimum = difference;
    let coords = 0;
    let count = 0;

    for(let i = 0; i <= max_points; i++) {
        let pozitive_number = Math.abs(actual_position - (i * difference));
    
        if (pozitive_number < minimum ) {
            minimum = actual_position - (i * difference);
            coords = i === max_points ? i * difference - 15 : i * difference;
            count = i+1;
        } 
    }

    let new_coords = (100*coords) / (max_points*difference)
    console.log(new_coords);
    return {
        coords : new_coords,
        count : count 
    }
}




const Network_Functions = (barRefference) => {


    const HandleMouseButtonMovement = (point_position_callback, event) => {
        const barRect = barRefference.current.getBoundingClientRect();
        const mouse_pos = event.clientX - barRect.left;
        const position = (100*mouse_pos) / barRect.width;
        point_position_callback(position);
    }


    function HandleMouseButtonUp(mouse_down_callback, component_count_units, point_position_callback, event) {
        const points = 4;
        mouse_down_callback(false);
        const barRect = barRefference.current.getBoundingClientRect();
        const difference_between_points = barRect.width / points;
        const mouse_position = event.clientX - barRect.left;
        let pos = calculate_horizontal_position_network(difference_between_points, mouse_position, points);
        
        if (pos.sufix === 'Mbps') component_count_units(pos.count * 100);

        else component_count_units(pos.count);

        point_position_callback(pos.coords);

    }


    return {
        HandleMouseButtonUp,
        HandleMouseButtonMovement
    }
}

export default Network_Functions;
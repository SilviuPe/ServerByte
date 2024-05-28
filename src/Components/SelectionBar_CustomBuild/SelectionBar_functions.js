
export const calculate_horizontal_position = (difference, actual_position, max_points) => {
    let minimum =  difference
    
    let coords = 0;
    let count = 1;
    


    for( let i = 0; i <= max_points; i++) {
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

export const enable_HDD = () => {
    return {
        hdd: 100,
        sata: 50,
        ssd: 50
    }
}



export const enable_SATA = () => {
    return {
        hdd: 50,
        sata: 100,
        ssd: 50
    }
}

export const enable_SSD = () => {
    return {
        hdd: 50,
        sata: 50,
        ssd: 100
    }
}
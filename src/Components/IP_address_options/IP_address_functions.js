const IP_functions = () => {


    const enable_ip = (type,callback) => {

        if (type === 'v4')
            callback((prevConfig)=>({
                    ipv4: 100,
                    ipv6: 50
                })
            )
        if (type === 'v6')
            callback((prevConfig)=>({
                    ipv6: 100,
                    ipv4: 50
                })
            )
    
    }


    return {
        enable_ip
    }
}

export default IP_functions;
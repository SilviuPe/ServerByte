const os_functions = () => {
    

    const enable_specific_os = (current_os_callback, enable_os_callback, os_type) => {
        if (os_type === "windows") {
            current_os_callback("Windows 10")
            enable_os_callback({
                windows: 100,
                ubuntu: 50,
                centos: 50,
                custom: 50
            })
        }
        if (os_type === "ubuntu") {
            current_os_callback("Ubuntu 22.04")
            enable_os_callback({
                windows: 50,
                ubuntu: 100,
                centos: 50,
                custom: 50
            })
        } 
        if (os_type === "centos") {
            current_os_callback("CentOS")
            enable_os_callback({
                windows: 50,
                ubuntu: 50,
                centos: 100,
                custom: 50
            })
        }
        if (os_type === "custom") {
            current_os_callback("Custom OS")
            enable_os_callback({
                windows: 50,
                ubuntu: 50,
                centos: 50,
                custom: 100
            })
        } 
    }

    return {
        enable_specific_os
    }
}


export default os_functions;
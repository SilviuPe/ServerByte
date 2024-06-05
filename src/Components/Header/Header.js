const Header_Functions = (id) => {

    const scroll_to_this_component = () => {
        const html_element = document.getElementById(id);
        html_element.scrollIntoView({behavior : 'smooth'})
    }

    const scroll_to_specific_component = (component_id) => {
        const html_element = document.getElementById(component_id);
        html_element.scrollIntoView({behavior : 'smooth'})
    }

    return {
        scroll_to_this_component,
    }
}


export default Header_Functions;
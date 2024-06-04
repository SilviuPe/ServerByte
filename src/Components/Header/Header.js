const Header_Functions = (id) => {

    const scroll_to_this_component = () => {
        const html_element = document.getElementById(id);
        html_element.scrollIntoView({behavior : 'smooth'})
    }

    return {
        scroll_to_this_component,
    }
}


export default Header_Functions;
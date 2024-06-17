const Header_Functions = (id) => {

    const scroll_to_this_component = () => {
        const html_element = document.getElementById(id);
        html_element.scrollIntoView({behavior : 'smooth'})
    }

    const go_to_PLAN_page = () => {
        window.location.href = '/plans'
    }


    const go_to_FAQ_page = () => {
        window.location.href = '/faq_page';
    }

    return {
        scroll_to_this_component,
        go_to_PLAN_page,
        go_to_FAQ_page
    }
}


export default Header_Functions;
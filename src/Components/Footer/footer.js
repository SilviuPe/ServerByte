export const footer_functions = () => {
    const go_to_FAQ_page = () => {
        window.location.href = '/faq_page';
    }
    
    const go_to_PLANS = () => {
        window.location.href = '/plans';
    }


    return {
        go_to_FAQ_page,
        go_to_PLANS
    }
}
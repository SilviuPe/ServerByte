export const Login_functions = () => {
    const label_field_position = (input_name) => {
        let element = document.getElementById(input_name).getBoundingClientRect();
        console.log(element)
    }

    return {
        label_field_position
    }
}
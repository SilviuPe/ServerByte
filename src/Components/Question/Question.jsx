import {useState} from 'react';
const DropDownAnswer = ({answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    

    return (
        <div 
            className= {`dropdown_answer ml-x bg-FAQ_question_bg_color p-6 rounded transition-all duration-600 ${isOpen ? 'opacity-0 h-0' : 'opacity-100 h-full'}`}>
            <p className='text-sm font-medium'>{answer}</p>
        </div>
    )
}


const Question = ({question,answer}) => {
    
    const [opened, setOpened] = useState(false);
    
    const handle_mouse_down = () => {
        setOpened(!opened);
    }

    return (
        <div className='w-pc8 py-2'>
            <div onClick={handle_mouse_down} className='Question bg-FAQ_question_bg_color px-6 rounded rounded-xl mb-4 cursor-pointer'>
                <h1 className="text-white_transparent text-base font-medium">
                    { 
                        opened 
                        ? <span className='font-bold'> - </span> 
                        : <span className='font-bold'> + </span>
                    }
                    {question}</h1>
            </div>
            <div className={`transition-all duration-700 ${opened ? ' h-full opacity-1' : 'h-0 opacity-0 overflow-hidden'}`}>
                <DropDownAnswer answer = {answer}/>
            </div>
        </div>
    )
}


export default Question;
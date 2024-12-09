import React, { useReducer } from 'react';
import './faqs.css';
import Banner from '../../components/banner/Banner';
import LatestNews from '../../components/latestnews/latestnews';

const Faqs = _ => {
    const qReducer = (state,action)=>{
        switch (action.type) {
            case 'TOGGLE_QUESTION':
                return {...state, [action.id]: !state[action.id]};
            default:
                return state;
        }
    }
    const initial = {
        question1:true,
        question8:true,
    }
    const [state, dispatch] = useReducer(qReducer, initial);

const handleQuestion = id =>{
    dispatch({type : 'TOGGLE_QUESTION' , id})
}
    return ( 
    <>
    <Banner parent ="Home" child="Faqs"/>
    <div className="faqs">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className='questions'>
                        <div>
                    <div onClick={() => handleQuestion('question1')}
                    className={`question ${state.question1 ? 'change' : ''}`}>
                    <button>
                    How Doctor Can Ease Your Pain?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question1 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question1 ? 'visible' : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question2')}
                    className={`question ${state.question2 ? 'change' : ''}`}>
                    <button>
                    How do I withdraw from a subject?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question2 ? 'open' : '' }`}></i>
                    </div> 
                <p className={`answer-text ${state.question2 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question3')}
                    className={`question ${state.question3 ? 'change' : ''}`}>
                    <button>
                    Understand Doctor Before You Regret?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question3 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question3 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question4')}
                    className={`question ${state.question4 ? 'change' : ''}`}>
                    <button>
                    What types of systems do you support?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question4 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question4 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question5')}
                    className={`question ${state.question5 ? 'change' : ''}`}>
                    <button>
                    We Teach You How To Feel Better?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question5 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question5 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question6')}
                    className={`question ${state.question6 ? 'change' : ''}`}>
                    <button>
                    How Can I Contact You?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question6 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question6 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className='questions'>
                        <div>
                    <div onClick={() => handleQuestion('question7')}
                    className={`question ${state.question7 ? 'change' : ''}`}>
                    <button>
                    How do I withdraw from a subject?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question7 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question7 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question8')}
                    className={`question ${state.question8 ? 'change' : '' }`}>
                    <button>
                    How Can I Contact You?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question8 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question8 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question9')}
                    className={`question ${state.question9 ? 'change' : ''}`}>
                    <button>
                    How do I withdraw from a subject?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question9 ? 'open' : ''
                      }`} ></i>
                    </div>
                <p className={`answer-text ${state.question9 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question10')}
                    className={`question ${state.question10 ? 'change' : ''}`}>
                    <button>
                    Understand Doctor Before You Regret?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question10 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question10 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question11')}
                    className={`question ${state.question11 ? 'change' : ''}`}>
                    <button>
                    How Doctor Can Ease Your Pain?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question11 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question11 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                        <div>
                    <div onClick={() => handleQuestion('question12')}
                    className={`question ${state.question12 ? 'change' : ''}`}>
                    <button>
                    How Doctor Can Ease Your Pain?
                    </button>
                    <i className={`fa-solid fa-chevron-down ${
                        state.question12 ? 'open' : '' }`}></i>
                    </div>
                <p className={`answer-text ${state.question12 ? 'visible' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam totam quia inventore pariatur doloribus sunt fugiat architecto, non repellat, necessitatibus odio labore? Sunt officia quibusdam, magnam in incidunt neque?
                </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <LatestNews/>
    </div>
    </>
 );
}
 
export default Faqs;

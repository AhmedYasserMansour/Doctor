import React, { useReducer } from 'react';
import Banner from '../../components/banner/Banner';
import '../../Services/service-Detail/service-Detail.css';
import Pic from '../../assets/pic.jpg'
const ServiceDetail = _ => {
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
    }
    const [state, dispatch] = useReducer(qReducer, initial);

const handleQuestion = id =>{
    dispatch({type : 'TOGGLE_QUESTION' , id})
}
    return (
    <div className="service-detail">
    <Banner parent={"Home"} child={"Service Details"}/>
    <div className="container">
       <div className='sick'>
       <img src={Pic} alt="" />
        <h2>Why Medical Had Been So Popular Till</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
       </div>
        <ul className='p-0'>
            <li>
            <div className="check">
            <span className='icone'>
            <i className="fa-solid fa-check"></i>
            </span>
            <h6>Then along come two they</h6>
            </div>
            <div className="rate">
                <h5>Advanced Technology</h5>
                <div className="range">
                    <span>95%</span>
                </div>
            </div>
            </li>
            <li>
            <div className="check">
            <span className='icone'>
            <i className="fa-solid fa-check"></i>
            </span>
            <h6>Then along come two they</h6>
            </div>
            </li>
            <li>
            <div className="check">
            <span className='icone'>
            <i className="fa-solid fa-check"></i>
            </span>
            <h6>Then along come two they</h6>
            </div>
            <div className="rate">
                <h5>Certified Engineers</h5>
                <div className="range">
                    <span>79%</span>
                </div>
            </div>
            </li>
            <li>
            <div className="check">
            <span className='icone'>
            <i className="fa-solid fa-check"></i>
            </span>
            <h6>Then along come two they</h6>
            </div>
            </li>
            <li>
            <div className="check">
            <span className='icone'>
            <i className="fa-solid fa-check"></i>
            </span>
            <h6>Then along come two they</h6>
            </div>
            <div className="rate">
                <h5>6 years Experience</h5>
                <div className="range dd">
                    <span>75%</span>
                </div>
            </div>
            </li>
        </ul>
    </div>
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
    );
}
 
export default ServiceDetail;
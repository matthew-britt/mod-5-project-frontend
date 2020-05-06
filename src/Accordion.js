import React, { useState, useRef } from 'react';
import "./accordion.css";
import Chevron from './Chevron';
import Arrow from './Arrow';
import { Link } from 'react-router-dom'

// import Accordion from 'react-bootstrap/Accordion';

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    };


    return (
        <div>

            <div className="accordion__section">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                    <div className="post">
                    </div>
                    <p className="accordion__title" > {props.header}  </p>
                    <Chevron className={`${setRotate}`} width={20} fill={"#FFFFFF"} />
                </button>
                <div
                    ref={content}
                    style={{ maxHeight: `${setHeight}` }}
                    className="accordion__content"
                    >
                    <p className="author">Author: {props.username}</p>
                    <div
                        className="accordion__text" cols="30">
                        {/* // dangerouslySetInnerHTML={{ __html: props.story }} */}
                        <p> {props.story}</p>
                    </div>
                        <Arrow/>
                        <button onClick={() => props.deletePost(props.id)} >Delete </button>
                        {/* <Link to="/new" header={props.header} >Edit</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
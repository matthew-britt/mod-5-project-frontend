import React, { useState, useRef } from 'react';
import "./accordion.css";
import Chevron from './Chevron';
// import Accordion from 'react-bootstrap/Accordion';

function Accordion(props) {
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
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title"> {props.posts.map(post => post.header)} </p>
                <Chevron className={`${setRotate}`} width={20} fill={"#FFFFFF"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <p className="author">Author: {props.posts.map(post => post.user)}</p>
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: props.posts.map(post => post.story) }}
                />
            </div>
        </div>
    );
};

export default Accordion;
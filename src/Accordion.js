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
        <div>

        {console.log(props)}
            <div className="accordion__section">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                    <div className="post">
                        <div className="votes">
                            <div className="upvote" >
                                <span role="img" aria-label="up vote">
                                    ⬆️
                                </span>
                            </div>
                            <div className="votecount"></div>
                            <div className="downvote" >
                                <span role="img" aria-label="down vote">
                                    ⬇️
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className="accordion__title" > {props.header} </p>
                    <Chevron className={`${setRotate}`} width={20} fill={"#FFFFFF"} />
                </button>
                <div
                    ref={content}
                    style={{ maxHeight: `${setHeight}` }}
                    className="accordion__content"
                >
                    <p className="author">Author: {props.user}</p>
                    <div
                        className="accordion__text"
                        dangerouslySetInnerHTML={{ __html: props.story }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Accordion;
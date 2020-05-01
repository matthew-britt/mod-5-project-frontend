import React, { useState, useRef } from 'react';
import "./accordion.css";


const Arrow = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="votes">
                            <div className="upvote" onClick={() => setCount(count + 1)}>
                                <span role="img" aria-label="up vote">
                                    ⬆️
                                </span>
                            </div>
                            <div className="votecount"></div>
                            <div className="downvote" onClick={() => setCount(count - 1)}>
                                <span role="img" aria-label="down vote">
                                    ⬇️
                                </span>
                            </div>
                            <div className="downvote" >
                                <span role="img" aria-label="down vote">
                                    {count}
                                </span>
                            </div>
                        </div>
    );

};

export default Arrow;
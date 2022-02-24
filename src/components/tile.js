import React from "react";


function Tile(props) {
    return (
        <React.Fragment>
            <div className="tile is-parent">
                <article className={`tile is-child notification ${props.color}`}>
                    <h1 className="title">
                        {props.title}
                    </h1>
                    <h2 className="subtitle">
                        {props.subtitle}
                    </h2>
                    <p className="content">
                        {props.content}
                    </p>
                    {props.children}
                </article>
            </div>
        </React.Fragment>
    )
}

export default Tile;
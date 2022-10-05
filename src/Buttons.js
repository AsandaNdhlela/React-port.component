import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div>
            <div className="d-flex justify-content-center ">

                <button
                    className="btn btn-outline-secondary p-2 m-3"
                    onClick={() => setItem(Data)}
                >
                    All Projects
                </button>

                <button
                    className="btn btn-outline-secondary p-2 m-3"
                    onClick={() => filterItem("HTML,CSS,JS")}
                >
                    HTML,CSS,JS
                </button>
                <button
                    className="btn btn-outline-secondary p-2 m-3"
                    onClick={() => filterItem("React JS")}
                >
                    React JS
                </button>
                <button
                    className="btn btn-outline-secondary p-2 m-3"
                    onClick={() => filterItem("MERN")}
                >
                    MERN
                </button>
                <button
                    className="btn btn-outline-secondary p-2 m-3"
                    onClick={() => filterItem("Fullstack")}
                >
                    Fullstack
                </button>
            </div>
        </div>
    );
};

export default Buttons;
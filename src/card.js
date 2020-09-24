import React from "react";

const Card = (props) => {
    const today = new Date();

    function convert(mydate) {
        let mynewDate = new Date(mydate);
        const diffTime = Math.abs(today - mynewDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays);
        return diffDays;
    }

    const old = convert(props.date) > 60 && "old card";
    const newbie = convert(props.date) <= 14 && "newbie card";
    const recent =
        convert(props.date) < 60 && convert(props.date) > 14 && "recent card";

    return (
        <div className={`list-group-item ${old} ${recent} ${newbie} `}>
            <h1>{props.app}</h1>
            <h2>{props.date}</h2>
            <h2>{props.version}</h2>
            <h2>{props.tenant}</h2>
            <h2>{props.environment}</h2>
        </div>
    );
};

export default Card;

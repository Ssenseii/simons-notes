import React from "react";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];




const Post = ({ title, date, tag, children }) => {
    
    
    let day, month, year, date_array;

    date_array = date.split("-");
    
    day = date_array[0];
    month = months[date_array[1] - 1];
    year = `20${date_array[2]}`;

    return (
        <div id="post">
            <h1 className="post__title">{title}</h1>
            <div className="post__data">
                <p>DATE: {day + " " + month + " " + year}</p>
                <p>TAG : {tag === 'p'? "Personal" : (tag === 't'? 'Technical' : 'Design')}</p>
            </div>
            <article className="post__article">{children}</article>
        </div>
    );
};

export default Post;

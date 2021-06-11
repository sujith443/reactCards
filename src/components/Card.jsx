import React from "react";
import Avatar from "./avatar";
import Details from "./details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.key}</p>
        <h2 className="name">{props.name}</h2>
        <Details tel={props.smart} />
        <Avatar img={props.img} />
      </div>

      <div className="bottom">
        <Details tel={props.tel} />
        <Details tel={props.email} />
      </div>
    </div>
  );
}

export default Card;

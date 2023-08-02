import React from "react";
import Counter from "./Counter";
import AppCounter from "../AppCounter";

export default function Avatar({ image, name, lunching, isNew }) {
  return (
    <div className="avatarwrap">
      <img className="photo" src={image} alt="스파이더맨1" />
      <p className="name">{name}</p>
      <p className="lunching">{lunching}</p>
      {isNew && <div className="isNew">NEW</div>}
    </div>
  );
}

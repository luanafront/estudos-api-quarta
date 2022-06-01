import React from "react";
import "./index.css"
import Status from "../status";

const Card = ({data, index}) => {
    let nameList = data.name.split(" ")
    return (
        <div key={index} className="card">
            <p className="card__text--name">{nameList[0]} {nameList[1]}</p>
            <img className="card__image" alt="" src={data.image}/>
            <div className="character card__character">
                <p className="character__text--status" >Status: {data.status} <Status condition={data.status === "Alive"}/></p>
                <p className="character__text--specie" >Specie: {data.species}</p>
                <p className="character__text--gender" >Gender: {data.gender}</p>
            </div>
           
        </div>
    )
}

export default Card
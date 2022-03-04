import React from "react";

function ProjectCard({data}) {
    return (
        <div className="card">
            <div className="card-row-1">
                <h2 className="id-holder">ID : <span className="id">{data.id}</span></h2>
                <p className="pending">{data.status}</p>
            </div>
            <div className="card-row-2">
                <div className="country">{data.country}</div>
                <div className="address">
                    <p className="address-1">{data.address}</p>
                    <p className="address-2"><i className="fas fa-map-marker-alt address-icon"></i>{data.longAddress}</p>
                </div>
            </div>
            <div className="card-row-3">
                <div className="profile">
                    <div className="profile-pic"></div>
                    <h3 className="profile-name">{data.name}</h3>
                </div>
                <div className="buttons">
                    <div className="call"><i className="fas fa-phone-alt"></i></div>
                    <div className="message"><i className="fas fa-envelope"></i></div>
                </div>
            </div>
            <div className="div-card-row-4">
                <div className="date">
                    <p>Added on</p>
                    <p className="date-time">{data.addedTime}</p>
                </div>
                <div className="date">
                    <p>Start time</p>
                    <p className="date-time">{data.startTime}</p>
                </div>
                <div className="date">
                    <p>End time</p>
                    <p className="date-time">{data.endTime}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
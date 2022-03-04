import React from 'react'

function ProjectCardRow({data}) {
    return (
        <div className="cardRow" id={data.id}>
            <h2 className="idRow">{data.id}</h2>
            <div className="profileRow">
                <div className="profile-picRow"></div>
                <h3 className="profile-nameRow">{data.name}</h3>
            </div>
            <div className="card-column-countryRow">
                <div className="countryRow">{data.country}</div>
                <div className="addressRow">
                    <p className="address-1Row">{data.address}</p>
                    <p className="address-2Row"><i className="fas fa-map-marker-alt address-icon"></i>{data.longAddress}</p>
                </div>
            </div>
            <p className="date-timeRow">{data.addedTime}</p>
            <p className="pendingRow">{data.status}</p>
            <p className="date-timeRow">{data.startTime}</p>
            <p className="date-timeRow">{data.endTime}</p>
        </div>
    )
}

export default ProjectCardRow
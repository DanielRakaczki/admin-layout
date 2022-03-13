import React, {useEffect} from 'react'

function ProjectCardRow({data, ...props}) {

  useEffect(()=>{
    console.log(props.index)
    let delay = props.index * 100
    document.getElementById(props.index).style.animationDelay = `${delay}ms`;

    return () => {}
  })

  // data.id replaced with index because each dummy data has the same id
  return (
    <div className="card-row" id={props.index} {...props}>
      <h2 className="id-row">{data.id}</h2>
      <div className="profile-row">
        <div className="profile-pic-row"></div>
        <h3 className="profile-name-row">{data.name}</h3>
      </div>
      <div className="card-column-country-row">
        <div className="country-row">{data.country}</div>
        <div className="address-row">
          <p className="address-1-row">{data.address}</p>
          <p className="address-2-row"><i className="fas fa-map-marker-alt address-icon"></i>{data.longAddress}</p>
        </div>
      </div>
      <p className="date-time-row added">{data.addedTime}</p>
      <p className="pending-row">{data.status}</p>
      <p className="date-time-row start">{data.startTime}</p>
      <p className="date-time-row end">{data.endTime}</p>
    </div>
  )
}

export default ProjectCardRow
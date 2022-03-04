import React from 'react'

function ProjectCardRow({data}) {

    return (
        <div className="section-order">
            <a className="order" href="#">ID NO.<i className="fas fa-sort-down"></i></a>
            <a className="order" href="#">CLIENT<i className="fas fa-sort-down"></i></a>
            <a className="order" href="#">WAREHOUSE<i className="fas fa-sort-down"></i></a>
            <a className="order" href="#">ADDED ON<i className="fas fa-sort-down"></i></a>
            <a className="order" href="#">STATUS<i className="fas fa-sort-down"></i></a>
            <a className="order" href="#">START DATE<i className="fas fa-sort-down"></i></a>
            <a className="order" href="#">END DATE<i className="fas fa-sort-down"></i></a>
        </div>
    )
}

export default ProjectCardRow
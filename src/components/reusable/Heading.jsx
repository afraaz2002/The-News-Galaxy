import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Heading(props) {
    return (
        <div className='flex'>
            <h1 className='sub-heading'>{props.heading}</h1>
            <Link to={"/"+props.newsType} state={{ name: props.heading }}><p className='all' style={{display:props.displayAll}}>See All &nbsp; <FontAwesomeIcon icon={faChevronRight} /></p></Link>
        </div>
    )
}

export default Heading
import React from 'react'

function Card1(props) {

  const str = props.date;

  const months = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let year = str.substring(0, 4);
  let month = str.substring(5, 7);
  let day = str.substring(8, 10);

  if (day[0] === "0") {
    day = day[1]
  }

  const date = months[month - 1] + " " + day + "," + year;

  return (
    <div className='card'>
      <img src={props.img} alt="Error while loading image" className='card-image' />
      <a href={props.url}>{props.title}</a>
      <p>{props.description}</p>
      <p>{date}</p>
    </div>
  )
}

export default Card1
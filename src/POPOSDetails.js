// src/POPOSDetails.js

import React from 'react'

import data from './sfpopos-data(1).json'

function POPOSDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div>

        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />



        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      

    </div>
  )
}

export default POPOSDetails

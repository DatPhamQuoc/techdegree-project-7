import React from 'react'
import Image from './Image.js'

const ImagesList = (props) => {

  const images = props.data
  let image = images.map(image =>
      <Image key={image.id} url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
  )
  return(
    <div className="photo-container">
    <h2>Images of {props.title}</h2>
      <ul>
        {image}
      </ul>
    </div>
  )
}

export default ImagesList

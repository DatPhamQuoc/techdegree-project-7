import React from 'react'
import Image from './Image.js'
import NotFound from './NotFound.js'

const ImagesList = (props) => {
  const images = props.data
  let image;

  //Conditional test
  if (images.length != 0) {
    image = images.map(image =>
        <Image key={image.id} url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
    )
  }else {
    image= <NotFound />
  }

  return(
    <div className="photo-container">
    {(props.keyword==="") ?
      <h2></h2>:
      <h2>Images of {props.keyword}</h2>
    }
      <ul>
        {image}
      </ul>
    </div>
  )
}

export default ImagesList

import React from 'react';

const Card = ({
  name,
  url,
  tag,
  imageUrl,
}) => {
  return (
    <div className="Card container">
      <img className="card__image" src={ imageUrl } />
      <div className="card_info">
        Name: { name } <br/>
        URL: { url } <br/>
        Tag: { tag } <br/>
      </div>
    </div>
  );
}

export default Card;

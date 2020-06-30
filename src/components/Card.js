import React from 'react';

const Card = ({
  name,
  url,
  tag,
  imageUrl,
}) => {
  return (
    <div className="Card container">
      <div className="card__image">
        <img className="preview"src={ imageUrl } />
      </div>
      <div className="card_info">
        Name: { name } <br/>
        URL: { url } <br/>
        Tag: { tag } <br/>
      </div>
      <div className="actions">
        <button className="button">(+) Add to List</button>
        <button className="button">(-) Remove from List</button>
      </div>
    </div>
  );
}

export default Card;

import React from 'react';

const Card = ({
  name,
  url,
  tag,
  imageUrl,
  date,
}) => {
  return (`
    <div className="Card container">
      <div className="card__image">
        <img className="preview"src={ imageUrl } />
      </div>
      <div className="card_info">
        Name: { name } <br/>
        URL: { url } <br/>
        Comment: { comment } <br/>
        Tag: { tag } <br/>
        Date: {date } <br/>
      </div>
      <div className="actions">
        <button className="button">(+) Add to List</button>
        <button className="button">(-) Remove from List</button>
      </div>
    </div>
  );
}

export default Card;

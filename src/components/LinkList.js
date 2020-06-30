import React from 'react';

const LinkList = ({
  list,
  addLinkToList,
  removeLinkFromList
  }) => {
  let linkCount = list.reduce((linkCount, link) => {
    return linkCount + link.count
  }, 0);

  return (
    <div id="list">
      <h3>Your list has { linkCount } links:</h3>
      <div className="LinkList">
      {list.map(({id, name, count}) => (
        <p key={ id }>
          <span>
          ({ count }x) { name }
          </span><br />
          <button onClick={
            () => addLinkToList({ id, name })
             }> +
          </button>
          <button onClick={
            () => removeLinkFromList({ id })
            }> -
          </button>
          </p>
      ))}
      </div>
    </div>
  );
}

export default LinkList;

import React from 'react';
import { useParams } from 'react-router';

const Featured = () => {
  const { name, topic } = useParams();
  return (
    <div className="main-content">
      <h2>Featured: { `${name}` }</h2>
      <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;
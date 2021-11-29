import React from 'react';
import { useParams } from 'react-router';

const Featured = () => {
  const { fname, lname, topic } = useParams();
  return (
    <div className="main-content">
      <h2>Featured: { `${fname} ${lname}` }</h2>
      <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;
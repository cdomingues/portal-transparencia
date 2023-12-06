import React, { useState, useEffect } from 'react';

interface Resource {
  name: string;
  package_id: string;
  url: string;
}

interface Concurso {
  title: string;
  resources: Resource[];
}

const ResourceCard: React.FC<Resource> = ({ name, package_id, url }) => (
  <div>
    <p>Name: {name}</p>
    <p>Package ID: {package_id}</p>
    <p>URL: {url}</p>
  </div>
);

const ConcursoCard: React.FC<Concurso> = ({ title, resources }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {resources.map((resource, index) => (
        <li key={index}>
          <ResourceCard {...resource} />
        </li>
      ))}
    </ul>
  </div>
);


  

export default ConcursoCard;

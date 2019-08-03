import React from 'react';
import styled from 'styled-components';

const capitalizeText = (string) =>
      string ? `${string.toUpperCase()}` : '';

const Card = styled.div`
    background: rgba(33, 33, 33, 0.6);
    color: rgb(255, 228, 1);
    padding: 1% 2%;
    margin: 10px;
    border-radius: 5px;
    text-align: left;
    width: 14%;
`;

const Name = styled.h2`
  font-family: 'Exo 2', sans-serif;
  text-align: center;
  margin-bottom: 5px;
`;

const Stat = styled.h4`
font-family: 'Exo 2', sans-serif;
font-weight: 400; 
`;

 export default function People({info}) {
  return (
    <Card>
      <Name>Name: {info.name}</Name>
      <Stat><strong>Height:</strong> {info.height} </Stat>
      <Stat>Mass: {info.mass} </Stat>
      <Stat>Hair Color: {capitalizeText(info.hair_color)}</Stat>
      <Stat>Skin Color: {capitalizeText(info.skin_color)}</Stat>
      <Stat>Eye Color: {capitalizeText(info.eye_color)}</Stat>
      <Stat>Birth Year: {info.birth_year}</Stat>
      <Stat>Gender: {capitalizeText(info.gender)}</Stat>
    </Card>
  )
}
import React, { useState } from "react";
import {useSelector} from 'react-redux';
import { Link, useParams } from "react-router-dom";
import {selectCards} from './cardsSlice.js';

export default function Card({ id }) {
  const cards = useSelector(selectCards); // replace this with a call to your selector to get all the cards in state
    console.log(`In Card: ${id} ${cards}`);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}

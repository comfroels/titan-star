import React from 'react';

import './PointsBoard.scss';

export default function PointsBoard(props) {
  return (
    <div className="PointsBoard">
      <h2 className="PointsBoard-score">
        {props.currentPoints} / {props.totalPoints}
      </h2>
      <h2 className="PointsBoard-descriptor">Points Spent</h2>
    </div>
  );
}

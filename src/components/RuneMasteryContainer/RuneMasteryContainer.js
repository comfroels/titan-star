import React from 'react';

import RuneMasteryTree from '../RuneMasteryTree/RuneMasteryTree';
import PointsBoard from '../PointsBoard/PointsBoard';

import { runeTreeReducer, initialTree } from '../../reducers/runeTree';

import './RuneMasteryContainer.scss';

export default function TalentsContainer(props) {
  // Total amount of points that can be used
  const totalPoints = 6;
  // Current amount of points spent on talents
  const [currentPoints, setCurrentPoints] = React.useState(0);
  // Tree Representation
  const [treeState, treeStateDispatch] = React.useReducer(
    runeTreeReducer,
    initialTree
  );

  // Set the current amount of points used and total points based on data
  React.useEffect(() => {
    const count = treeState.paths?.reduce((outerCount, current) => {
      const pathRunePointCount = current.runes.reduce((innerCount, rune) => {
        if (rune.isSelected) {
          innerCount++;
        }
        return innerCount;
      }, 0);
      if (!isNaN(pathRunePointCount)) {
        outerCount += pathRunePointCount;
      }
      return outerCount;
    }, 0);

    setCurrentPoints(count);
  }, [treeState]);

  return (
    <div className="RuneMasteryContainer">
      <PointsBoard currentPoints={currentPoints} totalPoints={totalPoints} />
      <RuneMasteryTree
        treeState={treeState}
        treeStateDispatch={treeStateDispatch}
        canSpend={currentPoints < totalPoints}
      />
    </div>
  );
}

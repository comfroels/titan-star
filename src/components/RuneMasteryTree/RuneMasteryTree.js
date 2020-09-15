import React from 'react';

import TalentPath from '../TalentPath/TalentPath';

import './RuneMasteryTree.scss';

export default function RuneMasteryTree(props) {
  const { treeState, treeStateDispatch, canSpend } = props;

  return (
    <div className="RuneMasteryTree">
      {treeState?.paths.map((path) => (
        <TalentPath
          key={path.id}
          path={path}
          dispatch={treeStateDispatch}
          canSpend={canSpend}
        />
      ))}
    </div>
  );
}

import React from 'react';

import Rune from '../Rune/Rune';

import { toggleRuneSelected } from '../../reducers/runeTree';

import './TalentPath.scss';
import { toast } from 'react-toastify';

export default function TalentPath(props) {
  const { path, dispatch, canSpend } = props;

  return (
    <div className="TalentPath">
      <h5 className="TalentPath-title" title={path.name}>
        {path.name}
      </h5>
      {path?.runes.map((rune, index, runes) => {
        let canBePurchased = true;
        if (index > 0) {
          canBePurchased = runes[index - 1].isSelected;
        }
        return (
          <React.Fragment>
            <Rune
              key={rune.index}
              rune={rune}
              runeIndex={index}
              canBePurchased={canBePurchased}
              onSelect={() => {
                if (canSpend || rune.isSelected) {
                  dispatch(
                    toggleRuneSelected({
                      runeId: rune.id,
                      pathId: path.id,
                      isSelected: !rune.isSelected,
                    })
                  );
                } else if (!canSpend) {
                  toast.error('You no longer have points to spend');
                }
              }}
            />
            {index !== runes.length - 1 && (
              <div
                key={`segment-${rune.index}`}
                className={`TalentPath-segment ${
                  rune.isSelected ? 'is--highlighted' : ''
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

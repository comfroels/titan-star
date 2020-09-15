import React from 'react';
import { toast } from 'react-toastify';

import './Rune.scss';

export default function Rune(props) {
  const { rune, onSelect, canBePurchased } = props;

  return (
    <div
      className={`Rune ${rune.isSelected ? 'is--selected' : ''}`}
      title={rune.name}>
      <div
        onClick={() => {
          if (!rune.isSelected && canBePurchased) {
            onSelect();
          } else if (!canBePurchased) {
            toast.error('Not all prerequisites have been acquired');
          }
        }}
        onContextMenu={(evt) => {
          evt.preventDefault();
          if (rune.isSelected) {
            onSelect();
          }
        }}
        aria-roledescription="rune icon"
        className={`Rune-icon Rune-icon-${
          rune.name?.toLowerCase() ?? 'blank'
        } ${rune.isSelected ? 'is--selected' : ''}`}></div>
    </div>
  );
}

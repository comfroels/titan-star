let storedInitialTree = false;
try {
  storedInitialTree = JSON.parse(localStorage.getItem('titanStarCache'));
} catch (e) {
  /* no-op */
}

export const initialTree = storedInitialTree
  ? storedInitialTree
  : {
      paths: [
        {
          id: 1,
          name: 'Talent Path 1',
          runes: [
            { id: 1, isSelected: true, name: 'Chevron' },
            { id: 2, isSelected: false, name: 'Dining' },
            { id: 3, isSelected: false, name: 'Cake' },
            { id: 4, isSelected: false, name: 'Crown' },
          ],
        },
        {
          id: 2,
          name: 'Talent Path 2',
          runes: [
            { id: 1, isSelected: true, name: 'Boat' },
            { id: 2, isSelected: true, name: 'Snorkle' },
            { id: 3, isSelected: false, name: 'Lightning' },
            { id: 4, isSelected: false, name: 'Skull' },
          ],
        },
      ],
    };

export function runeTreeReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_RUNE_SELECTED':
      let pathIndex,
        runeIndex = 0;
      const path = state.paths.find((path, index) => {
        pathIndex = index;
        return path.id === payload.pathId;
      });
      if (path) {
        const rune = path.runes.find((rune, index) => {
          runeIndex = index;
          return rune.id === payload.runeId;
        });
        if (rune) {
          // Modify Rune
          path.runes.splice(runeIndex, 1, {
            ...rune,
            isSelected: payload.isSelected,
          });

          // If deselecting, deselect any runes further in the tree
          if (!payload.isSelected && path.runes.length > runeIndex + 1) {
            for (let i = runeIndex + 1; i < path.runes.length; i++) {
              path.runes[i] = { ...path.runes[i], isSelected: false };
            }
          }
          // Add back to full list of paths
          state.paths.splice(pathIndex, 1, {
            ...path,
            runes: [...path.runes],
          });
          const newState = {
            paths: [...state.paths],
          };
          localStorage.setItem(
            'titanStarCache',
            newState ? JSON.stringify(newState) : ''
          );
          return newState;
        }
      }
      return state;
    default:
      return state;
  }
}

export function toggleRuneSelected(payload) {
  return {
    type: 'TOGGLE_RUNE_SELECTED',
    payload,
  };
}

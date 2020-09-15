import React from 'react';

import './TitleBar.scss';

export default function TitleBar(props) {
  const [isEasterEgged, setIsEasterEgged] = React.useState(false);

  React.useEffect(() => {
    if (isEasterEgged) {
      const imgs = document.getElementsByClassName('Rune-icon');
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.add('is--easterEgged');
      }
    } else {
      const imgs = document.getElementsByClassName('Rune-icon');
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('is--easterEgged');
      }
    }
  }, [isEasterEgged]);

  return (
    <header className="TitleBar">
      <h3 className="TitleBar-header">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        <img
          style={{ opacity: isEasterEgged ? 1 : 0 }}
          onClick={() => setIsEasterEgged(!isEasterEgged)}
          src="/partywizard.gif"
          alt="party wizard"
          className="TitleBar-wizard"
        />
      </h3>
    </header>
  );
}

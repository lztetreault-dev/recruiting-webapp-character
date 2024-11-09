import { useState } from 'react';
import './App.scss';
import { AttributesComponent } from './Attributes/Attributes';
import { Attributes } from './types';
import { Classes } from './Classes/Classes';
import { SkillsComponent } from './Skills/Skills';

function App() {
  const [attributes, setAttributes] = useState<Attributes>({
    Strength: 0,
    Dexterity: 0,
    Charisma: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Builder</h1>
      </header>
      <section className="App-section">
        <div className="atts-classes">
          <AttributesComponent attributes={attributes} onSetAttribute={attributes => setAttributes(attributes)} />
          <Classes playerAttributes={attributes} />
        </div>
        <SkillsComponent />
      </section>
    </div>
  );
}

export default App;

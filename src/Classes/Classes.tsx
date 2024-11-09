import { useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST } from '../consts';
import { Class } from '../types';
import './Classes.scss';

export function Classes({ playerAttributes }) {
  const [showRequirements, setShowRequirements] = useState<Class | null>(null);

  function meetsMinRequirements(classType: Class): boolean {
    let neededStrength = 9;
    let neededDexterity = 9;
    let neededConstitution = 9;
    let neededIntelligence = 9;
    let neededWisdom = 9;
    let neededCharisma = 9;

    switch (classType) {
      case 'Barbarian':
        neededStrength = CLASS_LIST.Barbarian.Strength;
        break;
      case 'Wizard':
        neededIntelligence = CLASS_LIST.Wizard.Intelligence;
        break;
      case 'Bard':
        neededCharisma = CLASS_LIST.Bard.Charisma;
        break;
      default:
        console.log('unknown class type');
        break;
    }

    const strengthMet = playerAttributes.Strength >= neededStrength;
    const dexterityMet = playerAttributes.Dexterity >= neededDexterity;
    const constitutionMet = playerAttributes.Constitution >= neededConstitution;
    const intelligenceMet = playerAttributes.Intelligence >= neededIntelligence;
    const wisdomMet = playerAttributes.Wisdom >= neededWisdom;
    const charismaMet = playerAttributes.Charisma >= neededCharisma;

    const allMet = strengthMet && dexterityMet && constitutionMet && intelligenceMet && wisdomMet && charismaMet;
    return allMet;
  }

  return (
    <div className="rows class-container">
      <h1>Classes</h1>
      {Object.keys(CLASS_LIST).map((classType: Class) => (
        <h3
          key={classType}
          className={meetsMinRequirements(classType) ? 'reqs-met' : null}
          onClick={() => setShowRequirements(classType)}
        >
          {showRequirements && showRequirements === classType && <span>→</span>}
          {classType}
          {showRequirements && showRequirements === classType && <span>←</span>}
        </h3>
      ))}
      {showRequirements && (
        <div className="min-reqs">
          <h1>Requirements</h1>
          {ATTRIBUTE_LIST.map(attr => (
            <div>
              {attr}: {CLASS_LIST[showRequirements][attr]}
            </div>
          ))}
          <button type="button" className="close-reqs-button" onClick={() => setShowRequirements(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

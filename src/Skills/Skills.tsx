import { SKILL_LIST } from '../consts';
import './Skills.scss';

export function SkillsComponent() {
  return (
    <div className="rows skills-container">
      <h1>Skills</h1>
      <div className="skills">
        {SKILL_LIST.map(skill => (
          <div className="skill" key={skill.name}>
            <span>{skill.name}:</span>
            <span>{skill.attributeModifier}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

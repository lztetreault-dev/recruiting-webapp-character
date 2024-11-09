import { ATTRIBUTE_LIST } from '../consts';
import { Attributes } from '../types';
import './Attributes.scss';

type AttributeProps = {
  attributes: Attributes;
  onSetAttribute: (attributes: Attributes) => void;
};

export function AttributesComponent({ attributes, onSetAttribute }: AttributeProps) {
  function updateAttribute(name: string, diff: number): void {
    const updatedAttrs = { ...attributes };
    updatedAttrs[name] += diff;
    onSetAttribute(updatedAttrs);
  }

  function calculateModifier(attributeValue: number): number {
    return Math.floor((attributeValue - 10) / 2);
  }

  return (
    <div className="rows attributes-container">
      <h1>Attributes</h1>
      {ATTRIBUTE_LIST.map(att => (
        <div className="attribute" key={att}>
          <span>
            {att}: {attributes[att]} (modifier: {calculateModifier(attributes[att])})
          </span>
          <div>
            <button type="button" onClick={() => updateAttribute(att, 1)}>
              +
            </button>
            <button type="button" onClick={() => updateAttribute(att, -1)}>
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

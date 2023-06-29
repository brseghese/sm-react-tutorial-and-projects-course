import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');

  return (
    <div>
      <h4>Truthy OR: {name || 'hello world'} VouV</h4>
      <h4>Falsy OR: {text || 'hello world'} FouV</h4>
      <h4>Truthy AND: {name && 'hello world'} VeV</h4>
      <h4>Falsy AND: {text && 'hello world'} FeV</h4>
    </div>
  );
};
export default ShortCircuitOverview;

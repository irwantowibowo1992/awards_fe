import React from 'react';

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <div className="checkbox_component">
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;

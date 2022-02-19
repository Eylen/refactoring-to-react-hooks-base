import React from 'react';
import PropTypes from 'prop-types';

const Select = ({className, id, name, value, options, onChange}) => (
  <select
    id={id}
    name={name}
    className={className}
    onChange={onChange}
    value={value}
  >
    {options.map(({label, value}) => (
      <option value={value}>{label}</option>
    ))}
  </select>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  ),
  onChange: PropTypes.func
};

export default Select;

import React from 'react';
import PropTypes from 'prop-types';

const Select = ({className, id, label, name, value, options, onChange}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      className={className}
      onChange={onChange}
      value={value}
    >
      {options.map(({label, value}) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  ),
  onChange: PropTypes.func
};

export default Select;

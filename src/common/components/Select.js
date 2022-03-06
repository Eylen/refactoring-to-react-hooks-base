import React from 'react';
import PropTypes from 'prop-types';

const Select = ({className, id, label, name, options, onChange}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select id={id} name={name} className={className} onChange={onChange}>
      {options.map(({label, value}) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    <div className="chevron-wrapper flex">
      <svg
        className="chevron"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
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

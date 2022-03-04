import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import useFetch from '../hooks/useFetch';

const DataFetching = ({endpoint}) => {
  const {loading, error, data} = useFetch(endpoint);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Ops! Something wen wrong: {error}</p>;
  }

  return (
    <ul>
      {data?.map(({timestamp, amount}, index) => (
        <li key={timestamp}>
          {timestamp} - ${amount}
        </li>
      ))}
    </ul>
  );
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default DataFetching;

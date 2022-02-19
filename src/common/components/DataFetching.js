import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const DataFetching = ({endpoint}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData(endpoint) {
      const resp = await fetch(endpoint);
      const data = await resp.json();
      setData(data);
    }
    getData(endpoint);
  }, [endpoint]);

  return data;
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default DataFetching;

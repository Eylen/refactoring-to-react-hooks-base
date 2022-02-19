import React, {useState} from 'react';
import DataFetching from '../../common/components/DataFetching';
import Select from '../../common/components/Select';

const DataFetchingContainer = () => {
  const [selectedEndpoint, setSelectedEnpoint] = useState(
    `${process.env.REACT_APP_BASE_URL}/totals`
  );

  const optionsForSelect = [
    {label: '--', value: 'totals'},
    {label: 'Sales', value: 'sales'},
    {label: 'Subscriptions', value: 'subscriptions'}
  ];

  const handleSelectChange = (event) => {
    setSelectedEnpoint(
      `${process.env.REACT_APP_BASE_URL}/${event.target.value}`
    );
  };

  return (
    <>
      <Select
        onChange={handleSelectChange}
        label="Please, select a chart"
        id="select-chart"
        name="select-chart"
        options={optionsForSelect}
      />
      {selectedEndpoint ? <DataFetching endpoint={selectedEndpoint} /> : null}
    </>
  );
};

export default DataFetchingContainer;

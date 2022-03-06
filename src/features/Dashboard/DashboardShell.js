import React, {useState} from 'react';
import Aside from '../../common/components/Aside';
import ChartContainer from './ChartContainer';
import Layout from '../../common/components/Layout';
import Main from '../../common/components/Main';
import SummaryContainer from './SummaryContainer';
import Select from '../../common/components/Select';

const optionsForSelect = [
  {label: 'Sales', value: `${process.env.REACT_APP_BASE_URL}/sales/`},
  {
    label: 'Subscriptions',
    value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`,
  },
];

const DashboardShell = () => {
  const [selectedLabel, setSelectedLabel] = useState('');
  /*constructor(props) {
    super(props);
    this.state = { selectedLabel: "" };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`);
  }*/

  const handleSelectChange = (event) => {
    const newLabel = event.target.selectedOptions[0].label;
    //this.props.fetchDataset(event.target.value);
    setSelectedLabel(newLabel);
  };

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Select
          label="Please select a chart"
          id="select-product"
          name="select-product"
          onChange={handleSelectChange}
          options={optionsForSelect}
          value={selectedLabel}
        />
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
};

export default DashboardShell;

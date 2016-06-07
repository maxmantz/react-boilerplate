/**
*
* AutosizedGrid
*
*/

import React from 'react';
import { AutoSizer, FlexTable, FlexColumn } from 'react-virtualized';
import Footer from 'components/Footer';
import dummyData from 'utils/dummyData';

class AutosizedGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gridHeight: 500,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentDidMount() {
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getRow = (index) => dummyData[index];

  handleResize = () => {
    const newHeight = document.getElementById('grid-container').offsetHeight - document.getElementById('footer').offsetHeight;

    if (newHeight !== this.state.gridHeight) {
      this.setState({ gridHeight: newHeight });
    }
  }

  render() {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <div id="grid-container" style={{ height, width, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flexGrow: 1 }}>
              <FlexTable
                height={this.state.gridHeight}
                width={width}
                headerHeight={30}
                rowHeight={30}
                rowCount={dummyData.length}
                rowGetter={({ index }) => this.getRow(index)}
              >
                <FlexColumn
                  dataKey="name"
                  flexGrow={1}
                  width={100}
                />
              </FlexTable>
              <Footer />
            </div>
          </div>
        )}
      </AutoSizer>
    );
  }
}

export default AutosizedGrid;

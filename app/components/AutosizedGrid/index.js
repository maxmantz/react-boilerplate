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
  getRow = (index) => dummyData[index];

  render() {
    return (
        <div style={{ flex: '1 1 auto' }}>
          <AutoSizer>
            {({ height, width }) => (
              <FlexTable
                height={height}
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
            )}
          </AutoSizer>
        </div>
    );
  }
}

export default AutosizedGrid;

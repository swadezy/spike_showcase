import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  LineSeries,
} from 'react-vis';

// const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

// const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   y: Math.max(greenData[idx].y, blueData[idx].y)
// }));

const data = [
  { x: 'Mo', y: 2 },
  { x: 'Tu', y: 6 },
  { x: 'We', y: 3 },
  { x: 'Th', y: 4 },
  { x: 'Fr', y: 6 },
  { x: 'Sa', y: 9 },
  { x: 'Su', y: 1 },
];

// const data = [
//   { x: 0, y: 2 },
//   { x: 1, y: 6 },
//   { x: 2, y: 3 },
//   { x: 3, y: 4 },
//   { x: 4, y: 6 },
//   { x: 5, y: 9 },
//   { x: 6, y: 1 },
// ];

function Chart() {
  return (
    <XYPlot height={500} width={500} xType="ordinal" >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={data} />
    </XYPlot>
  );
}

export default Chart;

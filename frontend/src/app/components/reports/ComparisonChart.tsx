// components/reports/ComparisonChart.tsx
import { ResponsiveBar } from '@nivo/bar';

export const ComparisonChart = ({ data }) => (
<div style={{ height: 400 }}>
  <ResponsiveBar
    data={data}
    keys={['studentScore', 'averageScore']}
    indexBy="skill"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    colors={{ scheme: 'paired' }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        translateX: 120,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 20,
      }
    ]}
  />
</div>
);

export default ComparisonChart;
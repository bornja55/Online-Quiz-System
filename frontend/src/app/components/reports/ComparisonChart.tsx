// src/app/components/reports/ComparisonChart.tsx
import { ResponsiveBar } from '@nivo/bar';
import { BarDatum } from '@nivo/bar';

// แก้ไข interface ให้รองรับ index signature
interface ComparisonData extends BarDatum {
  skill: string;
  studentScore: number;
  averageScore: number;
  [key: string]: string | number; // เพิ่ม index signature
}

interface ComparisonChartProps {
  data: ComparisonData[];
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => (
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
        legend: 'ทักษะ',
        legendPosition: 'middle',
        legendOffset: 40
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'คะแนน',
        legendPosition: 'middle',
        legendOffset: -40
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
          itemsSpacing: 2,
          symbolSize: 20,
          itemDirection: 'left-to-right'
        }
      ]}
      role="application"
      ariaLabel="Comparison chart"
      barAriaLabel={e => `${e.id}: ${e.formattedValue} in skill: ${e.indexValue}`}
    />
  </div>
);

export default ComparisonChart;
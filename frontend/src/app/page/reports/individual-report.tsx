'use client';

import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

interface StudentData {
  studentName: string;
  grade: string;
  scores: {
    skill: string;
    studentScore: number;
    averageScore: number;
  }[];
}

interface IndividualReportProps {
  studentData: StudentData;
}

const IndividualReport: React.FC<IndividualReportProps> = ({ studentData }) => {
  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Grid container spacing={2}>
        {/* ส่วนหัวรายงาน */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            รายงานผลการประเมินรายบุคคล
          </Typography>
        </Grid>

        {/* ข้อมูลนักเรียน */}
        <Grid item xs={6}>
          <Typography>ชื่อ-นามสกุล: {studentData.studentName}</Typography>
          <Typography>ระดับชั้น: {studentData.grade}</Typography>
        </Grid>

        {/* กราฟแสดงผลคะแนน */}
        <Grid item xs={12} sx={{ height: 400 }}>
          <ResponsiveBar
            data={studentData.scores}
            keys={['studentScore', 'averageScore']}
            indexBy="skill"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            colors={{ scheme: 'paired' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
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
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20
              }
            ]}
          />
        </Grid>

        {/* ตารางแสดงรายละเอียดคะแนน */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            รายละเอียดคะแนน
          </Typography>
          {/* เพิ่มตารางแสดงคะแนนตามต้องการ */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IndividualReport;
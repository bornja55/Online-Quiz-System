// pages/reports/individual-report.tsx
import { 
    Box, 
    Container, 
    Paper, 
    Typography, 
    Grid,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow 
    } from '@mui/material';
    
    const IndividualReport = () => {
    return (
      <Container maxWidth="lg">
        {/* ส่วนหัวรายงาน */}
        <Paper sx={{ p: 3, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">รายงานผลการทดสอบ</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>ชื่อ-นามสกุล: {studentName}</Typography>
              <Typography>ระดับชั้น: {grade}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>โรงเรียน: {school}</Typography>
              <Typography>วิชา: {subject}</Typography>
            </Grid>
          </Grid>
        </Paper>
    
        {/* คะแนนรวม */}
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6">ผลการประเมิน</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress 
                variant="determinate" 
                value={(score/totalScore)*100} 
              />
            </Box>
            <Typography>
              {score}/{totalScore} คะแนน
            </Typography>
          </Box>
        </Paper>
    
        {/* ตารางคะแนนแยกตามทักษะ */}
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>ผลการวิเคราะห์ตามทักษะการเรียนรู้</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ทักษะ</TableCell>
                <TableCell align="center">คะแนนเต็ม</TableCell>
                <TableCell align="center">คะแนนที่ได้</TableCell>
                <TableCell align="center">ร้อยละ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skillScores.map((skill) => (
                <TableRow key={skill.name}>
                  <TableCell>{skill.name}</TableCell>
                  <TableCell align="center">{skill.totalScore}</TableCell>
                  <TableCell align="center">{skill.score}</TableCell>
                  <TableCell align="center">
                    {((skill.score/skill.totalScore)*100).toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
    
        {/* กราฟแสดงผลเปรียบเทียบ */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>การเปรียบเทียบผลคะแนน</Typography>
          {/* เพิ่ม Chart Component ตรงนี้ */}
        </Paper>
      </Container>
    );
    };
    
    export default IndividualReport;
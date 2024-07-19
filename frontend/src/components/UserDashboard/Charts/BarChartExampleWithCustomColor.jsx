import { BarChart } from '@tremor/react';

// const chartdata = [
//   {
//     date: 'Jan 23',
//     'Distance Running': 167,
//     'Road Cycling': 145,
//     'Open Water Swimming': 135,
//     'Hatha Yoga': 115,
//     'Street Basketball': 150,
//   },
//   {
//     date: 'Feb 23',
//     'Distance Running': 125,
//     'Road Cycling': 110,
//     'Open Water Swimming': 155,
//     'Hatha Yoga': 85,
//     'Street Basketball': 180,
//   },
//   {
//     date: 'Mar 23',
//     'Distance Running': 156,
//     'Road Cycling': 149,
//     'Open Water Swimming': 145,
//     'Hatha Yoga': 90,
//     'Street Basketball': 130,
//   },
//   {
//     date: 'Apr 23',
//     'Distance Running': 165,
//     'Road Cycling': 112,
//     'Open Water Swimming': 125,
//     'Hatha Yoga': 105,
//     'Street Basketball': 170,
//   },
//   {
//     date: 'May 23',
//     'Distance Running': 153,
//     'Road Cycling': 138,
//     'Open Water Swimming': 165,
//     'Hatha Yoga': 100,
//     'Street Basketball': 110,
//   },
//   {
//     date: 'Jun 23',
//     'Distance Running': 124,
//     'Road Cycling': 145,
//     'Open Water Swimming': 175,
//     'Hatha Yoga': 75,
//     'Street Basketball': 140,
//   },
// ];

const chartdata = [
    {date: "Jan 2023", "underweight": 200, "normal": 300, "overweight": 30},
    {date: "Feb 2023", "underweight": 180, "normal": 320, "overweight": 40},
    {date: "Mar 2023", "underweight": 190, "normal": 310, "overweight": 35},
    {date: "Apr 2023", "underweight": 170, "normal": 330, "overweight": 45},
    {date: "May 2023", "underweight": 160, "normal": 340, "overweight": 50}
  ];
export function BarChartExampleWithCustomColor() {
  return (
    <>
      <BarChart
        className="h-72"
        data={chartdata}
        index="date"
        categories={['underweight', 'normal', 'overweight']}
        colors={['indigo-300', 'rose-200', '#ffcc33']}
        yAxisWidth={30}
      />
    </>
  );
}
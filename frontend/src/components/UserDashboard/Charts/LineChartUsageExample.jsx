import { LineChart } from '@tremor/react';

// const chartdata = [
//   {
//     date: 'Jan 22',
//     SolarPanels: 2890,
//     'Inverters': 2338,
//   },
//   {
//     date: 'Feb 22',
//     SolarPanels: 2756,
//     'Inverters': 2103,
//   },
//   {
//     date: 'Mar 22',
//     SolarPanels: 3322,
//     'Inverters': 2194,
//   },
//   {
//     date: 'Apr 22',
//     SolarPanels: 3470,
//     'Inverters': 2108,
//   },
//   {
//     date: 'May 22',
//     SolarPanels: 3475,
//     'Inverters': 1812,
//   },
//   {
//     date: 'Jun 22',
//     SolarPanels: 3129,
//     'Inverters': 1726,
//   },
//   {
//     date: 'Jul 22',
//     SolarPanels: 3490,
//     'Inverters': 1982,
//   },
//   {
//     date: 'Aug 22',
//     SolarPanels: 2903,
//     'Inverters': 2012,
//   },
//   {
//     date: 'Sep 22',
//     SolarPanels: 2643,
//     'Inverters': 2342,
//   },
//   {
//     date: 'Oct 22',
//     SolarPanels: 2837,
//     'Inverters': 2473,
//   },
//   {
//     date: 'Nov 22',
//     SolarPanels: 2954,
//     'Inverters': 3848,
//   },
//   {
//     date: 'Dec 22',
//     SolarPanels: 3239,
//     'Inverters': 3736,
//   },
// ];

const chartdata = [
    {date: "Jan 2023", BMI: 16.5, vaccinationRate: 75},
    {date: "Feb 2023", BMI: 16.8, vaccinationRate: 78},
    {date: "Mar 2023", BMI: 16.6, vaccinationRate: 80},
    {date: "Apr 2023", BMI: 16.9, vaccinationRate: 82},
    {date: "May 2023", BMI: 17.0, vaccinationRate: 85}
  ];
const valueFormatter = function (number) {
  return new Intl.NumberFormat('us').format(number).toString();
};

export function LineChartUsageExample() {
  return (
    <>
      <LineChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['BMI', 'vaccinationRate']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
  );
}
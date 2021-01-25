console.log('GLOBAL_MEAN_TEMPERATURE');
const GLOBAL_MEAN_TEMPERATURE = 14;
function fetchData() {
  return fetch('./ZonAnn.Ts+dSST.csv').then(res => res.text());
  // .then(console.log);
}
console.log(window);
fetchData().then(res => {
  const parseData = Papa.parse(res, { header: true }).data; //.data -метод результата Papa.parse(res)
  console.log(parseData);
  const years = parseData.map(entry => entry.Year);
  // console.log(years);
  const globTemps = parseData.map(
    entry => Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE,
  );
  // console.log(globTemps);
  const nordTemps = parseData.map(
    entry => Number(entry.NHem) + GLOBAL_MEAN_TEMPERATURE,
  );
  const southTemps = parseData.map(
    entry => Number(entry.SHem) + GLOBAL_MEAN_TEMPERATURE,
  );

  const ctx = document.querySelector('.js-chart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: '#GLOBAL TEMPERATURE',
          data: globTemps,
          // backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false, //заливка
        },
        {
          label: '#NORD TEMPERATURE',
          data: nordTemps,
          // backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(99, 99, 132, 1)',
          borderWidth: 1,
          fill: false, //заливка
        },
        {
          label: '#SOUTH TEMPERATURE',
          data: southTemps,
          // backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(1, 99, 132, 1)',
          borderWidth: 1,
          fill: false, //заливка
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              // Include a '°С' sign in the ticks
              callback(value, index, values) {
                return value + ' °С';
              },
            },
          },
        ],
      },
    },
  });
});

//
//
//========================================
// const ctx = document.querySelector('.js-chart').getContext('2d');
// const GLOBAL_MEAN_TEMPERATURE = 14;

// fetchData()
//   .then(parseData)
//   .then(getLabelsAndData)
//   .then(({ years, temps }) => drawChart(years, temps));

// function fetchData() {
//   return fetch('./ZonAnn.Ts+dSST.csv').then(response => response.text());
// }

// function parseData(data) {
//   return Papa.parse(data, { header: true }).data;
// }

// function getLabelsAndData(data) {
//   return data.reduce(
//     (acc, entry) => {
//       acc.years.push(entry.Year);
//       acc.temps.push(Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);

//       return acc;
//     },
//     { years: [], temps: [] },
//   );
// }

// function drawChart(labels, data) {
//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels,
//       datasets: [
//         {
//           label: '# Средняя глобальная температура',
//           data,
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1,
//           fill: false,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               callback(value) {
//                 return value + '°';
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// }

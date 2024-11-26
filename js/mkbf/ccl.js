// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontColor = '#858796';



// Area Chart Example
var ctx = document.getElementById("mkbf-ccl");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2020", "2021", "2022", "2023", "Oct '23 - Sep '24"],
    datasets: [{
      label: "Train-km travelled",
      lineTension: 0.05,
      backgroundColor: "rgb(255, 160, 16,0.05)",//
      borderColor: "rgb(255, 160, 16)",//
      pointRadius: 3,
      pointBackgroundColor: "rgb(178, 111, 11)",//
      pointBorderColor: "rgb(255, 160, 16)",//
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgb(207, 61, 61)",
      pointHoverBorderColor: "rgb(207, 61, 61)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [1733000,1826000,1840000,1209000,1040000],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12,
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgb(224, 225, 220)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        ticks: {
          // Shorthand the millions
          callback: function(value, index, values) {
              return value / 1e6 + 'M';
          }
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
    }
  }
});

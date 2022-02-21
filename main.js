import  Chart  from "chart.js/auto";



const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 20, 5, 2, 20, 30, 45],
    },
  ],
};
const config = {
  type: "line",
  data: data,
  options: {},
};

const createTable = document.createElement('tr')

const demo2 = document.querySelector("#demo2");
const myChart = new Chart(demo2, config);

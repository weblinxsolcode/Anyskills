<script>
import { Doughnut } from "vue-chartjs";
import Chart from "chart.js";

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["jobs", "Quotes", "Gigs"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: ["#DDDDDD", "#52BE71", "#FF385C"],
          data: [20, 20, 60],
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
    //   this.textCenter(880);
  },
  methods: {
    textCenter(val) {
      Chart.pluginService.register({
        beforeDraw: function (chart) {
          var width = chart.chart.width;
          var height = chart.chart.height;
          var ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          var text = val;
          var textX = Math.round((width - ctx.measureText(text).width) / 2);
          var textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      });

      Chart.plugins.unregister(this.chartdata);
    },
  },
};
</script>
<style scoped>
#doughnut-chart {
  height: 289px !important;
  width: 309px !important;
}
@media (max-width: 1367px) {
  #doughnut-chart {
    height: 289px !important;
    width: 250px !important;
  }
}
</style>

<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#52be71",
            barThickness: 10,
            maxBarThickness: 10,
            borderRadius: 10,
            data: [20, 20, 8, 32, 25, 32, 36]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
<style scoped>
#bar-chart{
  height: 289px !important;
}
</style>
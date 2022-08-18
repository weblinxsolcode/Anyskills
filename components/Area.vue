<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    
    console.log(this);

    this.gradient.addColorStop(0, "rgba(194, 223,255,0.5)");
    this.gradient.addColorStop(0.5, "rgba(194, 223,255, 0.25)");
    this.gradient.addColorStop(1, "rgba(194, 223,255, 0)");

   

    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data One",
            borderColor: "#52be71",
            pointBackgroundColor: "white",
            borderWidth: 2,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
<style scoped>
#line-chart{
  height: 292px !important;
  width: 416px !important;
}
@media (max-width:991px){
  #line-chart{
    width: 100% !important;;
  }
}
</style>
<template>
  <div :id="id" style="width: 600px;height: 300px"></div>
</template>

<script>
export default {
  name: 'cv-line-chart',
  data(){
    return {
      id: `line-chart-${this.$randomText(8)}`,
      chart: null
    }
  },
  mounted(){
    this.chart = this.$chartView.init(document.getElementById(this.id))
    this.chart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    })
  }
}
</script>

<style>

</style>
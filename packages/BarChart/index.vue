<template>
  <div :id="id" style="width: 600px;height: 300px"></div>
</template>

<script>
export default {
  name: 'cv-bar-chart',
  props: {
      title: {
          type: String
      }
  },
  data(){
    return {
      id: `bar-chart-${this.$randomText(8)}`,
      chart: null
    }
  },
  mounted(){
    this.chart = this.$chartView.init(document.getElementById(this.id))
    this.chart.setOption({
        title: {
            text: this.title
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
            }
        ]
    })
  }
}
</script>

<style>

</style>
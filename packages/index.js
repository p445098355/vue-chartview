import * as echarts from 'echarts'
import LineChart from './LineChart/index.vue'
import BarChart from './BarChart/index.vue'

const components = [
    LineChart,
    BarChart
]

/**
 * 生成随机字符串
 * @param {*} len 字符串长度，默认为6
 * @returns 返回随机的字符串
 */
const randomText = (len = 6) => {
    let w = ''
    for(let i = 0 ; i < 26 ; i ++){
        if(i >= 0 && i <= 9){
           w = w.concat(`${i}`)
        }
        w = w.concat(String.fromCharCode(65+i), String.fromCharCode(97+i))
    }
    let randomStr = ''
    for(let i = 0 ; i < len ; i ++){
        let index = Math.floor(Math.random() * w.length)
        randomStr = randomStr.concat(w.charAt(index))
    }
    return randomStr
}

export default {
    install(Vue){
        Vue.prototype.$chartView = echarts
        Vue.prototype.$randomText = randomText

        components.map(component => {
            Vue.component(component.name, component)
        })
    }
}
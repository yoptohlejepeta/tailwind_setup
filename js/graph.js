import { init } from 'echarts';
import { initFlowbite } from 'flowbite';

// initialize libraries
initFlowbite();


// initialize charts
var myChart = init(document.getElementById('main'), "light");
export default myChart.setOption({
    title: {
        text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
});

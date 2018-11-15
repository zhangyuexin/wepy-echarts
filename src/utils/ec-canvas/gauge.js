export default function (params) {
  return {
    option: {
      backgroundColor: '#ffffff',
      series: [
        {
          name: '血氧',
          type: 'gauge',
          radius: '70%',
          startAngle: 180,
          endAngle: 0,
          center: ['50%', '50%'],
          min: 50,
          max: 100,
          splitLine: {           // 分隔线
            length: 8,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              width: 1,
              color: '#fff',
              shadowColor: '#fff', // 默认透明
              shadowBlur: 10
            }
          },
          axisTick: {
            splitNumber: 1
          },
          axisLabel: {
            distance: 5,
            fontSize: 8
          },
          pointer: {
            width: 2
          },
          title: {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontSize: 10,
              color: '#333'
            },
            offsetCenter: [0, '-20%']
          },
          detail: {
            formatter: '{value}',
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontSize: 14
            },
            offsetCenter: [0, '-50%']
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 10,
              shadowBlur: 0,
              color: [
              [0.8, '#FF4F79'],
              [0.9, '#FFD400'],
              [1, '#37D279']
              ]
            }
          },
          data: params.dataSpo
        }
      ]
    }

  }
}

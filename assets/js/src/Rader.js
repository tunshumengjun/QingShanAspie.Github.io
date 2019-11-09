let Out;
Out = ResCac($data);

function chart_rader(data, muti) {
    Out = ResCac($data);
    console.log(muti);

    if (!isNaN(Out['dim1']) || !isNaN(Out['dim2']) || !isNaN(Out['dim3'])) {
        ReSizeOn();
    }

    /* 初始化雷达图 */
    let radar_chart = echarts.init(document.getElementById("chart"),);
    let option = {
        tooltip: {},
        radar: {
            radius: '60%',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [2, 2]
                }
            },
            indicator: [
                {name: '社交技\n巧障碍', max: muti},
                {name: '注意力\n切换障碍', max: muti},
                {name: '细节注\n意力障碍', max: muti},
                {name: '交流障碍', max: muti},
                {name: '想象力\n障碍', max: muti},
            ]
        },
        series: [{
            type: 'radar',
            itemStyle: {
                normal: {
                    color: '#a8bcd4'
                }
            },
            data: [
                {
                    value: [Out['dim1'], Out['dim2'], Out['dim3'], Out['dim4'], Out['dim5']],
                    name: '分析雷达图'
                },
            ]
        }]
    };
    radar_chart.setOption(option);
}
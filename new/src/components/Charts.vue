<style scoped>
#headStyle{
    margin-top:25px;
    margin-bottom: 40px;
}
#headStyle>b{
    font-size:14px;
    color:#475669
}
#headStyle>ul{
    float:right;
    list-style:none;
    margin-right:30px;
}
#headStyle>ul>li{
    float: left;
    margin-left: 10px;
}
#headStyle>ul>li>a{
    font-size:13px;
    color:#475669;
}
#headStyle>ul>li>a:hover{
    color:#81A0FF
}
#headStyle>ul>li:nth-child(2){
    color:#97a8be;
}
#headStyle>ul>li:nth-child(3){
    font-size:13px;
    color:#97a8be;
}
#bottomStyle>p{
    float: right;
    margin-right:50px;
}
#bottomStyle>p>a{
    font-size:14px;
}

</style>
<template>
<div>
       <Row>
       <div id="headStyle">
           <b>矩形阵管理</b>
           <ul>
               <li><a href="javascript:;">订阅号管理</a></li>
               <li>/</li>
               <li>微矩阵管理</li>
           </ul>
       </div>
        <Col span="12">      
        <div id="myChart" :style="{width: '500px', height: '400px'}"></div>  
        <br>
        <br>
        <br>
        <div id="lineChart" :style="{width: '500px', height: '400px'}"></div>   
        </Col>

        <Col span="12">
        <div id="barChart" :style="{width: '500px', height: '400px'}"></div> 
        <br>
        <br>
        <br>
        <div id="pieChart" :style="{width: '500px', height: '400px'}"></div>
        </Col>
    </Row>

    <div id="bottomStyle">
        <p>
            <a href="http://echarts.baidu.com/examples/index.html" target="_blank">more > ></a>
        </p>
    </div>
</div>



</template>
<script>
    export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        let barChart = this.$echarts.init(document.getElementById('barChart'));
        let lineChart = this.$echarts.init(document.getElementById('lineChart'));
        let pieChart = this.$echarts.init(document.getElementById('pieChart'));

        // 绘制竖状柱形图表
        myChart.setOption({
            title: { text: 'Column Chart' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });


        //绘制横状柱形图表
        barChart.setOption({
            title: {
                text: 'Bar chart',
                subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        });

        // 折线图
        lineChart.setOption({
            title: { text: 'Line Chart'},
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
               
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        });

        //饼状图
        pieChart.setOption({
            title : {
                text: 'Per Chart',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });

    }
  }
}
</script>

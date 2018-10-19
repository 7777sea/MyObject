<template>
  <div id="form">
    <Row class="form-top">
        <Col span="15"><h2>Form</h2></Col>
    </Row>
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">
        姓名
        </Col>  
        <Col span="12">
          <Input v-model="username" placeholder="姓名" clearable />
        </Col> 
    </Row>
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">活动区域</Col>
        <Col span="12">
          <Select v-model="activeArea" style="width:200px">
            <Option v-for="(item,index) in activeAreaList" :value="item.value" :key="index">{{ item.title }}</Option>
          </Select>
          
        </Col> 
    </Row>
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">活动时间</Col>
        <Col span="12">
            <DatePicker type="date" placeholder="选择日期" v-model="dataValue"></DatePicker>
          -
            <TimePicker type="time" placeholder="选择时间" v-model="timeValue"></TimePicker>
        </Col> 
    </Row>
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">即时配送</Col>
        <Col span="12">
          <i-switch v-model="timelySend" />
        </Col> 
    </Row>
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">活动性质</Col>
        <Col span="12">
          <CheckboxGroup v-model="activeType">
            <Checkbox v-for="(item,index) in activeTypeList" :label="item.title" :key="index"></Checkbox>
          </CheckboxGroup>
        </Col> 
    </Row>
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">特殊资源</Col>
        <Col span="12">
          <RadioGroup v-model="different">
            <Radio v-for="(item,index) in differentList" :label="item.value" :key="index">{{ item.title }}</Radio>
           </RadioGroup>
        </Col> 
    </Row>
    
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">活动形式</Col>
        <Col span="12">
            <Input v-model="activeContent" type="textarea" :rows="3" placeholder="" class="text-area"/>
            <Button type="primary">立即创建</Button>
            <Button>取消</Button>
          
        </Col> 
    </Row>
    <Row :gutter="16" class="form-list">
        <Col span="2" class="form-left">地址选择</Col>
        <Col span="12">
            <Cascader :data="dataLocation" v-model="valueLocation"></Cascader>
        </Col> 
    </Row>
    <Row class="form-list form-bottom">
        <Col span="5"><Button type="warning" class="button" @click="send">submit</Button></Col>
    </Row>


  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      // 活动区域处数据
      activeArea: "",
      activeAreaList: [
        { title: "区域一", value: "areaOne" },
        { title: "区域二", value: "areaTwo" },
        { title: "区域三", value: "areaThree" }
      ],
      // 活动时间数据
      dataValue:'',
      timeValue:'',
      // 及时配送
      timelySend: '',
      // 活动性质数据
      activeType: [],
      activeTypeList: [
        {
          title: "美食/餐厅线上活动"
        },
        {
          title: "地推活动"
        },
        {
          title: "线下主题活动"
        },
        {
          title: "单纯品牌曝光"
        }
      ],
      // 特殊资源数据
      different: "",
      differentList: [{ title: "线上品牌商赞助",value:"online" }, { title: "线下场地免费" ,value:"offline"}],
      switch1: false,
      // 活动形式数据
      activeContent: "",
      // 地址选择数据
      dataLocation: [
        {
          value: "beijingshi",
          label: "北京市",
          children: [
            {
              value: "shixiaqu",
              label: "市辖区",
              children: [
                {
                  value: "dongchengqu",
                  label: "东城区"
                },
                {
                  value: "xichengqu",
                  label: "西城区"
                },
                {
                  value: "chaoyangqu",
                  label: "朝阳区"
                },
                {
                  value: "haidianqu",
                  label: "海淀区"
                }
              ]
            }
          ]
        },
        {
          value: "hebeisheng",
          label: "河北省",
          children: [
            {
              value: "shijiazhuangshi",
              label: "石家庄市",
              children: [
                {
                  value: "changanqu",
                  label: "长安区"
                },
                {
                  value: "qiaoxiqu",
                  label: "桥西区"
                },
                {
                  value: "xinhuaqu",
                  label: "新华区"
                }
              ]
            },
            {
              value: "tangshanshi",
              label: "唐山市",
              children: [
                {
                  value: "lunanqu",
                  label: "路南区"
                },
                {
                  value: "lubeiqu",
                  label: "路北区"
                }
              ]
            },
            {
              value: "qinhuangdaoshi",
              label: "秦皇岛市",
              children: [
                {
                  value: "haigangqu",
                  label: "海港区"
                },
                {
                  value: "shanhaiguanqu",
                  label: "山海关区"
                }
              ]
            },
            {
              value: "handanshi",
              label: "邯郸市",
              children: [
                {
                  value: "hanshanqu",
                  label: "邯山区"
                },
                {
                  value: "congtaiqu",
                  label: "丛台区"
                }
              ]
            }
          ]
        }
      ],
      valueLocation: [],
    };
  },
  methods: {
    send(){
      console.log(this.username);
      console.log(this.activeArea);
      console.log(this.dataValue);
      console.log(this.timeValue);
      console.log(this.timelySend);
      console.log(this.different);
      console.log(this.activeContent);
      console.log(this.valueLocation);
      
    }
  }
};
</script>

<style scoped>
#form {
  width: 90%;
  font-size: 1.3em;
  text-align: left;
}
#form h2 {
  text-align: left;
  margin-left: 20px;
}
#form .form-left {
  text-align: right;

  /* border:1px solid #ccc; */
}
#form .form-list {
  margin: 10px 0;
}
/* 活动区域，下拉框样式 */
.activeDropdown {
  cursor: pointer;
}
#form .form-bottom {
  /* margin-right:5px; */
  margin-left: 30px;
}
.text-area {
  margin-bottom: 10px;
}
</style>

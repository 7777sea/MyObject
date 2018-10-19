<template>
<div id="container">
    <p id="p1">
        Table
        <span>投诉管理/table</span>
    </p>
    <div id="p2">
        <p>
        <input type="text">
            <button class="b1">查询</button>
            <button class="b2" @click="addAlert">新增</button>
        </p>
    </div>
<!--  引入部分 -->
  <div id="t1">
        <Table border ref="selection" :columns="columns4"  :data="data6" ></Table>
        <p id="pp"> 
       <Button @click="handleSelectAll(true)" id="bb">批量删除</Button>
       <span>
            <Page :total="50" />
       </span>
      
       </p>
      
    </div>
    <compile :alertShow="boo" @alertShow="alertShow"></compile>
</div>
</template>
<script>
 import compile from "./Compile"
    export default {
        components:{
           compile
        },
        data () {
            return {
                boo:false,
                columns4: [
                     
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        "sortable": true,
                    },
                     {
                        title: '#',
                        key: 'id',
                        "sortable": true,
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        "sortable": true,
                    },
                       {
                        title: '性别',
                        key: 'gender',
                        "sortable": true,
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        "sortable": true,
                    },
                    {
                        title: '生日',
                        key: 'birthday',
                        "sortable": true,
                    },
                      {
                        title: '地址',
                        key: 'address',
                         "sortable": true,

                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: ()=>{
                                           this.show1();
                                        }
                                    }, 
                                }, '编辑'),
                               
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: ()=>{
                                            
                                        }
                                    }
                                }, '删除')
                            ]);
                        },
                         "sortable": true,
                    }
                ],
                        show1:function(){
                           this.boo=true;
                                    
                        },
                data6: [
                    {
                        id:"1",
                        name: '赵一一',
                        gender:"女",
                        age: 18,
                        birthday:"1990-04-05",
                        address: '桃花源一号胡同',
                        date: '2016-10-03'
                    },
                    {
                        id:"2",
                        name: '赵二二',
                         gender:"男",
                        age: 24,
                         birthday:"1992-04-05",
                        address: '天使村一号巷子',
                        date: '2016-10-01'
                    },
                    {
                        id:"3",
                        name: '赵三三',
                         gender:"男",
                        age: 30,
                         birthday:"1993-04-05",
                        address: '水瓶广场',
                        date: '2016-10-02'
                    },
                    {
                        id:"4",
                        name: '赵思思',
                        gender:"女",
                        age: 26,
                         birthday:"1993-04-05",
                        address: '思源小区8号楼一单元8层',
                        date: '2016-10-04'
                    },
                     {
                         id:"5",
                        name: '赵呜呜',
                         gender:"男",
                        age: 26,
                         birthday:"1994-04-05",
                        address: '思源小区4号楼',
                        date: '2016-10-04'
                    },
                     {
                         id:"6",
                        name: '赵琪琪',
                        gender:"女",
                        age: 26,
                         birthday:"1995-04-05",
                        address: '思源小区5号',
                        date: '2016-10-04'
                    },
                     {
                         id:"7",
                        name: '赵粑粑',
                         gender:"男",
                        age: 26,
                         birthday:"1996-04-05",
                        address: '思源小区6号',
                        date: '2016-10-04'
                    },
                     {
                         id:"8",
                        name: '赵啾啾',
                        gender:"女",
                        age: 26,
                         birthday:"1997-04-05",
                        address: '思源小区7号楼',
                        date: '2016-10-04'
                    },
                     {
                         id:"9",
                        name: '赵十十',
                        gender:"女",
                        age: 26,
                         birthday:"1998-04-05",
                        address: '思源小区8号楼',
                        date: '2016-10-04'
                    }, {
                        id:"10",
                        name: '赵end',
                        gender:"男",
                        age: 26,
                         birthday:"1999-04-05",
                        address: '一单元8层',
                        date: '2016-10-04'
                    }
                ],
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            alertShow(b){
                this.boo=b
            },
            addAlert(){
               this.boo=true;
            }
           
        }
        //另一个模板
    }
</script>
    <style>
        #container {
            width: 100%;
            height: 100%;
            overflow: scroll;
            position: relative;
            
        }
        /*-------------页头部分---------------*/
        p {
            position: relative;
        }

        #p1 {
            font-weight: 700;
            font-size: 15px;
        }

        #p1 > span {
            position: absolute;
            right: 0;
            font-weight: 400;
        }

        #p2 {
            width: 100%;
            height: 60px;
            background-color: rgba(230, 230, 230, 0.55);
            position: relative;
        }
        #p2 >p{
            width:600px;
        }
        #p2 >p> input {
            width: 200px;
            height: 40px;
            border-radius: 3px;
            border: 1px solid #aaaaaa;
            outline: none;
            position: absolute;
            top: 10px;
            left: 10px;
        }
        #p2 >p> button {
            width: 60px;
            height: 40px;
            background-color: #4b9aff;
            outline: none;
            border: none;
            border-radius: 3px;
            color: #fff;
            margin-top: 10px;
            font-size: 14px;
        }
        #p2 >p> .b1{
            margin-left: 230px;
        }
        #p2 >p> .b2{
            margin-left:10px;
        }
        /*-------------表格---------------*/
        #t1{
            margin-top:20px;
        }
        .ivu-table {
            font-size: 16px;
        }
        /* ------------编辑的背景颜色修改-------- */
      .ivu-btn-primary {
        color: #000;
        background-color: #fff;
        border-color: #CCCCCC;
        }
        .ivu-btn-error {
        color: #fff;
        background-color: #FF4949;
        border-color: #FF4949;
        }
     /* -----------字体下面的白色背景修改------- */
        thead>tr>th>div.ivu-table-cell {
         background-color: #F8F8F9;
   
        }
  
   
    /* ---------勾选框的修改------ */
         .ivu-checkbox-input{
        width: 18px;
        height: 18px;
        border: 1px solid #bfcbd9;
        border-radius: 5px;
        box-sizing: border-box;
    }
    /* ----------小箭头点击时改颜色--------- */
        .ivu-table-sort i.on{
       color:#48576a;
   }
   /* -----------表格背景颜色 */
   div.ivu-table-cell {
    background-color: #fff;
}
                .ivu-table-column-center{
    background-color: #F8F8F9;
}
/* -------------去掉右边边框----------- */
    .ivu-table-border td, .ivu-table-border th {
           border-right:none;
}
/* -----------下面分页-------- */
        #pp{
    margin-top: 10px;
    background-color: #F2F2F2;
    position: relative;
    height: 60px;
}
    #bb{
    position: absolute;
    left: 10px;
    top: 10px;
    width: 100px;
    height: 40px;
    font-size: 15px;
    color:#ccc;
}
    #pp>span{
    position: absolute;
    right: 10px;
    top: 10px;
}
    #pp>span  .ivu-page-item-active{
    background: #20A0FF;
}
    #pp>span .ivu-page-item-active a {
color:#fff;
}
</style>


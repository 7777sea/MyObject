<style scoped>
    
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        height: 100%;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #EEF1F6;
        height:100%;
    }
    .layout-menu-right{
        height:100%;
    }
    .ivu-row-flex{
      height:100%;
    }
    .layout-header{
        height: 60px;
        background: #20a0ff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        position: relative
    }
    .layout-header>div{
      width: 100px;
      display: inline-block;
      color:#fff;
      font-size: 16px;
      position: absolute;
      right: 20px;
    }
    .layout-header>div>img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top:10px;
      right: 0px;
    }
    .layout-header>div>span{
      position: absolute;
      top:20px;
      right: 50px;
    }
    .layout-logo-left{
        height: 60px;
        color:#fff;
        background: #20a0ff;   
        font-size: 22px;
        line-height: 60px;
        text-align: center;
        border-right: 1px solid #ccc;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .ivu-menu{
        background: #EEF1F6;

    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title{
      color:#000
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
      background:#E0E5EE
    }
    .ivu-menu-item:hover{
       background:#E0E5EE
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened{
       color:#000;
       padding: 0;
       background:  #EEF1F6;
    }
    .ivu-menu-vertical.ivu-menu-light:after{
      width: 0px;
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active[data-v-7ba5bd90]:not(.ivu-menu-submenu){
        background: #E0E5EE;
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover{
        background-color: #E0E5EE;
    }
    .a{
        width: 100%;
        height: 50px;
        background-color: #EEF1F6;
        line-height: 50px;
        text-align: center
    }
    .a:hover{
        background-color: #E0E5EE;
    }
    .ivu-layout-sider{
        width: 0px！important;
        min-width: 0px！important;
    }
    #layout-content{
        height: 800px;
        overflow: auto;
    }
    
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1"width="auto">
                   
                    <div class="layout-logo-left">
                       <div v-if="logoShow">
                        <Icon type="ios-navigate" ></Icon>
                       </div>
                        <div v-else>
                            系统管理
                        </div>
                    </div>
                    <div v-if="logoShow" >
                        <div class="a"><Icon type="ios-navigate"></Icon></div>
                        <div class="a"> <Icon type="ios-keypad"></Icon></div>
                        <div class="a"><Icon type="ios-analytics"></Icon></div>
                    </div>
                   <Sider hide-trigger :style="{background: '#fff'}" v-else>
                          
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" >
                                <Submenu name="1" >
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        投诉管理
                                    </template>
                                    <MenuItem name="1-1"><div @click="showTable">table</div></MenuItem>
                                    <MenuItem name="1-2"><div @click="showForm">信息列表</div></MenuItem>
                                    <MenuItem name="1-3"><div @click="showIndex">Form</div></MenuItem>
                                    
                                </Submenu>
                                 
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Charts
                                    </template>
                                    <MenuItem name="2-1"><div @click="showCharts">Option 1</div></MenuItem>
                                    <MenuItem name="2-2">Option 2</MenuItem>
                                </Submenu>
                                
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                     
                </Menu>
            </i-col>
            <i-col :span="spanRight" class="layout-menu-right">
                <div class="layout-header">
                    <Icon @click="toggleClick" :style="{margin: '10px 20px'}" type="md-menu" size="24"></Icon>
                    <div>
                      <span>xxx</span>
                      <img src="./image/user.png" alt="">
                    </div>
                </div>
                <div class="layout-content" id="layout-content">
                        <router-view></router-view>
                </div> 
            </i-col>
        </Row>

       
           
        
    </div>
</template>
<script>
 
    export default {
       
        data () {
            return {
                spanLeft: 3,
                spanRight: 21,
                logoShow:false
            }
        },
        
        methods: {
            
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                    this.logoShow=true
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                    this.logoShow=false
                }
            },
            showCharts(){
               
                
                this.$router.push({
                    path:"/Charts"
                })
            },
            showIndex(){
                
                
                this.$router.push({
                    path:"/index"
                })
            },
            showTable(){
               this.$router.push({
                    path:"/table"
                }) 
            },
            showForm(){
                this.$router.push({
                    path:"/form"
                }) 
            }

        }
    }
</script>



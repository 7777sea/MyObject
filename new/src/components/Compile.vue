<template>
<div id="c1" v-show="alertShow">
    <div class="d1" >
<!-- 栅格 -->
    <Row>
         <p class="p1">
          <span id="s1">编辑</span>
          <span id="s2" @click="show">x</span>
         </p>
    </Row>
    
   </div> 
   
</div>
   
</template>
<script>
export default {
    props:["alertShow"],
    data(){

        return{
          
        }
    },
    methods:{
        show(){
            
            
            this.$emit("alertShow",false)

        },
       
    }
}
</script>
<style>
#c1{
    width: 100%;
    height:100%;
    background-color:rgba(128,128,128, 0.7);
    position:absolute ;
    top: 0;
    left: 0;
    z-index: 1000000000;
     font-size: 15px;
}

.d1{
    position: fixed;
    width:700px;
    height:450px;
    border: 1px solid #000;
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    
}


</style>

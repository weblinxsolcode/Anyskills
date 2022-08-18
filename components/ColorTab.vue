<template>
 
    <div
      class="colorFull-btn d-flex mt-2 justify-content-between align-items-center"
      :style="{  backgroundColor: bgcolor  }"
     @click="tab1"
    >
      <div>{{ content }}</div>

      <div>
        <img src="/img/Warn.svg" alt="" />
      </div>
    </div>
 
</template>
<script>
export default {
  props: { content: "String", icon: "String" ,bgcolor : "string"  },
  methods:{
    async tab1(){
      console.log("hello")
    }
  }
};
</script>
<style scoped>
.colorFull-btn {
  background: #f5f5f5;
  border-radius: 7.75096px;
  padding: 8px 10px;
  font-size: 13px;
  width: 150px;
  cursor: pointer;
  user-select: none;
  border: 2px solid transparent;

}
.colorFull-btn:hover{
  border: 2px solid #52be71;
  
}

</style>

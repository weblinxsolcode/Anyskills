<template>
  <div class="Cal-bor">
    <div class="d-flex cal-head align-items-center">
      <div class="box-div d-flex flex-column invisible align-items-center">
        <span> MON </span>
        <span> 01 </span>
      </div>
      <div class="box-div d-flex flex-column align-items-center">
        <span> MON </span>
        <span class="text-dark"> 01 </span>
      </div>
      <div class="box-div d-flex flex-column align-items-center">
        <span> MON </span>
        <span class="text-dark"> 01 </span>
      </div>
      <div class="box-div d-flex flex-column align-items-center">
        <span> MON </span>
        <span class="text-dark"> 01 </span>
      </div>
      <div class="box-div d-flex flex-column align-items-center">
        <span> MON </span>
        <span class="text-dark"> 01 </span>
      </div>
      <div class="box-div d-flex flex-column align-items-center">
        <span> MON </span>
        <span class="text-dark"> 01 </span>
      </div>
      <div class="box-div d-flex flex-column align-items-center">
        <span> MON </span>
        <span class="text-dark"> 01 </span>
      </div>
      <div class="box-div d-flex flex-column align-items-center">
        <span> MON </span>
        <span class="text-dark"> 01 </span>
      </div>
    </div>
    <!-- row -->
    <div class="d-flex align-items-center">
      <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          00:00
        </span>
      </div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div active"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
    </div>
    <div class="d-flex align-items-center">
     <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          11:00
        </span>
      </div>
      <div class="box-div"></div>
      <div class="box-div active"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
    </div>
    <div class="d-flex align-items-center">
      <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          12:00
        </span>
      </div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div active"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
    </div>
    <div class="d-flex align-items-center">
     <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          13:00
        </span>
      </div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div active"></div>
    </div>
    <div class="d-flex align-items-center">
      <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          14:00
        </span>
      </div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div active"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
    </div>
    <div class="d-flex align-items-center">
      <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          15:00
        </span>
      </div>
      <div class="box-div"></div>
      <div class="box-div active"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div "></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
    </div>
    <div class="d-flex align-items-center">
      <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          16:00
        </span>
      </div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div active"></div>
      <div class="box-div"></div>
      <div class="box-div "></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
    </div>
    <div class="d-flex align-items-center">
      <div class="box-div">
        <span class="text-light-gray d-flex justify-content-center align-items-center">
          17:00
        </span>
      </div>
      <div class="box-div active"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
      <div class="box-div "></div>
      <div class="box-div"></div>
      <div class="box-div"></div>
    </div>
  </div>
  
</template>
<style scoped>
.Cal-bor {
  border: 0.731606px solid #e2e2fe;
  border-radius: 9.51088px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.cal-head {
  background: #f0f0fe;
  border-radius: 9.51088px;
}
.cal-head span {
  font-size: 12px;
  color: #7f7f91;
}
.text-light-gray {
  font-size: 12px;
  color: #7f7f91;
  font-weight: bold;
}
.cal-column {
  font-size: 12px;
  color: #f0f0fe;
}
.box-div {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 12.5%;
  aspect-ratio: 1/1;
  border-left: 1px solid #f0f0fe;
  border-bottom: 1px solid #f0f0fe;
  border-radius: 0 !important;
}
.box-div.active {
  background: #52be71;
}
.box-div:nth-child(1) {
  border: none;
}
</style>

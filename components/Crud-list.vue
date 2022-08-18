<template>
  <div class="mt-2">
    <div class="bg-line head row align-items-center mx-0">
      <div class="col-1 d-flex justify-content-end">
        <p class="mb-0">
          <input
            type="checkbox"
            id="my-radio-2"
            name="fav_language"
            value="HTML"
            class=""
          />
        </p>
      </div>
      <div class="col-3 text-center justify-content-center d-flex align-items-center">
        <img
          src="~assets/images/chat_40_pro.png"
          class="mx-1 w-25 rounded-circle"
          alt=""
        />
        <p class="mb-0">Kaylynn Bator</p>
      </div>
      <div class="col-2 d-flex justify-content-center">
        <div class="minipro" :style="{ backgroundColor: bgcolor }">
          <p class="mb-0" :style="{ color: txtcolor }">{{ Status }}</p>
        </div>
      </div>
      <div class="col-2 text-center">
        <div class="graybg-r">
          <p class="mb-0">Poor Service</p>
        </div>
      </div>
      <div class="col-2 text-center">
        <div class="graybg-r">
          <p class="mb-0">Tues, 2 May, 2019</p>
        </div>
      </div>
      <div class="col-2 text-center">
        <p class="mb-0">
          <i class="cus-blue fas fa-ellipsis-h"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { bgcolor: "string", txtcolor: "string", Status: "string" },
};
</script>
<style scoped>
.bg-line {
  background: #ffffff;
  padding: 14px 12px;

  border: 1.22px solid #e6e7e9;
  border-radius: 9.76px;
}
.minipro {
  padding: 5px 9px;
  border-radius: 25px;
  background: red;
}
.graybg-r {
  background: rgba(86, 87, 88, 0.12);
  border-radius: 25px;
  padding: 3px;
}
.cus-blue {
  color: #3855b3;
}
</style>

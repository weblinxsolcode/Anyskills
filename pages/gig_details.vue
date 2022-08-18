<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container px-lg-3 ps-lg-4 d-flex align-items-center justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
    >
      <div class="content d-flex flex-wrap">
        <p class="green mx-3 mx-lg-0 mx-md-0 fw-bold">Order Details</p>
        <i class="fas gray fa-check-circle cheak_icon ms-1 py-1"></i>
        <div class="d-flex mx-3 mb-2">
          <p class="mb-0 gray">Payment</p>
          <i class="fas gray fa-check-circle cheak_icon ms-1 py-1"></i>
        </div>
      </div>

      <div class="text-center mb-3">
        <button type="submit" class="back_button mx-2">
          <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
          Back
        </button>
      </div>
    </div>
    <hr style="color: lightgrey" />
    <div
      class="container px-lg-3 ps-lg-4 pt-4 d-flex justify-content-center justify-content-md-between justify-content-lg-start flex-wrap"
    >
      <div class="left_card me-lg-5">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="m-0 fw-bold mb-3">Gig Description</p>
            <img src="~assets/images/gig1.png" class="img-fluid" alt="" />
            <p class="m-0 fw-bold mt-3">Gig title</p>
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 card_qty py-3">Quatity</p>
              </div>
              <div class="counter">
                <span class="downs" @click="sub">-</span>
                <input type="text" id="counter" value="1" />
                <span class="up" @click="add">+</span>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 basic_pack py-2">Basic Package</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-2">$60</p>
              </div>
            </div>
            <div class="d-block justify-content-between py-3">
              <div>
                <p class="m-0 basic_pack py-2" style="color: #62646a">
                  Graphic and Text -Use up to 3 Color Only. File Send in AI/PSD, PNG, JPG.
                </p>
              </div>
            </div>
            <div class="d-flex justify-content-between pt-2">
              <div>
                <p class="m-0 basic_pack py-2">Est. Delivery days</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-1">5 Days</p>
              </div>
            </div>
            <div class="d-flex justify-content-between pt-1">
              <div>
                <p class="m-0 basic_pack py-2">No. of Revisions</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-2">3</p>
              </div>
            </div>
            <div class="d-flex justify-content-between pt-1 ms-2">
              <div>
                <ul class="m-0 bullets">
                  <li>1 Initial concept</li>
                  <li>Source File</li>
                  <li>High Resolution</li>
                  <li>Double-Sided</li>
                  <li>Enhanced Detailing</li>
                  <li>Commercial Use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_card mt-lg-0 mt-md-0 mt-3 ms-lg-5">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="m-0 fw-bold">Order Summary</p>
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 basic_pack card-2-gray py-2">Gift Card / Discount code</p>
              </div>
            </div>

            <div class="d-flex justify-content-between gap-2 align-items-center">
              <input type="text" class="input_card py-3 height_add" />
              <button class="click_btn py-2 px-4 height_add">Apply</button>
            </div>

            <div class="d-flex justify-content-between pt-4">
              <div>
                <p class="m-0 card-2-gray basic_pack py-1">Sub total</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-1">$60</p>
              </div>
            </div>
            <div class="d-flex justify-content-between pt-1">
              <div>
                <p class="m-0 card-2-gray basic_pack py-1">VAT</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-1">$3</p>
              </div>
            </div>
            <div class="d-flex justify-content-between pt-1">
              <div>
                <p class="m-0 card-2-gray basic_pack py-1">Shipping</p>
              </div>
              <div>
                <p class="m-0 fw-bold green py-1">Free</p>
              </div>
            </div>

            <hr style="color: #c4cdd5" />
            <div class="d-flex justify-content-between pt-2">
              <div>
                <p class="m-0 fw-bolder fs-6 py-2">Total</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-2">$63</p>
              </div>
            </div>
            <NuxtLink to="/payment">
              <div class="py-3">
                <button class="pay_btn">Proceed to payment</button>
              </div>
            </NuxtLink>
            <div>
              <p class="gray text-center" style="font-size: 14px">
                You won’t be charged yet
              </p>
            </div>
          </div>
        </div>
        <div class="py-3">
          <p
            class="text-danger text-center mb-0"
            style="font-size: 10px; cursor: pointer"
          >
            SSL SECURED PAYMENT
          </p>
          <p class="text-danger text-center" style="font-size: 10px; cursor: pointer">
            Your Information is protected by 256-bit SSL encryption
          </p>
        </div>
      </div>
    </div>
    <div class="Extras_sec container py-3 px-lg-3">
      <div class="butttom content">
        <p class="m-0 mx-3 fw-bold py-2">Add Extras</p>
        <div class="mx-3 mt-2 d-flex">
          <input
            type="checkbox"
            id="my-radio-2"
            name="fav_language"
            value="HTML"
            class="me-2"
          />
          <div class="mx-3 pb-2">
            <p class="m-0">Revisions</p>
            <p class="m-0 gray" style="font-size: 13px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Malesuada enim orci.
            </p>
          </div>
        </div>
        <div class="mx-3 d-flex">
          <input
            type="checkbox"
            id="my-radio-2"
            name="fav_language"
            value="HTML"
            class="me-2"
          />
          <div class="mx-3">
            <p class="m-0">Mock ups</p>
            <p class="m-0 gray" style="font-size: 13px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Malesuada enim orci.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    async sub() {
      document.getElementById("counter").value =
        document.getElementById("counter").value - 1;
    },
    async add() {
      document.getElementById("counter").value =
        parseInt(document.getElementById("counter").value) + 1;
    },
  },
};
</script>

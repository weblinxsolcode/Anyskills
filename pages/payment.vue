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
        <i class="fas green fa-check-circle cheak_icon ms-1 py-1"></i>
        <div class="d-flex mx-3 mb-2">
          <p class="mb-0 green">Payment</p>
          <i class="fas green fa-check-circle cheak_icon ms-1 py-1"></i>
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
      class="container px-lg-3 ps-lg-4 pt-4 justify-content-center justify-content-lg-start d-flex flex-wrap margin"
    >
      <div class="left_card me-lg-5">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="m-0 fw-light">Payment Method</p>

            <div class="d-flex justify-content-center align-items-center my-3">
              <label id="my-radio">
                <input
                  type="radio"
                  checked="checked"
                  id="my-radio"
                  name="fav_language"
                  value="HTML"
                />
                <img
                  src="~assets/images/visa_pay.png"
                  class="img-fluid visa_img mx-4"
                  alt=""
                />
              </label>
            </div>
            <div class="d-flex justify-content-center align-items-center my-3">
              <label id="my-radio">
                <input type="radio" id="my-radio" name="fav_language" value="HTML" />
                <img
                  src="~assets/images/mastercard_pay.png"
                  class="img-fluid visa_img mx-4"
                  alt=""
                />
              </label>
            </div>
            <div class="d-flex justify-content-center align-items-center my-3">
              <label id="my-radio">
                <input type="radio" id="my-radio" name="fav_language" value="HTML" />
                <img
                  src="~assets/images/paypal_pay.png"
                  class="img-fluid visa_img mx-4"
                  alt=""
                />
              </label>
            </div>
            <div class="d-flex justify-content-center align-items-center my-3">
              <label id="my-radio">
                <input type="radio" id="my-radio" name="fav_language" value="HTML" />
                <img
                  src="~assets/images/bitcoin_pay.png"
                  class="img-fluid visa_img mx-4"
                  alt=""
                />
              </label>
            </div>
            <div class="d-flex justify-content-center align-items-center my-3">
              <label id="my-radio">
                <input type="radio" id="my-radio" name="fav_language" value="HTML" />
                <img
                  src="~assets/images/strip_pay.png"
                  class="img-fluid visa_img mx-4"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
        <div
          class="container pt-4 text-start ps-0 justify-content-start d-flex flex-wrap align-items-center"
        >
          <input
            type="checkbox"
            id="my-radio-2"
            name="fav_language"
            value="HTML"
            class="me-2"
          />
          <p class="py-1 gray mb-0">Remember for future payments</p>
        </div>
      </div>

      <div class="ms-lg-4 right_card">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="m-0 fw-bold">Order Summary</p>
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 basic_pack card-2-gray py-2">Gift Card / Discount code</p>
              </div>
            </div>

            <div class="d-flex justify-content-between gap-2 align-items-center">
              <input type="text" class="input_card py-3" />
              <button class="click_btn py-2 px-4">Apply</button>
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
            <div class="py-3">
              <button class="pay_btn2">
                <img
                  src="~assets/images/visa_white_pay.png"
                  class="img-fluid visa_white_pay mx-2"
                  alt=""
                />
                Checkout
              </button>
            </div>
            <div class="py-2">
              <p class="text-danger text-center mb-0" style="font-size: 10px">
                SSL Secure Payment
              </p>
            </div>
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
    async check() {
      // document.getElementById("my-radio").style.border = "1px solid green";
      // alert("true");
      // }
    },
  },
};
</script>

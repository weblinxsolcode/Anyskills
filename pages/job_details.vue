<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container  d-flex align-items-center justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
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
      class="container  pt-4 d-flex justify-content-center justify-content-md-start justify-content-lg-strat flex-wrap margin"
    >
      <div class="left_card me-lg-5">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="mb-2 fw-bold">Job Details</p>
            <img src="~assets/images/gig1.png" class="img-fluid" alt="" />
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 py-2">Job title</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-2">Logo Work</p>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 fw-bold py-2">Cost</p>
              </div>
              <div>
                <p class="m-0 fw-bold py-2">$60</p>
              </div>
            </div>
            <div class="d-flex justify-content-between pt-1">
              <div>
                <p class="m-0 fw-bolder">Features</p>
              </div>
            </div>
            <div class="justify-content-between pt-1">
              <nav class="nav1">
                <label for="touch1"
                  ><span class="Drop_head">
                    <div class="d-flex">
                      <div>
                        <i @click="click" class="fas fa-angle-right mx-1"></i>
                      </div>
                      Designs
                    </div>
                  </span></label
                >
                <input type="checkbox" id="touch1" />

                <ul class="slideed px-4 mb-0">
                  <li><a href="#"> Invoice </a></li>
                  <li><a href="#">Design</a></li>
                </ul>
              </nav>
              <nav class="nav1">
                <label for="touch2"
                  ><span class="Drop_head">
                    <div class="d-flex">
                      <div>
                        <i class="fas fa-angle-right mx-1" id="r1"></i>
                        <i class="fas fa-angle-down mx-1 d-none" id="d1"></i>
                      </div>
                      Mockups
                    </div>
                  </span></label
                >
                <input type="checkbox" id="touch2" />

                <ul class="slideed px-4 mb-0">
                  <li><a href="#"> Invoice </a></li>
                  <li><a href="#">Design</a></li>
                </ul>
              </nav>
              <nav class="nav1">
                <label for="touch3"
                  ><span class="Drop_head"
                    ><i class="fas fa-angle-right mx-1"></i>
                    Revisions
                  </span></label
                >
                <input type="checkbox" id="touch3" />

                <ul class="slideed px-4 mb-0">
                  <li><a href="#"> Invoice </a></li>
                  <li><a href="#">Design</a></li>
                </ul>
              </nav>
              <nav class="nav1">
                <label for="touch4"
                  ><span class="Drop_head"
                    ><i class="fas fa-angle-right mx-1"></i>
                    Stationaries
                  </span></label
                >
                <input type="checkbox" id="touch4" />

                <ul class="slideed px-4 mb-0">
                  <li><a href="#"> Invoice </a></li>
                  <li><a href="#">Design</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="right_card mt-lg-0 mt-md-0 mt-3">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="m-0 fw-bold">Order Summary</p>
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 basic_pack card-2-gray py-2">
                  Gift Card / Discount code
                </p>
              </div>
            </div>

            <div class="d-flex justify-content-between gap-2 align-items-center">
              <input type="text" class="input_card  py-3 " />
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
          <p class="text-danger text-center mb-0" style="font-size: 10px; cursor: pointer">
            SSL SECURED PAYMENT
          </p>
          <p class="text-danger text-center" style="font-size: 10px; cursor: pointer">
            Your Information is protected by 256-bit SSL encryption
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

// <script>
// export default {
//   methods: {
//     async click() {
//       this.classList.remove("fa-angle-down fa-angle-up");
//     },
//   },
// };
// </script>

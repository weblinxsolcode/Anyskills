<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container px-lg-3 ps-lg-4 d-flex justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
    >
      <div class="content d-flex flex-wrap">
        <p class="green mx-3 mx-lg-0 mx-md-0 fw-bold">Basic Info</p>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="mb-0 green">Packages & Pricing</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Uploads</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Requirements</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Publish</p>
        </div>
      </div>
      <div class="text-center mt-3 mt-lg-0">
        <NuxtLink to="/gig_upload">
          <button type="submit" class="back_button mx-2">
            <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
            Back
          </button></NuxtLink
        >
        <NuxtLink to="/gig_publish">
          <button type="submit" class="next_button mx-2">
            Next
            <i class="fas fa-angle-right"></i></button
        ></NuxtLink>
      </div>
    </div>

    <hr class="mt-0" style="color: lightgrey" />
    <div class="mt-5">
      <p
        class="fw-bolder text-center green mb-0 pt-5"
        style="color: #34a853; font-size: 36px"
      >
        Create a gig
      </p>
      <p class="text-center text-muted">
        Create a gig and let skill users send your a quote
      </p>
    </div>
    <div
      class="container px-0 px-lg-5 pt-4 justify-content-center flex-wrap col-12 col-lg-7"
    >
      <div class="left_card pb-4">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-center">
              <div class="">
                <p class="fw-bolder fs-5 text-center green mb-0 pt-2">Requirements</p>
                <p class="text-center fs-6 text-muted">
                  Tell your buyer what you need to get started
                </p>
                <div class="form-group mx-3 mx-lg-5 mx-md-5 my-5">
                  <label for="exampleFormControlInput1" class="fw-bold my-3"
                    >Gig Requirements</label
                  >
                  <textarea
                    class="form-control iz_custom_placeholder form-control-2 px-4"
                    placeholder="Provide a brief requirement for buyers. "
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hr style="color: lightgrey" class="my-4" /> -->

        <hr style="color: lightgrey; margin-bottom: 60px; margin-top: 60px" class="" />
        <div class="conatiner d-flex justify-content-between mt-5">
          <NuxtLink to="/gig_upload">
            <button class="btn btn-back">Back</button>
          </NuxtLink>
          <NuxtLink to="/gig_publish">
            <button class="btn btn-next">Next</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container">
      <div class="d-lg-flex d-block gap-2">
        <div class="">
          <Dashboard />
        </div>
        <div class="bg-mycon w-100 px-3 py-2">
          <div class="row align-items-center">
            <div class="ps-4">
              <div class="d-flex justify-content-between flex-wrap">
                <div>
                  <p class="mb-0">
                    <span class="text-muted opacity_01"
                      ><i class="fas fa-angle-left me-1"></i>Open</span
                    >
                    <span class="text_green_iz"
                      ><i
                        class="
                          fas
                          fa-angle-left
                          me-1
                          ms-2
                          text-muted
                          opacity_01
                        "
                      ></i
                      >Cases details</span
                    >
                  </p>
                </div>
                <div>
                  <Nuxt-link class="resolved_iz" to="#"
                    ><i class="fas fa-check-circle text_green_iz me-2"></i> Mark
                    as completed
                  </Nuxt-link>
                </div>
              </div>
              <div class="d-flex mt-5 gap-5 w_50">
                <div class="w-25">
                    <p class="mb-0 fw-bolder">Project Status:</p>
                </div>
                <div>
                    <p class="mb-0 text-primary">Open</p>
                </div>
              </div>
              <div class="d-flex mt-2 gap-5 w_50">
                <div class="w-25">
                    <p class="mb-0 fw-bolder">Owner:</p>
                </div>
                <div>
                    <p class="mb-0">Pro</p>
                </div>
              </div>
              <div class="d-flex mt-2 gap-5 w_50">
                <div class="w-25">
                    <p class="mb-0 fw-bolder">Open Against:</p>
                </div>
                <div>
                    <p class="mb-0">Joy Enam</p>
                </div>
              </div>
              <div class="d-flex mt-2 gap-5 w_50">
                <div class="w-25">
                    <p class="mb-0 fw-bolder">Category:</p>
                </div>
                <div>
                    <p class="mb-0">Poor Service</p>
                </div>
              </div>
              <div class="d-flex mt-2 gap-5 w_50">
                <div class="w-25">
                    <p class="mb-0 fw-bolder">Date:</p>
                </div>
                <div>
                    <p class="mb-0">Tue, 2 May, 2022</p>
                </div>
              </div>
              <p class="mb-2 fw-bolder mt-5">Description</p>
              <div class="box_shadow_light_iz p-2 d-flex justify-content-lg-start justify-content-center mt-4">
              <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident itaque dolorum impedit totam, iusto maiores aliquam aspernatur cupiditate error eaque cum cumque debitis, sequi aliquid. Eos sit ad dolorum laboriosam labore ab incidunt fuga quos nam reprehenderit fugiat veniam perspiciatis accusantium itaque, iure cupiditate quaerat consectetur totam, reiciendis esse aliquid eligendi! Reprehenderit assumenda optio distinctio sunt eaque minus molestias atque nam ullam. Voluptatibus asperiores itaque libero aliquam porro voluptatum ea alias similique adipisci! Earum itaque praesentium .
              </p>

              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
    <Footer />
  </div>
</template>


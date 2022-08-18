<template>
  <div>
    <Nav />
    <ServicesNav />

    <CreategigNav tabs="my_jobs" />

    <div class="container mt-5">
      <p class="fw-bold fs-2 text-center">My Jobs</p>
      <!-- <div class="text-center mt-5 graphics_tabs">
        <NuxtLink to="/my_jobs">
          <button class="basic">Basic</button>
        </NuxtLink>
        <NuxtLink to="#">
          <button class="auction"><span class="me-4">|</span> Auctions</button>
        </NuxtLink>
      </div> -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="for_shadow" style="boder-radius: 5px">
          <input
            id="toggle-on"
            @click="hello"
            class="toggle toggle-left"
            name="toggle"
            v-model="toogleLine"
            value="0"
            type="radio"
            checked
          />

          <label for="toggle-on" class="btn1">Basic</label>

          <input
            id="toggle-off"
            class="toggle toggle-right"
            name="toggle"
            v-model="toogleLine"
            value="1"
            type="radio"
          />

          <span class="vl" v-if="toogleLine == 0"></span>

          <label for="toggle-off" class="btn1" @click="goToHome()">Auctions</label>
        </div>
      </div>

      <div id="hello2" class="mygigs mt-5">
        <div class="row mx-0">
          <div class="col-lg-3 ps-lg-0 pe-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job3.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 pe-lg-0 ps-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="row mx-0">
          <div class="col-lg-3 ps-lg-0 pe-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job3.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 pe-lg-0 ps-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="row mx-0">
          <div class="col-lg-3 ps-lg-0 pe-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/job3.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 pe-lg-0 ps-lg-3">
            <NuxtLink to="/job_details">
              <div class="card gigs" style="width: 100%">
                <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-title fw-bold mb-0">John Creta</p>

                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-share-alt"></i>
                    </div>
                  </div>
                  <div
                    class="mt-3 card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-2 mb-0">43</p>
                    <i class="far fa-eye ms-3"></i>
                    <p class="fw-bold ms-2 mb-0">300</p>
                    <i class="fas fa-info-circle ms-3"></i>
                  </div>
                  <hr style="width: 100%" />
                  <div class="mb-0 mt-3 d-flex justify-content-end align-items-center">
                    <p class="mb-0 text-danger">Budget :</p>
                    <p class="fw-bold ms-2 mb-0">$23</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link border-custom-iz m-2 prev"
              ><i class="fas fa-angle-left text-white"></i
            ></a>
          </li>
          <div class="pages">
            <li class="page-item m-2">
              <a class="page-link iz_active" href="#">1</a>
            </li>
            <li class="page-item m-2"><a class="page-link" href="#">2</a></li>
            <li class="page-item m-2">
              <a class="page-link" href="#">...</a>
            </li>
            <li class="page-item m-2"><a class="page-link" href="#">9</a></li>
            <li class="page-item m-2"><a class="page-link" href="#">10</a></li>
          </div>
          <li class="page-item">
            <a class="page-link border-custom-iz m-2 next"
              ><i class="fas fa-angle-right text-white"></i
            ></a>
          </li>
        </ul>
      </nav>
    </div>

    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default {
  data() {
    return {
      toogleLine: 0,
    };
  },
  methods: {
    goToHome() {
      //  this.$router.push('/my_jobs');
      this.$router.push("/basicjob_location");
    },
  },
  tab(ele) {
    document.querySelectorAll(".tab").forEach((element) => {
      element.classList.remove("btn_active");
    });
    document.querySelector("." + ele).classList.add("btn_active");
    // ele.classList.add("btn_active")
    // console.log(ele)
  },
};
</script>

<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container">
      <div class="d-lg-flex d-block gap-3 flex-warp">
        <div class="">
          <Dashboard />
        </div>
        <div class="w-100 px-3 py-2">
          <div class="head">
            <p class="mb-0 fw-bolder fs-5">Analytics</p>
          </div>
          <div
            class="d-lg-flex d-block justify-content-between align-items-center"
          >
            <Threebtn />
            <div>
              <select name="cars" id="download">
                <option value="volvo" class="fw-bolder">DownLoad</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div
            class="d-flex justify-content-between align-items-center flex-wrap"
          >
            <FollowerCard
              text1="Total Followers"
              text2="13,675"
              icon="/img/follower.svg"
            />
            <FollowerCard
              text1="Total Posts"
              text2="1,986"
              icon="/img/post.svg"
            />
            <FollowerCard
              text1="Payment Received"
              text2="$890,543"
              icon="/img/like.svg"
            />
            <FollowerCard
              text1="Reviews"
              text2="234,780"
              icon="/img/comments.svg"
            />
            <FollowerCard text1="Cases" text2="4" icon="/img/Group.svg" />
          </div>
          <div class="row mx-0">
            <div class="col-12 mt-3 col-lg-7 col-md-7 px-0">
              <div class="me-3 bg-mycon p-3">
                <p class="mb-0 fw-bolder fs-5 C-head">Auctions and Bids</p>

                <Area />
              </div>
            </div>
            <div class="col-12 mt-3 col-lg-5 col-md-7 px-0">
              <div class=" p-3 h-100  bg-mycon">
                <p class="mb-0 fw-bolder fs-5 C-head">Engagements & Meetups</p>
                <div class="d-flex justify-content-center align-items-center " >
                <img src="~/assets/images/map-a.png" class="img-fluid mt-5" alt="">

                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 col-lg-4">
              <div class="bg-mycon p-3">
                <p class="mb-0 fw-bolder fs-5 C-head">Transactions</p>
                <div class="d-flex justify-content-center">
                  <Pie class="" />
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="bg-mycon p-3">
                <p class="mb-0 fw-bolder fs-5 C-head">Projects</p>

                <BarChart />
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="bg-mycon p-3">
                <p class="mb-0 fw-bolder fs-5 C-head">Jobs & Quotes</p>

                <Doughnut />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
#download {
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-weight: bolder;
}
.C-head {
  color: #555555;
  font-weight: bolder !important;
}
</style>

<template>
  <div>
    <div class="container sencond_nav justify-content-lg-between padding_18">
      <div class="input_feild custom_margin123 py-0">
        <b-input-group
          class="w-100 d-flex justify-content-lg-start justify-content-center"
        >
          <template #prepend>
            <!-- <b-input-group-text 
              ><i class="fas fa-search py-1 border_right_0"></i
            ></b-input-group-text> -->
          </template>
          <div class="b-border rounded-3">
            <span>
              <i class="fas fa-search"></i>
            </span>
            <input
              type="search  "
              placeholder="Search of Jobs & services e.g Painter,designer, e.t.c"
              class="my-box"
            />
          </div>
          <!-- <b-form-input class=" bg_01 ps-5 " placeholder="Search of Jobs & services"></b-form-input> -->

          <template #append>
            <NuxtLink to="/graphics_design_jobs" v-if="tabs">
              <button class="search mx-2 pointer rounded-3">Search</button>
            </NuxtLink>
            <NuxtLink to="/search_for_gigs" v-if="!tabs">
              <button class="search mx-2 pointer rounded-3">Search</button>
            </NuxtLink>
          </template>
        </b-input-group>
      </div>

      <div class="gig_procedure mt-4 mt-lg-0">
        <NuxtLink to="/my_jobs">
          <p class="mb-0 mx-3">My Jobs</p>
        </NuxtLink>
        <NuxtLink to="/my_gigs">
          <p class="mb-0 mx-3">My Gigs</p>
        </NuxtLink>
        <div class="mt-3 mt-lg-0">
          <NuxtLink to="/create_gig">
            <button class="create_gig mx-2">Create a Gig</button>
          </NuxtLink>
          <NuxtLink to="/post_job">
            <button class="post_job mx-2">Post a Job</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- <hr class="mt-0 profile_view_mb_0" style="color: lightgrey" /> -->
  </div>
</template>
<script>
export default {
  props: ["tabs"],
  created() {
    if (this.tabs) {
      console.log(this.tabs);
    }
  },
};
</script>
<style scoped>
.my-box {
  border: none !important;
}

.b-border {
  border: 1px #cccc solid;
  padding: 5px 5px;
  display: flex;
  align-items: center;
}
.b-border i {
  color: #cccc;
}
.b-border input {
  width: 300px !important;
}
@media (max-width: 911px) {
  .b-border input {
    width: auto !important;
  }
}
</style>

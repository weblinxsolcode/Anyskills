<template>
  <div>
    <div class="container px-lg-5 sencond_nav justify-content-lg-between">
      <div class="input_feild mt-1">
        <b-input-group class="w-100">
          <template #prepend>
            <b-input-group-text
              ><i class="fas fa-search py-1"></i
            ></b-input-group-text>
          </template>
          <b-form-input placeholder="Search of Jobs & services"></b-form-input>

          <template #append>
            <NuxtLink to="/search_for_gigs">
              <button class="search mx-2">Search</button>
            </NuxtLink>
          </template>
        </b-input-group>
      </div>

      <div class="gig_procedure mt-4 mt-lg-1">
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
    <hr style="color: lightgrey" />
  </div>
</template>

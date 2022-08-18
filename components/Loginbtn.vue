<template>
  <div>
    <!-- navbar -->

    <b-navbar
      toggleable="lg"
      class="px-0 boxshadow12311 mb-3"
      type="tranparent"
      variant="transparent"
    >
      <div class="container" style="padding-left: 18px">
        <NuxtLink to="/">
          <img src="~assets/images/Anyskills_Logo.png" alt="" />
        </NuxtLink>

        <b-navbar-toggle target="nav-collapse"
          ><i class="fas fa-bars fs-2"></i
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto d-flex align-items-center">
            <b-nav-item>
              <button class="sign">
                <NuxtLink class="sign_button" to="/Register"> Sign Up </NuxtLink>
              </button>
            </b-nav-item>
            <b-nav-item>
              <button class="login">
                <NuxtLink class="login_button" to="/Login"> Login </NuxtLink>
              </button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <!-- <hr style="margin-top: -5px; color: lightgrey; padding: 3px 0px" /> -->
  </div>
</template>

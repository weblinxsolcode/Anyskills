<template>
  <div>
    <div class="container gray">
      <b-navbar toggleable="lg" class="px-0 py-3" type="tranparent" variant="transparent">
        <NuxtLink to="/">
          <img src="~assets/images/Anyskills_Logo.png" alt="" />
        </NuxtLink>

        <b-navbar-toggle target="nav-collapse"
          ><i class="fas fa-bars fs-2"></i
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto d-flex align-items-center ps-lg-3">
            <b-nav-item>
              <svg
                width="20"
                class="mx-1"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12.5L12.5 2L23 12.5V23H2V12.5Z"
                  stroke="#52be71"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="green mx-lg-3 ms-lg-1 mx-0 fs-6"> Home </span>
            </b-nav-item>
            <b-nav-item>
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.46611 0C5.12632 0 2.41889 2.70743 2.41889 6.04722C2.41889 9.38701 5.12632 12.0944 8.46611 12.0944C11.8059 12.0944 14.5133 9.38701 14.5133 6.04722C14.5133 2.70743 11.8059 0 8.46611 0ZM4.83778 6.04722C4.83778 4.04335 6.46224 2.41889 8.46611 2.41889C10.47 2.41889 12.0944 4.04335 12.0944 6.04722C12.0944 8.0511 10.47 9.67556 8.46611 9.67556C6.46224 9.67556 4.83778 8.0511 4.83778 6.04722Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M18.0309 6.31122C17.6906 6.13774 17.3141 6.0473 16.9322 6.0473V3.62841C17.6961 3.62841 18.4491 3.80922 19.1297 4.1562C19.2046 4.19441 19.2784 4.23452 19.3511 4.27647C19.9382 4.61541 20.4483 5.07445 20.8476 5.62459C21.2962 6.24282 21.5921 6.9585 21.711 7.71307C21.8299 8.46764 21.7685 9.23964 21.5317 9.96589C21.2948 10.6921 20.8894 11.352 20.3486 11.8914C19.8077 12.4309 19.1468 12.8345 18.4199 13.0695C17.7731 13.2785 17.0905 13.3486 16.4165 13.2763C16.333 13.2674 16.2497 13.2562 16.1667 13.2429C15.4129 13.1221 14.6985 12.8247 14.0817 12.3749L14.0805 12.374L15.5063 10.42C15.8149 10.6452 16.1723 10.794 16.5495 10.8545C16.9266 10.9149 17.3126 10.8852 17.6761 10.7677C18.0395 10.6503 18.3699 10.4484 18.6403 10.1787C18.9108 9.909 19.1135 9.57909 19.2319 9.21598C19.3503 8.85287 19.381 8.46688 19.3216 8.0896C19.2621 7.71233 19.1142 7.3545 18.8898 7.04539C18.6655 6.73629 18.3712 6.4847 18.0309 6.31122Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M21.7677 21.77C21.7677 21.135 21.6426 20.5062 21.3996 19.9195C21.1566 19.3329 20.8004 18.7998 20.3514 18.3508C19.9024 17.9018 19.3693 17.5456 18.7827 17.3026C18.196 17.0596 17.5672 16.9345 16.9322 16.9345V14.5133C17.7572 14.5133 18.5751 14.654 19.3511 14.9283C19.4715 14.9709 19.591 15.0167 19.7092 15.0657C20.5896 15.4304 21.3896 15.9649 22.0635 16.6388C22.7373 17.3126 23.2718 18.1126 23.6365 18.993C23.6855 19.1113 23.7313 19.2307 23.7739 19.3511C24.0482 20.1271 24.1889 20.9451 24.1889 21.77H21.7677Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M16.9322 21.77H14.5133C14.5133 18.4302 11.8059 15.7228 8.46611 15.7228C5.12632 15.7228 2.41889 18.4302 2.41889 21.77H0C0 17.0943 3.79041 13.3039 8.46611 13.3039C13.1418 13.3039 16.9322 17.0943 16.9322 21.77Z"
                  fill="#DDDDDD"
                />
              </svg>

              <span class="light_gary mx-lg-3 mx-0 ms-lg-2 fs-6 fw-light"> Request </span>
            </b-nav-item>
            <b-nav-item>
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.70671 21.7668C7.50457 21.7668 6.53003 20.7923 6.53003 19.5901H10.8834C10.8834 20.7923 9.90886 21.7668 8.70671 21.7668ZM17.4134 18.5018H0V16.3251L2.17668 15.2367V9.25088C2.17668 5.48305 3.72321 3.03973 6.53003 2.37258V0H9.79505C9.0854 0.940257 8.70315 2.08702 8.70671 3.26502C8.70667 3.5386 8.72705 3.81181 8.76766 4.08236H8.70671C7.37878 3.99635 6.09797 4.59024 5.30565 5.65936C4.62821 6.7309 4.29582 7.98447 4.35336 9.25088V16.3251H13.0601V9.25088C13.0601 9.02124 13.0525 8.80031 13.0372 8.59788C13.7571 8.74659 14.4995 8.74918 15.2204 8.6055C15.2324 8.83514 15.2367 9.05389 15.2367 9.2585V15.2367L17.4134 16.3251V18.5018ZM14.1484 6.53004C13.4908 6.53083 12.8484 6.33238 12.3059 5.96083C11.0235 5.08427 10.5363 3.42566 11.1408 1.99482C11.7452 0.563981 13.274 -0.242937 14.7964 0.065341C16.3188 0.373619 17.4132 1.71174 17.4134 3.26502C17.4134 5.06824 15.9516 6.53004 14.1484 6.53004Z"
                  fill="#DDDDDD"
                />
              </svg>

              <span class="light_gary mx-lg-3 ms-lg-2 mx-0 fs-6 fw-light">
                Notifications
              </span>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink to="/chat_40">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.2556 7.2556H4.83706V9.67413H7.2556V7.2556Z"
                    fill="#DDDDDD"
                  />
                  <path
                    d="M9.67413 7.2556H12.0927V9.67413H9.67413V7.2556Z"
                    fill="#DDDDDD"
                  />
                  <path
                    d="M16.9297 7.2556H14.5112V9.67413H16.9297V7.2556Z"
                    fill="#DDDDDD"
                  />
                  <path
                    d="M0 2.41853V21.7668L5.80448 17.4134C6.22266 17.0986 6.73214 16.9288 7.2556 16.9297H19.3483C20.684 16.9297 21.7668 15.8469 21.7668 14.5112V2.41853C21.7668 1.08281 20.684 0 19.3483 0H2.41853C1.08281 0 0 1.08281 0 2.41853ZM2.41853 16.9297V2.41853H19.3483V14.5112H6.45022C5.9267 14.5098 5.41708 14.6797 4.9991 14.9949L2.41853 16.9297Z"
                    fill="#DDDDDD"
                  />
                </svg>

                <span class="light_gary mx-lg-3 ms-lg-2 mx-0 fs-6 fw-light">Chats</span>
              </NuxtLink>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ms-auto d-flex align-items-center">
            <b-nav-item class=""
              ><NuxtLink to="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H17C17.2652 21 17.5196 20.8946 17.7071 20.7071C17.8946 20.5196 18 20.2652 18 20C18 19.7348 17.8946 19.4804 17.7071 19.2929C17.5196 19.1054 17.2652 19 17 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H17C17.2652 5 17.5196 4.89464 17.7071 4.70711C17.8946 4.51957 18 4.26522 18 4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3H6ZM15.707 7.293C15.6148 7.19749 15.5044 7.12131 15.3824 7.0689C15.2604 7.01649 15.1292 6.9889 14.9964 6.98775C14.8636 6.9866 14.7319 7.0119 14.609 7.06218C14.4861 7.11246 14.3745 7.18671 14.2806 7.2806C14.1867 7.3745 14.1125 7.48615 14.0622 7.60905C14.0119 7.73194 13.9866 7.86362 13.9877 7.9964C13.9889 8.12918 14.0165 8.2604 14.0689 8.3824C14.1213 8.50441 14.1975 8.61475 14.293 8.707L16.586 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H16.586L14.293 15.293C14.1108 15.4816 14.01 15.7342 14.0123 15.9964C14.0146 16.2586 14.1198 16.5094 14.3052 16.6948C14.4906 16.8802 14.7414 16.9854 15.0036 16.9877C15.2658 16.99 15.5184 16.8892 15.707 16.707L19.707 12.707C19.8945 12.5195 19.9998 12.2652 19.9998 12C19.9998 11.7348 19.8945 11.4805 19.707 11.293L15.707 7.293Z"
                    fill="black"
                  />
                </svg>

                Back to Anyskills
              </NuxtLink>
            </b-nav-item>

            <b-nav-item class="no_more_left_padding">
              <div class="position-relative">
                <img
                  src="~assets/images/Profile_Pic.png"
                  class="ms-1 me-0 custom_width_iz_1 pb-1"
                  alt=""
                />
                <div class="">
                  <i class="fas fa-caret-down green z_index_11"></i>
                </div>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- <hr style="margin-top: -19px; color: lightgrey" /> -->
  </div>
</template>

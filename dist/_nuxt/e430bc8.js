(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{277:function(t,e,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("5e1856ac",content,!0,{sourceMap:!1})},282:function(t,e,o){t.exports=o.p+"img/Prodigy.bed7897.png"},291:function(t,e,o){"use strict";o(277)},292:function(t,e,o){var r=o(54)(!1);r.push([t.i,'a[data-v-2b1cce70]{color:#000}.right-arrow[data-v-2b1cce70]{display:none}a.nuxt-link-exact-active[data-v-2b1cce70]{color:#7dce95!important;display:block}a.nuxt-link-exact-active .dashboard_sidebar_content .white-svg[data-v-2b1cce70]{fill:#7dce95}a.nuxt-link-exact-active .dashboard_sidebar_content .white-svg2[data-v-2b1cce70]{stroke:#7dce95}a.nuxt-link-exact-active .right-arrow[data-v-2b1cce70]{display:flex}.white-svg[data-v-2b1cce70]{fill:#000}.dashboard_sidebar_content:hover .hover_white[data-v-2b1cce70]{color:#fff!important}.dashboard_sidebar_content:hover .white-svg[data-v-2b1cce70]{fill:#fff!important}.white-svg2[data-v-2b1cce70]{stroke:#000}.dashboard_sidebar_content:hover .white-svg2[data-v-2b1cce70]{stroke:#fff!important}.dash_w_lg[data-v-2b1cce70]{width:200px}.dash_w_sm[data-v-2b1cce70]{width:50px}.dashboard_sidebar_2[data-v-2b1cce70]{overflow:hidden;background:#fff;box-shadow:0 63.1647px 50.5318px rgba(141,145,160,.0196802),0 26.3887px 21.111px rgba(141,145,160,.0282725),0 14.1087px 11.2869px rgba(141,145,160,.035),0 7.9092px 6.32736px rgba(141,145,160,.0417275),0 4.20052px 3.36041px rgba(141,145,160,.0503198),0 1.74793px 1.39834px rgba(0,0,0,.07);border-radius:3.15824px}.project_drop[data-v-2b1cce70]{display:flex!important;justify-content:space-between!important;flex-direction:column!important;padding:0!important}.project_drop .dropdown-menu[data-v-2b1cce70]{position:relative!important;border:none!important;margin-top:-40px;margin-bottom:30px}.project_drop .dropdown-menu ul li[data-v-2b1cce70]:before{content:"";color:red}.project_drop .dropdown-menu li[data-v-2b1cce70]{color:grey}.project_drop .dropdown-menu li[data-v-2b1cce70]:hover{color:#000!important}.dashboard_sidebar_content[data-v-2b1cce70]{display:flex;justify-content:flex-start;align-items:center;padding-left:14px;cursor:pointer;flex-wrap:nowrap!important;width:100%!important}.dashboard_sidebar_content[data-v-2b1cce70]:hover{background-color:#52be71!important;color:#fff!important;fill:#fff!important;width:100%!important;transition:0s}.btn-link i[data-v-2b1cce70],.btn-link span[data-v-2b1cce70]{color:#000!important}.ser-input[data-v-2b1cce70]::-moz-placeholder{font-weight:700;color:#000}.ser-input[data-v-2b1cce70]::placeholder{font-weight:700;color:#000}',""]),t.exports=r},296:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard_sidebar_content mt-4 pt-3 pb-3",staticStyle:{"background-color":"rgb(240, 240, 240)"}},[r("img",{attrs:{src:o(282),alt:""}}),t._v(" "),r("p",{staticClass:"mb-0 ms-3"},[t._v("Prodigy Dan")]),t._v(" "),r("i",{staticClass:"fas fa-ellipsis-h ms-4"})])}],n={methods:{sidebartoogle:function(){document.getElementById("sidebar").classList.remove("dash_w_lg"),document.getElementById("sidebar").classList.add("dash_w_sm"),document.getElementById("hum").style.display="block",document.getElementById("times").style.display="none",document.getElementById("hed").style.display="none",document.querySelector(".ws-cs-dropdown .fa-suitcase").style="margin-left: 0px;"},sidebartoogleLg:function(){document.getElementById("sidebar").classList.remove("dash_w_sm"),document.getElementById("sidebar").classList.add("dash_w_lg"),document.getElementById("hum").style.display="none",document.getElementById("times").style.display="block",document.getElementById("hed").style.display="block",document.querySelector(".ws-cs-dropdown .fa-suitcase").style="margin-left: -14px;"}},mounted:function(){document.querySelector(".ws-cs-dropdown .fa-suitcase").style="margin-left: -14px;"}},l=(o(291),o(42)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"dashboard_sidebar_2 dash_w_lg",attrs:{id:"sidebar"}},[o("div",{staticClass:"d-flex justify-content-between mx-1 align-items-center mt-0 pt-0 p-2"},[o("p",{staticClass:"mb-0 fs-5 fw-bolder",attrs:{id:"hed"}},[t._v("Dashboard")]),t._v(" "),o("div",{staticClass:"invisible"},[o("i",{staticClass:"fa fa-times fs-5 mt-2",attrs:{id:"times","aria-hidden":"true"},on:{click:t.sidebartoogle}}),t._v(" "),o("i",{staticClass:"fa ms-1 fa-bars fs-5 for_hide mt-2",attrs:{id:"hum","aria-hidden":"true"},on:{click:t.sidebartoogleLg}})])]),t._v(" "),o("b-input-group",{staticClass:"w-100 flex-nowrap",scopedSlots:t._u([{key:"prepend",fn:function(){return[o("b-input-group-text",{staticStyle:{border:"none"}},[o("i",{staticClass:"fa fa-search fs-4 py-1"})])]},proxy:!0}])},[t._v(" "),o("b-form-input",{staticClass:"ser-input",staticStyle:{border:"none"},attrs:{placeholder:"Search"}})],1),t._v(" "),o("NuxtLink",{attrs:{to:"/payment_setting"}},[o("div",{staticClass:"dashboard_sidebar_content pt-4 pb-3"},[o("svg",{staticClass:"white-svg",attrs:{width:"25",height:"25",viewBox:"0 0 39 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("g",{attrs:{"clip-path":"url(#clip0_4038_1177)"}},[o("path",{staticClass:"white-svg",attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M28.6165 20.9307H34.0273V19.9088C33.7179 18.791 33.2253 18.0332 32.5872 17.5722C31.9491 17.1121 31.1218 16.9153 30.1508 16.9219L7.95949 16.9268C7.41303 16.9268 6.97082 16.4946 6.97082 15.9623C6.97082 15.4292 7.41303 14.9978 7.95949 14.9978L30.1248 15.0003C31.5195 14.9872 32.7503 15.2972 33.7608 16.0279C33.8516 16.0935 33.9407 16.1624 34.0273 16.2346V15.6548C34.0273 14.7543 33.6465 13.9308 33.0336 13.333C32.4258 12.7351 31.5834 12.3652 30.6552 12.3652H29.9415L29.8498 12.3611L29.5009 13.6372H27.1033L28.5257 8.43182C27.3302 8.12017 26.6173 6.91457 26.9376 5.74833L19.0257 3.68077C18.7054 4.84619 17.4704 5.5433 16.2766 5.23083L13.9537 13.6372H11.4812L15.2434 0L32.0323 4.38855L30.377 10.4354H30.6552C32.1223 10.4354 33.4598 11.0251 34.43 11.9707C35.4019 12.9147 36.0047 14.222 36.0047 15.6548V20.9848C36.5755 21.0955 37.0858 21.3711 37.4818 21.7574C38.0039 22.2667 38.3292 22.972 38.3292 23.7487V30.0924C38.3292 30.9019 37.9896 31.6384 37.4448 32.169C37.0555 32.5487 36.5595 32.8268 36.0047 32.9539V36.7807C36.0047 38.2126 35.401 39.5191 34.4309 40.4655L34.3686 40.5213C33.4018 41.4341 32.0895 42 30.6552 42H5.67865C4.20993 42 2.87068 41.412 1.90051 40.4663C0.932011 39.5215 0.329224 38.2167 0.329224 36.7807V15.6548C0.329224 14.2179 0.931171 12.913 1.89967 11.9682C2.86816 11.0235 4.20657 10.4354 5.67865 10.4354H8.79936L8.81281 10.4362L11.2971 1.43524L13.6671 2.05444L10.411 13.6372H7.92922L8.28064 12.3652H5.67865C4.75303 12.3652 3.9098 12.7359 3.29776 13.3321C2.68657 13.9284 2.30657 14.7518 2.30657 15.6548V36.7807C2.30657 37.6836 2.68741 38.5054 3.29944 39.1016C3.91148 39.6995 4.75555 40.071 5.67865 40.071H30.6552C31.5573 40.071 32.3821 39.7184 32.9874 39.1484L33.0328 39.1008C33.6456 38.5038 34.0273 37.6803 34.0273 36.7807V33.0318H28.6165C26.9452 33.0318 25.4252 32.3642 24.3272 31.2931L24.2238 31.1824C23.1847 30.1162 22.5441 28.6793 22.5441 27.108V26.8537C22.5441 25.2307 23.2276 23.7511 24.3272 22.6759L24.3382 22.6653C25.4395 21.595 26.9544 20.9307 28.6165 20.9307ZM20.5701 13.2985C22.0153 13.6758 23.5033 12.8392 23.8901 11.4286C24.2776 10.0188 23.4184 8.56714 21.9733 8.18988C20.5272 7.81262 19.0392 8.64916 18.6525 10.0598C18.2657 11.4696 19.1249 12.9204 20.5701 13.2985ZM30.7881 25.348L30.7931 25.3521C31.712 26.2509 31.7095 27.7132 30.7914 28.6113L30.7872 28.6162C29.8658 29.5126 28.3668 29.5101 27.4454 28.6146L27.4412 28.6105C26.5223 27.7116 26.5248 26.2493 27.4429 25.3504L27.4471 25.3463C28.3685 24.4499 29.8675 24.4515 30.7881 25.348Z",fill:"#fff"}})]),t._v(" "),o("defs",[o("clipPath",{attrs:{id:"clip0_4038_1177"}},[o("rect",{attrs:{width:"38",height:"42",fill:"#fff",transform:"translate(0.329224)"}})])])]),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("My Wallet")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("div",{staticClass:"ws-cs-dropdown dashboard_sidebar_content py-2"},[o("b-dropdown",{staticClass:"project_drop",attrs:{id:"dropdown-1",variant:"link","toggle-class":"text-decoration-none"},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("svg",{staticClass:"fa-suitcase",attrs:{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{staticClass:"white-svg2",attrs:{d:"M14.3216 18.4807V3.25589C14.3216 2.75115 14.1211 2.26709 13.7642 1.91019C13.4073 1.55329 12.9233 1.35278 12.4185 1.35278H8.61233C8.1076 1.35278 7.62354 1.55329 7.26663 1.91019C6.90973 2.26709 6.70923 2.75115 6.70923 3.25589V18.4807M2.9031 5.14575H18.1279C19.179 5.14575 20.031 5.9978 20.031 7.04885V16.5644C20.031 17.6154 19.179 18.4675 18.1279 18.4675H2.9031C1.85205 18.4675 1 17.6154 1 16.5644V7.04885C1 5.9978 1.85205 5.14575 2.9031 5.14575Z",stroke:"black","stroke-width":"1.89494","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),o("span",{staticClass:"mb-0 ms-3 me-5 hover_white"},[t._v("Projects")])]},proxy:!0}])},[t._v(" "),o("b-dropdown-item",[o("ul",{staticClass:"ul_custom_iz"},[o("li",{staticClass:"live_iz"},[t._v("Live")])])]),t._v(" "),o("b-dropdown-item",[o("ul",{staticClass:"ul_custom_iz"},[o("li",{staticClass:"Completed_iz"},[t._v("Completed")])])]),t._v(" "),o("b-dropdown-item",[o("ul",{staticClass:"ul_custom_iz"},[o("li",{staticClass:"Paused_iz"},[t._v("Paused")])])]),t._v(" "),o("b-dropdown-item",[o("ul",{staticClass:"ul_custom_iz"},[o("li",{staticClass:"canceled_iz"},[t._v("canceled")])])])],1)],1),t._v(" "),o("NuxtLink",{attrs:{to:"/Myconnection"}},[o("div",{staticClass:"dashboard_sidebar_content pt-4 pb-3"},[o("i",{staticClass:"far fa-comment-alt fs-5"}),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("My Connections")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/Analytics"}},[o("div",{staticClass:"dashboard_sidebar_content pt-3 pb-3"},[o("svg",{attrs:{width:"21",height:"22",viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{staticClass:"white-svg2",attrs:{d:"M19.2797 15.1135C18.6743 16.5451 17.7275 17.8066 16.522 18.7878C15.3164 19.7689 13.8889 20.4398 12.3642 20.7418C10.8395 21.0437 9.26406 20.9676 7.77557 20.5201C6.28708 20.0725 4.93088 19.2671 3.82556 18.1744C2.72023 17.0816 1.89942 15.7347 1.4349 14.2514C0.970368 12.7681 0.876265 11.1936 1.16081 9.66556C1.44536 8.13751 2.0999 6.70243 3.0672 5.48577C4.0345 4.26912 5.28511 3.30795 6.70969 2.68628M20.0314 11.4186C20.0314 10.169 19.7853 8.93163 19.3071 7.77716C18.8289 6.62268 18.128 5.5737 17.2444 4.6901C16.3608 3.80651 15.3118 3.1056 14.1573 2.6274C13.0029 2.1492 11.7655 1.90308 10.5159 1.90308V11.4186H20.0314Z","stroke-width":"1.89494","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("Analytics")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/meetup&diary"}},[o("div",{staticClass:"dashboard_sidebar_content pt-3 pb-3"},[o("i",{staticClass:"far fs-5 fa-calendar"}),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("Meetup & Diary")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/Cases"}},[o("div",{staticClass:"dashboard_sidebar_content pt-3 pb-3"},[o("svg",{attrs:{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{staticClass:"white-svg",attrs:{d:"M14.1444 0.345947H5.85556L0 6.2015V14.4904L5.85556 20.3459H14.1444L20 14.4904V6.2015L14.1444 0.345947ZM17.7778 13.5682L13.2222 18.1237H6.77778L2.22222 13.5682V7.12373L6.77778 2.56817H13.2222L17.7778 7.12373V13.5682Z",fill:"black"}}),t._v(" "),o("path",{staticClass:"white-svg",attrs:{d:"M10 15.9015C10.6137 15.9015 11.1111 15.404 11.1111 14.7904C11.1111 14.1767 10.6137 13.6793 10 13.6793C9.38635 13.6793 8.88889 14.1767 8.88889 14.7904C8.88889 15.404 9.38635 15.9015 10 15.9015Z",fill:"black"}}),t._v(" "),o("path",{staticClass:"white-svg",attrs:{d:"M8.88889 4.79039H11.1111V12.5682H8.88889V4.79039Z",fill:"black"}})]),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("Cases")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[o("div",{staticClass:"dashboard_sidebar_content pt-3 pb-3"},[o("svg",{attrs:{width:"22",height:"18",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{staticClass:"white-svg2",attrs:{d:"M16.8707 14.859L16.88 14.866L18.6283 16.1772C18.6903 16.22 18.7154 16.2169 18.7409 16.2137L18.741 16.2137L16.8707 14.859ZM16.8707 14.859L16.8612 14.8522M16.8707 14.859L16.8612 14.8522M16.8612 14.8522C16.8461 14.8414 16.8371 14.8333 16.8325 14.8287L16.8612 14.8522ZM18.7693 16.0329L18.76 16.026L17.0116 14.7147C16.9497 14.6719 16.9246 14.6751 16.8991 14.6782L16.899 14.6783L18.7693 16.0329ZM18.7693 16.0329L18.7788 16.0397M18.7693 16.0329L18.7788 16.0397M18.7788 16.0397C18.7939 16.0505 18.8029 16.0586 18.8075 16.0632L18.7788 16.0397ZM16.8707 2.83295L16.8612 2.83971C16.8461 2.85053 16.8371 2.85864 16.8325 2.86323L16.8707 2.83295ZM16.8707 2.83295L16.88 2.82597M16.8707 2.83295L16.88 2.82597M16.88 2.82597L18.6283 1.51472M16.88 2.82597L18.6283 1.51472M18.7693 1.659L18.7788 1.65224C18.7939 1.64141 18.8029 1.63331 18.8075 1.62872L18.7693 1.659ZM18.7693 1.659L18.76 1.66597M18.7693 1.659L18.76 1.66597M18.76 1.66597L17.0116 2.97724M18.76 1.66597L17.0116 2.97724M11.5368 3.23597L11.032 4.0992C11.0048 4.08328 10.9866 4.076 10.9774 4.07288C10.9699 4.07578 10.9568 4.08164 10.938 4.09287C10.9377 4.09307 10.9373 4.09327 10.937 4.09347L7.11721 6.40183L6.87869 6.54597H6.6H2.2C1.94319 6.54597 1.72912 6.60867 1.53394 6.74597H2.2H6.93126L9.39068 5.2904L10.9 4.39713V6.15097V11.541V13.2948L9.39068 12.4016L6.93126 10.946H2.2H1.53487C1.72995 11.0834 1.94373 11.146 2.2 11.146H3.3H4.3V12.146V15.546H4.5V12.146V11.146H5.5H6.6H6.87869L7.11721 11.2901L10.937 13.5985C10.9373 13.5987 10.9376 13.5989 10.9379 13.599C10.9568 13.6103 10.9699 13.6162 10.9774 13.6191C10.9867 13.6159 11.0048 13.6087 11.032 13.5927L11.5368 14.456M11.5368 3.23597C11.9123 3.45597 12.1 3.77681 12.1 4.19847V13.4935C12.1 13.9151 11.9123 14.236 11.5368 14.456M11.5368 3.23597L11.0313 4.09877C11.065 4.11857 11.0828 4.1337 11.0906 4.14116C11.0927 4.14319 11.0942 4.14478 11.0952 4.14594L6.6 5.54597L10.4225 3.23597C10.7892 3.01597 11.1606 3.01597 11.5368 3.23597ZM11.5368 14.456C11.1606 14.676 10.7892 14.676 10.4225 14.456L11.0952 13.546C11.0942 13.5472 11.0927 13.5488 11.0906 13.5508C11.0828 13.5582 11.065 13.5734 11.0313 13.5932L11.5368 14.456ZM17.0116 2.97724C16.9497 3.02002 16.9246 3.01689 16.8991 3.01371L16.899 3.0137L17.0116 2.97724ZM18.6283 1.51472C18.6903 1.47192 18.7154 1.47505 18.7409 1.47824L18.741 1.47825L18.6283 1.51472ZM18.6251 8.92329L18.6227 8.92084C18.6138 8.91199 18.6097 8.90634 18.6083 8.90416C18.6069 8.90211 18.6065 8.90117 18.6062 8.90054C18.606 8.89985 18.6046 8.89647 18.6032 8.88891C18.6018 8.88115 18.6 8.8673 18.6 8.84597C18.6 8.82465 18.6018 8.81073 18.6032 8.80285C18.6047 8.79517 18.606 8.7916 18.6064 8.79068C18.6068 8.78981 18.6073 8.78861 18.6089 8.78627C18.6105 8.78381 18.6148 8.77789 18.6239 8.76878C18.6327 8.76001 18.6383 8.75597 18.6405 8.75451C18.6425 8.75312 18.6436 8.75269 18.6443 8.75238C18.6451 8.75205 18.6487 8.75067 18.6565 8.74924C18.6644 8.74778 18.6785 8.74597 18.7 8.74597H20.9C20.9215 8.74597 20.9356 8.74778 20.9436 8.74924C20.9513 8.75067 20.9549 8.75205 20.9557 8.75238C20.9565 8.75269 20.9575 8.75312 20.9595 8.75451C20.9617 8.75597 20.9673 8.76001 20.9761 8.76878C20.9852 8.77789 20.9895 8.78381 20.9911 8.78627C20.9927 8.78861 20.9932 8.78981 20.9936 8.79068C20.994 8.7916 20.9953 8.79517 20.9968 8.80285C20.9982 8.81073 21 8.82465 21 8.84597C21 8.8673 20.9982 8.88115 20.9968 8.88891C20.9954 8.89647 20.994 8.89985 20.9938 8.90054C20.9935 8.90117 20.9931 8.90211 20.9917 8.90416C20.9903 8.90634 20.9862 8.91199 20.9773 8.92083L20.9749 8.9233C20.966 8.93217 20.9604 8.93625 20.9582 8.93771C20.9561 8.9391 20.9552 8.93949 20.9546 8.93974C20.9539 8.94002 20.9505 8.94136 20.9429 8.94275C20.9352 8.94418 20.9213 8.94597 20.9 8.94597H18.7C18.6787 8.94597 18.6648 8.94418 18.6571 8.94275C18.651 8.94163 18.6476 8.94054 18.6461 8.94001C18.6458 8.93989 18.6456 8.9398 18.6454 8.93974C18.6448 8.93949 18.6439 8.9391 18.6418 8.93771C18.6396 8.93625 18.634 8.93217 18.6251 8.92329ZM18.7663 16.1847C18.7554 16.1999 18.7473 16.2088 18.7428 16.2135L18.8077 16.065L18.8077 16.0651C18.811 16.0916 18.8143 16.1175 18.7663 16.1847ZM16.8737 14.7072C16.8846 14.6921 16.8927 14.6831 16.8972 14.6785L16.8323 14.8269L16.8323 14.8268C16.829 14.8004 16.8257 14.7744 16.8737 14.7072ZM1.2 7.08019V7.74597V9.94597V10.6111C1.06261 10.416 1 10.2022 1 9.94597V7.74597C1 7.48985 1.06255 7.27578 1.2 7.08019Z",stroke:"black","stroke-width":"2"}})]),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("Campaign")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[o("div",{staticClass:"dashboard_sidebar_content pt-3 pb-3"},[o("svg",{attrs:{width:"22",height:"23",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{staticClass:"white-svg2",attrs:{d:"M10.7143 8.34595V7.84595H10.2143H8.35714V0.845947H13.6429V7.84595H11.7857H11.2857V8.34595V10.3459V10.8459H11.7857H19.1429V14.3459V14.8459H19.6429H21.5V21.8459H16.2143V14.8459H18.0714H18.5714V14.3459V12.3459V11.8459H18.0714H11.7857H11.2857V12.3459V14.3459V14.8459H11.7857H13.6429V21.8459H8.35714V14.8459H10.2143H10.7143V14.3459V12.3459V11.8459H10.2143H3.92857H3.42857V12.3459V14.3459V14.8459H3.92857H5.78571V21.8459H0.5V14.8459H2.35714H2.85714V14.3459V10.8459H10.2143H10.7143V10.3459V8.34595ZM9.42857 1.84595H8.92857V2.34595V6.34595V6.84595H9.42857H12.5714H13.0714V6.34595V2.34595V1.84595H12.5714H9.42857ZM1.57143 15.8459H1.07143V16.3459V20.3459V20.8459H1.57143H4.71429H5.21429V20.3459V16.3459V15.8459H4.71429H1.57143ZM9.42857 15.8459H8.92857V16.3459V20.3459V20.8459H9.42857H12.5714H13.0714V20.3459V16.3459V15.8459H12.5714H9.42857ZM17.2857 15.8459H16.7857V16.3459V20.3459V20.8459H17.2857H20.4286H20.9286V20.3459V16.3459V15.8459H20.4286H17.2857Z",stroke:"black"}})]),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("Activities")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("hr",{staticClass:"text-muted my-4"}),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[o("div",{staticClass:"dashboard_sidebar_content pt-3 pb-3"},[o("i",{staticClass:"far fa-bell fs-4"}),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("Notifications")]),t._v(" "),o("span",{staticClass:"ms-3"},[o("i",{staticClass:"fas fa-angle-right right-arrow"})])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[o("div",{staticClass:"dashboard_sidebar_content pt-3 pb-3 mb-2"},[o("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{staticClass:"white-svg2",attrs:{d:"M10.496 13.6464C11.9513 13.6464 13.1311 12.4666 13.1311 11.0113C13.1311 9.55598 11.9513 8.37622 10.496 8.37622C9.04072 8.37622 7.86096 9.55598 7.86096 11.0113C7.86096 12.4666 9.04072 13.6464 10.496 13.6464Z",stroke:"black","stroke-width":"1.89494","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),o("path",{staticClass:"white-svg2",attrs:{d:"M17.1617 13.681C17.0448 13.9459 17.0099 14.2398 17.0616 14.5247C17.1133 14.8097 17.2491 15.0726 17.4516 15.2796L17.5043 15.3323C17.6676 15.4955 17.7972 15.6892 17.8856 15.9025C17.974 16.1157 18.0195 16.3443 18.0195 16.5752C18.0195 16.806 17.974 17.0346 17.8856 17.2479C17.7972 17.4611 17.6676 17.6549 17.5043 17.818C17.3411 17.9814 17.1474 18.111 16.9341 18.1994C16.7209 18.2878 16.4923 18.3333 16.2614 18.3333C16.0306 18.3333 15.802 18.2878 15.5887 18.1994C15.3754 18.111 15.1817 17.9814 15.0185 17.818L14.9658 17.7653C14.7588 17.5629 14.4959 17.427 14.211 17.3754C13.926 17.3237 13.6322 17.3586 13.3672 17.4755C13.1074 17.5868 12.8859 17.7717 12.7298 18.0074C12.5738 18.243 12.49 18.5192 12.4889 18.8018V18.9511C12.4889 19.417 12.3038 19.8639 11.9743 20.1933C11.6449 20.5228 11.1981 20.7078 10.7322 20.7078C10.2663 20.7078 9.81943 20.5228 9.48999 20.1933C9.16054 19.8639 8.97546 19.417 8.97546 18.9511V18.8721C8.96866 18.5813 8.87455 18.2994 8.70537 18.0628C8.5362 17.8263 8.29977 17.6461 8.02684 17.5458C7.76191 17.4288 7.46803 17.394 7.1831 17.4456C6.89816 17.4973 6.63524 17.6331 6.42823 17.8356L6.37553 17.8883C6.21238 18.0516 6.01863 18.1812 5.80537 18.2696C5.59211 18.358 5.36352 18.4035 5.13266 18.4035C4.9018 18.4035 4.6732 18.358 4.45994 18.2696C4.24668 18.1812 4.05294 18.0516 3.88979 17.8883C3.72645 17.7252 3.59688 17.5314 3.50848 17.3182C3.42007 17.1049 3.37457 16.8763 3.37457 16.6454C3.37457 16.4146 3.42007 16.186 3.50848 15.9727C3.59688 15.7595 3.72645 15.5657 3.88979 15.4026L3.94249 15.3499C4.14498 15.1429 4.28082 14.8799 4.33248 14.595C4.38414 14.3101 4.34927 14.0162 4.23234 13.7513C4.121 13.4915 3.93612 13.2699 3.70047 13.1138C3.46482 12.9578 3.18867 12.874 2.90603 12.8729H2.75671C2.2908 12.8729 1.84397 12.6878 1.51453 12.3584C1.18508 12.0289 1 11.5821 1 11.1162C1 10.6503 1.18508 10.2035 1.51453 9.87402C1.84397 9.54457 2.2908 9.35949 2.75671 9.35949H2.83576C3.12649 9.35269 3.40845 9.25859 3.64499 9.08941C3.88152 8.92023 4.06169 8.6838 4.16208 8.41087C4.279 8.14594 4.31388 7.85207 4.26221 7.56713C4.21055 7.2822 4.07471 7.01927 3.87222 6.81226L3.81952 6.75956C3.65619 6.59641 3.52661 6.40267 3.43821 6.18941C3.3498 5.97614 3.3043 5.74755 3.3043 5.51669C3.3043 5.28583 3.3498 5.05724 3.43821 4.84398C3.52661 4.63072 3.65619 4.43697 3.81952 4.27382C3.98267 4.11049 4.17641 3.98091 4.38967 3.89251C4.60294 3.8041 4.83153 3.7586 5.06239 3.7586C5.29325 3.7586 5.52184 3.8041 5.7351 3.89251C5.94837 3.98091 6.14211 4.11049 6.30526 4.27382L6.35796 4.32652C6.56497 4.52901 6.8279 4.66485 7.11283 4.71651C7.39776 4.76818 7.69164 4.7333 7.95657 4.61638H8.02684C8.28663 4.50503 8.50819 4.32016 8.66425 4.0845C8.82031 3.84885 8.90406 3.57271 8.90519 3.29006V3.14074C8.90519 2.67483 9.09027 2.22801 9.41972 1.89856C9.74917 1.56911 10.196 1.38403 10.6619 1.38403C11.1278 1.38403 11.5746 1.56911 11.9041 1.89856C12.2335 2.22801 12.4186 2.67483 12.4186 3.14074V3.21979C12.4197 3.50244 12.5035 3.77858 12.6595 4.01424C12.8156 4.24989 13.0372 4.43477 13.297 4.54611C13.5619 4.66303 13.8558 4.69791 14.1407 4.64625C14.4256 4.59458 14.6886 4.45875 14.8956 4.25625L14.9483 4.20355C15.1114 4.04022 15.3052 3.91065 15.5184 3.82224C15.7317 3.73384 15.9603 3.68833 16.1911 3.68833C16.422 3.68833 16.6506 3.73384 16.8639 3.82224C17.0771 3.91065 17.2709 4.04022 17.434 4.20355C17.5973 4.3667 17.7269 4.56045 17.8153 4.77371C17.9037 4.98697 17.9492 5.21556 17.9492 5.44642C17.9492 5.67728 17.9037 5.90588 17.8153 6.11914C17.7269 6.3324 17.5973 6.52614 17.434 6.68929L17.3813 6.742C17.1788 6.94901 17.043 7.21193 16.9913 7.49686C16.9397 7.7818 16.9745 8.07568 17.0915 8.3406V8.41087C17.2028 8.67066 17.3877 8.89222 17.6233 9.04828C17.859 9.20435 18.1351 9.2881 18.4178 9.28922H18.5671C19.033 9.28922 19.4798 9.47431 19.8093 9.80375C20.1387 10.1332 20.3238 10.58 20.3238 11.0459C20.3238 11.5118 20.1387 11.9587 19.8093 12.2881C19.4798 12.6176 19.033 12.8026 18.5671 12.8026H18.488C18.2054 12.8038 17.9293 12.8875 17.6936 13.0436C17.4579 13.1996 17.2731 13.4212 17.1617 13.681Z",stroke:"black","stroke-width":"1.89494","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),o("p",{staticClass:"mb-0 ms-3 ps-1"},[t._v("Settings")])])]),t._v(" "),t._m(0)],1)])}),r,!1,null,"2b1cce70",null);e.default=component.exports}}]);
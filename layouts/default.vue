<template>
  <div id="app">
    <Nuxt />
    <div id="backgroundHolder">
    </div>
    <combo-header :hsla="hsla" :height="200" :isMobile="isMobile" :logo-path="'~/assets/images/background.jpg'">
      <template v-slot:headerImage>
        <img src="@/assets/images/background.jpg" alt="background">
      </template>
      <template v-slot:headerLogo>
        <img src="@/assets/images/logo.png" alt="logo">
      </template>
      <template v-slot:desktopHeaderContent>
        <div class="centerGrid">
          <div class="locationHolder">
            <h1>wow, local places</h1>
          </div>
          <div class="tagline">
            <h1>Free Immediate</h1>
            <h1>Case Evaluation</h1>
          </div>
        </div>
      </template>
      <template v-slot:mobileLocation>
        <div class="locationHolder">
          <h1>wow, local places</h1>
        </div>
      </template>
      <template v-slot:mobileHeaderContent>
        <div class="centerGrid">
          <div class="tagline">
            <h1>Free Immediate</h1>
            <h1>Case Evaluation</h1>
          </div>
        </div>
      </template>
    </combo-header>
    <div class="mainWrapper">
      <div class="headlines">
        <div class="left">
          <h1>$0 Down Bankruptcy™*</h1>
          <h3>File Now - Pay Attorney Fees Later</h3>
        </div>
        <div class="right">
          <h3>Minnesota's Largest Bankruptcy Law Firm</h3>
          <h5>
            120 Years Of Combined Experience Over 47,000 Clients Trusted Us
          </h5>
        </div>
      </div>
      <div class="row1">
        <quality-list
          :list="[
            'Free Confidential Consultations',
            'Free 720 Program',
            'Free E-Book On Bankruptcy',
            'Affordable Payment Plans',
            'Over 47,000 Clients Trusted Us',
            '120 Years Of Combined Experience',
            'Chapter 7, 13 & Business Bankruptcy',
            'Call Days, Evenings, Or Weekends'
          ]"
          :splitPoint="2"
        >
          <div v-if="isMobile" class="mapHolder">
            <haa-map-base :map-arr="mapArr" :map-selector="0" :border="true" :hsla="hsla"></haa-map-base>
          </div>
        </quality-list>
        <div v-if="!isMobile" class="mapHolder">
          <haa-map-base :map-arr="mapArr" :map-selector="0" :border="true" :hsla="hsla"></haa-map-base>
        </div>
        <score></score>
      </div>
      <div class="row2">
        <!--        <div class="icon-holder">-->
        <!--          <bbb-icon></bbb-icon>-->
        <!--          <bbb-icon :iteration="2"></bbb-icon>-->
        <!--          <bbb-icon :iteration="3"></bbb-icon>-->
        <!--          <bbb-icon :iteration="4"></bbb-icon>-->
        <!--          <google-icon></google-icon>-->
        <!--          <yelp-icon></yelp-icon>-->
        <!--        </div>-->
        <logo-row></logo-row>
      </div>
      <div class="row3">
        <form-controller
          :client-link="'test.com'"
          :post-values="[]"
          :form-type="1"
          :form-test="true"
        ></form-controller>
      </div>
    </div>

    <call-bar :hsla="hsla"></call-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMobile: true,
      mapArr: [
        {
          mapName: "1",
          mapZoom: 8,
          mapCenter: ["44.977161", " -93.265322"],
          mapMarkers: [
            {
              text: "hello",
              location: { lat: 44.731125592643274, lng: -93.16406250000001 }
            }
          ],
          mapPinColors: { pin: "#0c0066", label: "#0c0066", default: true },
          mapPinSizes: { pin: 70, label: 25, default: true }
        },
        {
          mapName: "2",
          mapZoom: 8,
          mapCenter: ["44.977161", " -93.265322"],
          mapMarkers: [
            {
              text: "f",
              location: { lat: 45.03083274759959, lng: -94.27368164062501 }
            }
          ]
        },
        {
          mapName: "3",
          mapZoom: 8,
          mapCenter: ["44.977161", " -93.265322"],
          mapMarkers: [
            {
              text: "s",
              location: { lat: 44.512176171071054, lng: -93.24096679687501 }
            }
          ],
          mapPinColors: { pin: "#006614", label: "#0c0066", default: false }
        }
      ],
      hsla: {
        hue: 220,
        saturation: 100,
        lightness: 20,
        alpha: 1
      }
    };
  },
  methods: {
    setMobile() {
      this.isMobile = window.innerWidth <= 640;
    }
  },
  mounted() {
    this.setMobile();
    window.addEventListener("resize", this.setMobile());
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.mainWrapper {
  background: white;
  width: 80%;
  margin: auto;
  padding: 1rem 3rem 1rem 3rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px){
    width: 100%;
  }
}
.centerGrid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  place-items: center;
  @media screen and (max-width: 640px){
    grid-template-columns:1fr;
  }
  .tagline{
    h1{
      margin: 0;
    }
  }
}
.locationHolder{
  @media screen and (max-width: 640px) {
    h1{
      margin: 0;
    }
  }
}
.headlines {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0 2rem 0;
  @media screen and (max-width: 640px){
    grid-template-columns: 1fr;
  }
  .left {
    place-self: center;
    text-align: center;
    h1 {
      font-size: 4rem;
      margin: 0;
      @media screen and (max-width: 640px){
        font-size: 2rem;
      }
    }
    h3{
      font-size: 2rem;
      margin: 0;
    }
  }
  .right {
    text-align: center;
    place-self: center;
    h3{
      font-size: 2rem;
      margin: 0;
    }
    h5{
      font-size: 1.5rem;
      margin: 0;
    }
  }
}
.row1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  .score {
    width: 100%;
    place-self: center;
  }
}
.icon-holder {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
#backgroundHolder {
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
.mapHolder {
  height: 450px;
  width: 450px;
  place-self: center;
  @media screen and (max-width: 640px){
    width: 70vw;
    height: 70vw;
  }
}
</style>

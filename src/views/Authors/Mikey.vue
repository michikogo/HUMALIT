<template>
  <b-container class="window-height content-style">
    <h3 class="members-text">Mikey Bustos</h3>
    <b-row class="members-decription">
      <b-col cols="12" sm="3">
        <b-img
          :src="mikeyBustos"
          fluid
          center
          alt="Responsive image"
          class="home-image"
        ></b-img>
      </b-col>
      <b-col>
        <p>
          Michael John “Mikey” Tumanguil Pestano Bustos is a Filipino-Canadian
          Comedian, Actor, Entrepreneur and YouTuber. Mikey Bustos was born in
          Toronto, Canada to Filipino parents where he gets his Filipino
          heritage from. Bustos is popularly known for his YouTube channel where
          he made “Pilipino bidyos” showcasing a wide range of topics relating
          to the Philippines such as tutorials on the Filipino Accent and How to
          drink like Filipinos to Filipino courting techniques and Filipino
          traditions. He was dubbed as the “Unofficial Ambassador of the
          Philippines to the Internet” by GMA News in 2011. Bustos admitted that
          his tutorial videos are for people of the world to see the unique and
          beautiful culture of the Philippines.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <!-- Context - Reference -->
        <h5 class="video-analysis" id="reference">References</h5>
        <b-link
          href="https://www.gmanetwork.com/news/news/pinoyabroad/244273/no-joke-fil-canadian-comic-mikey-bustos-has-a-serious-side/story/"
          class="main-link"
          >No joke, Fil-Canadian comic Mikey Bustos has a serious side</b-link
        >
        <br />
        <b-link
          href="https://lifestyle.inquirer.net/21841/a-funny-guy-with-a-serious-side/"
          class="main-link"
          >A funny guy with a serious side</b-link
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import mikey from "../../resources/mikey.jpg";
export default {
  data() {
    return {
      mikeyBustos: mikey,
    };
  },
};
</script>

<style scoped>
.home-image {
  object-fit: cover;
  object-position: 100% 100;
  width: fit-content;
  width: 250px;
  padding-bottom: 15px;
  padding-right: 15px;
}

.members-text {
  text-align: center;
  padding-bottom: 20px;
}
.members-decription {
  padding-bottom: 50px;
}
.members-image-row {
  place-content: center;
}
.members-image {
  height: 15vh;
}
.members-text {
  text-align: center;
}
.main-link {
  color: blue !important;
}
.main-link:hover {
  color: blue !important;
  text-decoration: underline;
}
</style>

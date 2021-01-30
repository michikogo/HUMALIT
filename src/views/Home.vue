<template>
  <div class="window-height">
    <b-row class="content-style">
      <router-link to="/maintext">
        <!-- Title -->
        <h3>Dasalan and Tocsohan</h3>
        <!-- Image -->
        <b-img
          :src="image"
          fluid
          alt="Responsive image"
          class="home-image"
        ></b-img>
        <!-- Context -->
        <p>
          DASALAN AT TOCSOHAN <br />
          by Marcelo H. Del Pilar <br />
          Ang Tanda <br />
          Ang tanda nang cara-i-cruz ang ipangadya mo sa amin ....
          <span class="home-readMore">Read More</span>
        </p>
      </router-link>
    </b-row>

    <b-row class="content-style">
      <router-link to="/supportingtext">
        <h3>Culture: Being Forgotten & The Main RRL</h3>
        <p>
          The text discusses how most Filipino’s of today’s generation have
          forgotten their own culture and have changed due to technological
          advancements and colonial mentality of the Philippine Society. It
          talks about how culture is not just about the arts but also the
          society’s way of thinking and modes of life. The text ends strong by
          asking the reader to stop mimicking other cultures and instead rebirth
          our own culture as Filipinos. What is interesting about this topic is
          that it uses the word mimicking specifically, and mimicking would
          entail copying every single aspect. As the Philippines have been ....
          <span class="home-readMore">Read More</span>
        </p>
      </router-link>
    </b-row>

    <b-row class="content-style" style="home-link">
      <router-link to="/video1">
        <h3>Filipino National Heroes Rap</h3>
        <div class="home-video">
          <iframe
            width="100%"
            height="349"
            src="https://www.youtube.com/embed/zLN9k27O7zI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <span>
          This video focuses on the national heroes of the Philippines. This
          shows our history when we first got colonized by the Spaniards and how
          we are ... <span class="home-readMore">Read More</span>
        </span>
      </router-link>
    </b-row>

    <b-row class="content-style" style="home-link">
      <router-link to="/video2">
        <h3>Proud of My Accent</h3>
        <div class="home-video">
          <iframe
            width="100%"
            height="349"
            src="https://www.youtube.com/embed/SaV4sFw5mAw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <span>
          The video of Mikey Bustos focuses on the Filipino Accent. At the start
          of the video he stated that he can speak like an American, Australian,
          ... <span class="home-readMore">Read More</span>
        </span>
      </router-link>
    </b-row>

    <b-row class="content-style" style="home-link">
      <router-link to="/video3">
        <h3>Filipino Christmas</h3>
        <div class="home-video">
          <iframe
            width="100%"
            height="349"
            src="https://www.youtube.com/embed/RLLpRLPhacs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <span>
          We can see here that Mikey Bustos is speaking with the Filipino accent
          since he is proud of our accent and this accent represents our
          country. In this video ...
          <span class="home-readMore">Read More</span>
        </span>
      </router-link>
    </b-row>
  </div>
</template>

<script>
import mainTextImage from "../assets/text1.jpg";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      image: mainTextImage,
    };
  },
};
</script>

<style scoped>
.home-image {
  object-fit: cover;
  object-position: 100% 100;
  width: fit-content;
  height: 250px;
  padding-bottom: 15px;
}

.home-link {
  columns: black;
}

.home-video {
  text-align: center;
}

.home-readMore {
  color: blue;
}

.home-readMore:hover {
  color: blue;
  text-decoration: underline;
}
</style>

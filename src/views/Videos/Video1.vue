<template>
  <div class="window-height">
    <b-row>
      <b-col cols="3">
        <SideNav title="Filipino National Heroes Rap" :contents="content" />
      </b-col>
      <b-col class="content-pading">
        <b-row class="content-style">
          <h3>Filipino National Heroes Rap</h3>
          <div class="video-video">
            <iframe
              width="100%"
              height="349"
              src="https://www.youtube.com/embed/zLN9k27O7zI"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <h5 class="video-analysis">Analysis</h5>
          <span>
            This video focuses on the national heroes of the Philippines. This
            shows our history when we first got colonized by the Spaniards and
            how we are different from our colonizers. This makes us aware of our
            own national heroes and how we have them to thank for making the
            philippines its own country, not a province of spain or a state of
            the united states of america. We are our own people and we are
            unique. This is the lesson that Mikey Bustos wanted us to learn.
          </span>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SideNav from "../../components/SideNav.vue";
export default {
  name: "Video1",
  components: { SideNav },
  data() {
    return {
      contents: [{ key: 1, name: "Video", section: "/video1#video" }],
    };
  },
};
</script>

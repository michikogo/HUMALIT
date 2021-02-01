<template>
  <div class="window-height">
    <b-row>
      <b-col cols="3">
        <SideNav title="Filipino Christmas" :contents="contents" />
      </b-col>
      <b-col class="content-pading">
        <b-row class="content-style">
          <b-col>
            <h3>Filipino Christmas</h3>
            <div id="video" class="video-video">
              <iframe
                width="100%"
                height="349"
                src="https://www.youtube.com/embed/RLLpRLPhacs"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <h5 class="video-analysis" id="analysis">Analysis</h5>
            <span>
              We can see here that
              <router-link to="/mikey-bustos">
                <span class="author-color">Mikey Bustos</span>
              </router-link>
              is speaking with the Filipino accent since he is proud of our
              accent and this accent represents our country. In this video he
              compares how different the Christmas celebration is in Canada and
              in the Philippines. This video shows how the filipino people are
              frugal with the Parol having its original plastic and a plastic
              Christmas tree. Moreover, this video shows our traditions where
              Filipinos look forward to the simbang gabi, how we have noche
              buena, and grandparents giving money to their grandchildren. This
              video shows our culture when celebrating christmas. This shows us
              that we shouldn’t be ashamed of our culture as we are one of a
              kind.
            </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SideNav from "../../components/SideNav.vue";
export default {
  name: "Video3",
  components: { SideNav },
  data() {
    return {
      contents: [
        {
          key: 1,
          name: "Filipino Christmas (Video)",
          section: "/video3#video",
        },
        { key: 2, name: "Analysis", section: "/video3#analysis" },
      ],
    };
  },
};
</script>

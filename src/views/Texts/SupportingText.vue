<template>
  <div class="window-height">
    <b-row>
      <b-col cols="3">
        <SideNav title="Supporting Texts" :contents="contents" />
      </b-col>
      <b-col class="content-pading">
        <b-row class="content-style">
          <!-- Title -->
          <h3>Culture: Being Forgotten? & The Main RRL</h3>

          <!-- Context -->
          <h5 class="video-analysis">Analysis</h5>
          <span>
            The text discusses how most Filipino’s of today’s generation have
            forgotten their own culture and have changed due to technological
            advancements and colonial mentality of the Philippine Society. It
            talks about how culture is not just about the arts but also the
            society’s way of thinking and modes of life. The text ends strong by
            asking the reader to stop mimicking other cultures and instead
            rebirth our own culture as Filipinos. What is interesting about this
            topic is that it uses the word mimicking specifically, and mimicking
            would entail copying every single aspect. As the Philippines have
            been colonized by many countries, some leaving more of an impact
            than others, it’s impossible to say that we must abolish all
            “borrowed” culture norms from the other countries. This is because
            our culture what it is today, is a mixture of many different
            cultures, this can be seen in our cuisine, language etc. The article
            only wishes to further drive the point that our true native culture
            is being lost in the borrowed culture and we shouldn’t be mimicking
            instead building upon them.
          </span>
          <!-- Context - Reference -->
          <h5 class="video-analysis">Reference</h5>
          <b-link
            href="https://uglywriters.com/2018/01/30/culture-being-forgotten/"
            class="main-link"
          >
            CULTURE: Being Forgotten?</b-link
          >
          <br />
          <b-link
            href="https://notforselle.wordpress.com/2019/05/14/how-can-ph-narratives-of-antiquity-be-made-relevant-to-contemporary-ph-life-culture-and-concerns/?fbclid=IwAR2pgHwUB9HxuEPZLkKAfYOZGs_Twpm3Ry9DOEvFZ7yNBZjIiiBSkUHqI-w"
            class="main-link"
            >How can PH narratives of antiquity be made relevant to contemporary
            PH life, culture and concerns?</b-link
          >
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SideNav from "../../components/SideNav.vue";
export default {
  name: "SupportingText",
  components: { SideNav },
  data() {
    return {
      contents: [{ key: 1, name: "Text", section: "/supportingtext#text" }],
    };
  },
};
</script>

<style scoped>
.main-link {
  color: blue !important;
}
.main-link:hover {
  color: blue !important;
  text-decoration: underline;
}
</style>

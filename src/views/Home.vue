<template>
  <div class="window-height">
    <b-row class="content-style" v-for="content in contents" :key="content">
      <router-link :to="content.link">
        <!-- Title -->
        <h3>{{ content.title }}</h3>
        <!-- Image/ Video -->
        <div v-if="content.typeAsset === 'image'">
          <b-img
            :src="content.asset"
            fluid
            alt="Responsive image"
            class="home-image"
          ></b-img>
        </div>
        <div v-if="content.typeAsset === 'video'" class="home-video">
          <iframe
            width="100%"
            height="349"
            :src="content.asset"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div v-if="content.typeAsset === 'N/A'"></div>
        <!-- Context -->
        <span v-html="content.desc" />
      </router-link>
    </b-row>
    <b-row class="content-style">
      <!-- Title -->
      <h3>Conclusion</h3>

      <!-- Context -->
      <span>
        How can Philippine narratives of antiquity be made relevant to
        contemporary Philippine life, culture, and concerns? To put it in the
        context and perspective of modern society. Although these are seen as
        problems from the past these are still issues faced by the modern day
        Filipino just in a different context. The problem of colonization can be
        seen today as colonial mentality even if we are already an independent
        nation, many of the Filipinos have been influenced to focus more on
        western culture.
        <br />
        <br />
        However, we can see through the videos of Mikey Bustos that there are
        Filipinos living abroad or who aren’t pure Filipinos who are proud of
        the Filipino culture and promote it to the whole world. We can observe
        that Filipinos living in the Philippines are the ones who are suffering
        from colonial mentality.
      </span>
    </b-row>
  </div>
</template>

<script>
import mainTextImage from "../resources/text1.jpg";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      image: mainTextImage,
      contents: [
        {
          id: 1,
          link: "/maintext",
          title: "Dasalan and Tocsohan (Main Text)",
          typeAsset: "image",
          asset: mainTextImage,
          desc: `DASALAN AT TOCSOHAN <br />
          by Marcelo H. Del Pilar <br />
          Ang Tanda <br />
          Ang tanda nang cara-i-cruz ang ipangadya mo sa amin Panginoon naming
          Fraile sa manga bangkay naming, sa ngalan nang Salapi at nang Maputing
          binte, at nang Espiritung..... <span style="color: blue; ">Read More</span>`,
        },
        {
          id: 2,
          link: "/supportingtext",
          title: "Supporting Texts",
          typeAsset: "N/A",
          asset: "",
          desc: `The text discusses how most Filipino’s of today’s generation have
          forgotten their own culture and have changed due to technological
          advancements and colonial mentality of the Philippine Society. It
          talks about how culture is not just about the arts but also the
          society’s way of thinking and modes of life. The text ends strong by
          asking the reader to stop mimicking other cultures and instead rebirth
          our own culture as Filipinos. What is interesting about this topic is
          that it uses the word mimicking specifically, and mimicking would
          entail copying every single aspect. As the Philippines have been
          colonized by many countries, some leaving more of an impact than
          others, it’s impossible to say that we must abolish all “borrowed”
          culture norms from the other countries. This is because our
          culture.... <span style="color: blue; ">Read More</span>`,
        },
        {
          id: 3,
          link: "/video1",
          title: "Filipino National Heroes Rap",
          typeAsset: "video",
          asset: "https://www.youtube.com/embed/zLN9k27O7zI",
          desc: `This video focuses on the national heroes of the Philippines. This shows
          our history when we first got colonized by the Spaniards and how we are different
          from our colonizers. This makes us aware of our own national heroes and how we have
          them to thank for making the philippines its own country, not a province of spain or
          a state of the united states of america. We are our own people and we are unique.
          This is the lesson that Mikey Bustos wanted us to learn.`,
        },
        {
          id: 4,
          link: "/video2",
          title: "Proud of My Accent",
          typeAsset: "video",
          asset: "https://www.youtube.com/embed/SaV4sFw5mAw",
          desc: `The video of Mikey Bustos focuses on the Filipino Accent. At the start of the
            video he stated that he can speak like an American, Australian, and Italian
            however, he wanted to use his own accent which is the filipino accent. Throughout
            the video he sings with a filipino accent which shows how this accent is different
            from other accents. The lyrics teach the listeners how to have a filipino accent
            for example v and b must sound the same. In the description box Mikey Bustos wrote
            “This is a song I wrote about accents. I'm super proud of my Filipino Accent.”.
            This video is not.... <span style="color: blue; ">Read More</span>`,
        },
        {
          id: 5,
          link: "/video3",
          title: "Filipino Christmas",
          typeAsset: "video",
          asset: "https://www.youtube.com/embed/RLLpRLPhacs",
          desc: `We can see here that Mikey Bustos is speaking with the Filipino accentsince he is 
            proud of our accent and this accent represents ourcountry. In this video he compares 
            how different the Christmascelebration is in Canada and in the Philippines. This 
            video shows howthe filipino people are frugal with the Parol having its original plastic 
            and a plastic Christmas tree. Moreover, this video shows ourtraditions where Filipinos 
            look forward to the simbang gabi, how wehave noche buena, and grandparents giving money 
            to their grandchildren. This video..... <span style="color: blue; ">Read More</span>`,
        },
      ],
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
  padding-bottom: 15px;
}

.home-readMore {
  color: blue;
}

.home-readMore:hover {
  color: blue;
  text-decoration: underline;
}
</style>

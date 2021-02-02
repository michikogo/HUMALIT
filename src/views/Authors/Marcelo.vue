<template>
  <b-container class="window-height content-style">
    <h3 class="members-text">Marcelo H. Del Pilar</h3>
    <b-row class="members-decription">
      <b-col cols="12" sm="5" md="3">
        <b-img
          :src="marceloImage"
          fluid
          alt="Responsive image"
          class="home-image"
        ></b-img>
      </b-col>
      <b-col>
        <p>
          MARCELO H. DEL PILAR was born on 30 August 1850 in Sitio Kupang, San
          Nicolas, Bulacan, Bulacan to Julian Hilario del Pilar and Blasa
          Gatmaitan. Marcelo H. Del Pilar was one of the leading Philippine
          propagandists and satirists who sought Philippine freedom through the
          use of his pen. Del Pilar was very vocal against the Spanish friars
          and the treatment of Spanish government to the Filipinos in the
          country.
          <br /><br />
          In 1882, Del Pilar became editor of the newspaper called Diariong
          Tagalog which strongly criticized the way the Spaniards ran the
          government and treated the Filipino people. Using his pen name,
          Plaridel, and his mastery of Tagalog as his native language, he wrote
          satires against the Spanish friars, notably "Kaiingat Kayo" and
          "Dasalan at Tuksuhan" enabling him to use these as a tool to arouse
          the consciousness of the masses wherein there is a need for unity and
          sustained resistance against the Spanish tyrants.
          <br /><br />
          In Spain, he took the place of Editor of the La Solidaridad,
          propagandists working for reforms and the demands of the Filipinos.
          But illness (tuberculosis) kept him from holding the position for a
          long time and died on 4 July 1896 in Barcelona.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <!-- Context - Reference -->
        <h5 class="video-analysis" id="reference">References</h5>
        <b-row>
          <b-col class="marcelo-reference" cols="1">•</b-col>
          <b-col>
            <b-link
              href="https://kahimyang.com/kauswagan/articles/554/today-in-philippine-history-august-30-1850-marcelo-h-del-pilar-was-born-in-cupang-bulacan-bulacan"
              class="main-link"
            >
              Today in Philippine History, August 30, 1850, Marcelo H. Del Pilar
              was born in Cupang, Bulacan, Bulacan</b-link
            >
          </b-col>
        </b-row>
        <b-row>
          <br />
          <b-col class="marcelo-reference " cols="1">•</b-col>
          <b-col>
            <b-link
              href="https://www.bayaniart.com/marcelo-hilario-del-pilar-biography/"
              class="main-link"
              >MARCELO DEL PILAR</b-link
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import marcelo from "../../resources/marcelo.jpg";
export default {
  data() {
    return {
      marceloImage: marcelo,
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
.marcelo-reference {
  padding-right: 10px !important;
  text-align: end;
}
</style>

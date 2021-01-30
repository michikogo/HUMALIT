<template>
  <div class="window-height content-style">
    <!-- Title -->
    <h3>Dasalan and Tocsohan</h3>

    <!-- Image -->
    <b-img :src="image" fluid alt="Responsive image" class="home-image"></b-img>

    <!-- Context - Introduction -->
    <h5 class="video-analysis">Introduction to the Text</h5>
    <span>
      Satire is very common, especially in the Philippines where it is used as a
      means to cope, bring about awareness about social issues and injustices,
      or even just plain humor. However, satire did not simply pop into
      existence in recent times! In fact, this particular text by Marcelo H. del
      Pilar was written during the colonial occupation of the Spaniards here in
      the Philippines. According to Galang-Parena (n.d.): “Remembering is always
      accompanied by conflict as people have unique ways of retaining an event
      and what it means. When memory becomes part of the public sphere, it is
      inevitably steeped in controversy. The publicness of memory is constituted
      most of all in the field of popular or mass culture—mediated through the
      channels of mass communication—and it is here especially that we can
      locate a privileged site for the playing out of the ethical issues arising
      from the historical or the remembered past.” While the aforementioned text
      focuses on Willie Nepomuceno’s art, it is still true for del Pilar’s text,
      where it brings to light the wrongdoings of the Spanish friars, which
      frequently show paradoxical behavior in contrast to their teachings
      (Salcedo, 2014).
    </span>
    <br />
    <br />
    <span>
      However, this text was not simply used by del Pilar only; many other
      versions of it exist to mock politicians (Salcedo, 2014) such as former
      President Gloria Arroyo and even former President Benigno Aquino (texts
      appended below).
    </span>

    <!-- Context - Analysis -->
    <h5 class="video-analysis">Analysis of the Text</h5>
    <h6 class="h6-top-padding">Ang Tanda</h6>
    <span>
      This section of the text speaks to how the friars abused their power and
      position to get what they wanted. It satirizes the Sign of the Cross,
      explicitly showing to the reader that instead of these friars (who
      supposedly are the administrators and authorities driven by religious
      fervor), are instead acting on their lust and greed, given that the ones
      they worship are the Salapi (money), Maputing binte (white thighs/women),
      and that they are possessed by the Espiritung Bugaw (pimp spirit).
    </span>
    <h6 class="h6-top-padding">Pagsisisi</h6>
    <span>
      In line with Ang Tanda, this section deals with the friars acting like a
      god. Parodying the Act of Contrition, the Filipinos are to ‘worship’ the
      friars that are untrue, unjust and even abusive (despite their religious
      affiliation). Similarly, in contemporary times, this is slowly becoming
      the norm in political landscapes, with many various politicians acting
      like a god, or even the general public treating them as such.
    </span>
    <h6 class="h6-top-padding">Ang Amain Namin</h6>
    <span>
      Building on the parody of the Act of Contrition, this prayer satirizes the
      Lord’s Prayer. The section primarily deals with the Filipinos hatred or
      being against the friars or Spanish imperialism, which highlights the
      problems they have caused. Unlike the previous sections which were more
      allegorical, this text is a more implicit call to action.
    </span>
    <h6 class="h6-top-padding">
      Ang Aba Guinoong Barya & Ang Aba Po Santa Barya
    </h6>
    <span>
      This section satirizes the Hail Mary, personalizing the concept of money
      into a person and that person being taken away by the friars.
    </span>
    <h6 class="h6-top-padding">
      Ang Manga Utos Nang Fraile
    </h6>
    <span>
      Finally, this text is a parody of the ten commandments.
    </span>
    <br />
    <br />
    <span>
      ….every deed, sacrifice and giving no longer goes to God and the Spanish
      Friars seize it.
    </span>

    <!-- Context - Analysis -->
    <h5 class="video-analysis">Relevance to Mikey Bustos</h5>
    <span>
      Marcelo H. del Pilar wrote the Dasalan and Tocsohan because of his
      experiences with the friars. To an extent, Mikey Bustos acts as a FOIL
      instead; rather than using his medium (Youtube videos, in this case) to
      satirically mock the corruption or destruction that has been done to the
      Philippines, he tries to use his skits to educate or to produce humorous
      effect linked Philippine culture, as is the case with his Filipino
      National Heroes Video, condensing history into a catchy, upbeat rap, and
      his various ‘tutorials’ to Filipino traditions, like the Filipino
      Christmas Tutorial, or even humorously jabbing at the Filipino Accent,
      where it recently won 1st sexiest accent in Asia.
    </span>

    <!-- Context - Reference -->
    <h5 class="video-analysis">Reference</h5>
    <b-link
      href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/conferences/arts-congress-proceedings/2019/FP-01.pdf"
      class="main-link"
      >The Impressionist Act of Willie Nepomuceno: Satire as Political Testimony
      and Crux of Collective Memory</b-link
    >
    <br />
    <b-link
      href="https://handiog.wordpress.com/2014/10/11/dasalan-at-tocsohan-ni-marcelo-h-del-pilar/"
      class="main-link"
      >“Dasalan at Tocsohan” ni Marcelo H. Del Pilar</b-link
    >
  </div>
</template>

<script>
import text1Image from "../assets/text1.jpg";
export default {
  name: "MainText",
  components: {},
  data() {
    return {
      image: text1Image,
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

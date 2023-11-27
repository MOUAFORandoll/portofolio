<template>
  <!-- Menu -->
  <MenuVue :links="links"> Randoll Mouafo </MenuVue>
  <HeroSection id="hero" pic="header.png">
    <template v-slot:welcome>Welcome!</template>

    Welcome! I'm <b>Randoll Mouafo</b>, a passionate
    <hi-word>fullstack developer.</hi-word> I possess a plethora of essential
    skills to create exceptional web experiences. My expertise spans various
    domains. I craft dynamic interfaces harnessing the potential of Vue.js and
    TypeScript. Building robust APIs is my daily bread, thanks to my proficiency
    with Symfony and Laravel. Additionally, I excel in mobile development using
    Flutter and Dart. The realms of socket servers and streaming hold no secrets
    for me, with a strong command of Node.js. Navigating server configuration,
    be it Nginx or Apache technologies, comes naturally to me. My skills in
    dockerization and setting up pipelines with Jenkins ensure seamless and
    efficient application deployments. In essence, I am the versatile and
    skilled developer who will breathe life into your projects.
    <!-- My name is <b>Randoll MOUAFO</b> and I'm a   <hi-word>software engineer</hi-word>. My passion is building
    <hi-word>web applications</hi-word> and
    <hi-word>designing websites</hi-word> using modern frameworks. Also I'm
    doing research in <hi-word>machine learning</hi-word> applied to renewable
    energy -->
    <template v-slot:buttons>
      <simple-button
        class="btn-primary text-white"
        url="https://www.linkedin.com/in/randoll-mouafo-3b8783252"
        icon="fab linkedin-in"
        >Linkedin !</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        icon="fa-regular fa-file-lines"
        @click="openDialog = true"
        >Contact me</simple-button
      >
    </template>
  </HeroSection>
  <SkillsGrid id="skills" :skills="skills" />
  <ExperienceTable id="edu-exp" :experience="experience" />
  <AwardsGrid id="awards" :awards="awards" />
  <ProjectsGrid id="projects" :projects="projects" />
  <FooterVue :links="socials" :copyright="copyright" />
  <vue-final-modal v-model="openDialog">
    <div class="flex flex-col">
      <div>Check out our stacked Dialog</div>

      <div>Notice that tab / shift+tab will only stay within this dialog.</div>

      <div class="flex justify-end space-x-2">
        <button @click="simpleDialog = false">Close</button>
      </div>
    </div>
  </vue-final-modal>
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
import { VueFinalModal } from "vue-final-modal";

// data to fill components
import skills from "@/data/skills";
import experience from "@/data/experience";
import awards from "@/data/awards";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "home",
          url: "#hero",
        },
        {
          name: "skills",
          url: "#skills",
        },
        {
          name: "experience",
          url: "#edu-exp",
        },
        {
          name: "awards",
          url: "#awards",
        },
        {
          name: "projects",
          url: "#projects",
        },
      ],
      skills,
      experience,
      awards,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab linkedin-in",
          url: "https://www.linkedin.com/in/randoll-mouafo-3b8783252",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/MOUAFORandoll",
        },
      ],
      copyright: "2023 Randoll MOUAFO",
    };
  },
  setup() {
    let openDialog = ref(false);
    let loading = ref(true);
    let nom = ref(true);

    const sendMail = async () => {
      let data = {
        nom: nom.value,
      };
      loading.value = true;

      const response = await axios.post("url", data);
      console.log(response);
      if (response.status) {
        loading.value = false;
        openDialog.value = false;
      } else {
        loading.value = false;
      }
    };
    return {
      loading,
      sendMail,
      openDialog,
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    VueFinalModal,
    AwardsGrid,
    ProjectsGrid,
    SimpleButton,
    HiWord,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>

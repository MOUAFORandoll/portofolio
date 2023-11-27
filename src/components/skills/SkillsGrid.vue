<template>
  <BaseContainer title="I work on..." classe="mobile">
    <SingleSkill v-for="skill in skills" :key="skill.id" :skill="skill" />
  </BaseContainer>
</template>
<script>
import SingleSkill from "./SingleSkill.vue";
import BaseContainer from "../reusable/BaseContainer.vue";

export default {
  props: ["skills"],
  name: "SkillsGrid",
  components: { SingleSkill, BaseContainer },
};
</script>
<style>
@media (max-width: 770px) {
  .mobile {
    margin-top: 300px;
  }
}
@media (max-width: 400px) {
  .mobile {
    margin-top: 400px;
  }
}
</style>

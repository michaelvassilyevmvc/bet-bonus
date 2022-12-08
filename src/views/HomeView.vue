<template>
  <div v-for="match in matches">
    <Match :match="match" />
  </div>
</template>

<script setup>
import { MATCHES } from "../../data";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Match from "../components/Match.vue";

const router = useRouter();
const route = useRoute();
const matches = ref(MATCHES);

console.log(matches.value);

// onBeforeMount(() => {});
</script>

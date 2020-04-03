<template>
  <v-app>
    <v-content>
      <FileUpload/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import FileUpload from './components/FileUpload.vue';

export default Vue.extend({
  name: 'App',

  components: {
    FileUpload,
  },

  data: () => ({
    //
  }),
});
</script>

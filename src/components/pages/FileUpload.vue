<template>
  <v-app>
    <v-content>
      <p>
        <v-file-input
          color="primary"
          hint="FileUpload"
          @change="fileUpload"></v-file-input>
      </p>

      <p>
        <v-file-input
          color="primary"
          hint="CreatePng"
          @change="createPng">Create Png</v-file-input>
      </p>
      
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'

export default Vue.extend({
  data: () => ({

  }),

  methods: {
    fileUpload: (e: any) => {

      console.log(e.name)
      if (!("name" in e)) return

      firebase.auth().signInAnonymously().then(() => {
        // sample reference
        const sampleRef = firebase.storage().ref().child(`sample/${e.name}`)
        sampleRef.put(e).then(snapshot => {
          console.log(snapshot.ref.fullPath)
        }).catch(err => {
          console.error(err)
        })
      })
    },

    createPng: (e: any) => {
      
      console.log(e.name)
      if (!("name" in e)) return

      firebase.auth().signInAnonymously().then(() => {
        // clip reference
        const sampleRef = firebase.storage().ref().child(`clip/${e.name}`)
        sampleRef.put(e).then(snapshot => {
          console.log(snapshot.ref.fullPath)
        }).catch(err => {
          console.error(err)
        })
      })
    }
  }
})
</script>
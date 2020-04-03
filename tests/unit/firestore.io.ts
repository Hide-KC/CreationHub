import {conf} from '@/key/firebaseConfig.ts'
import * as firebase from 'firebase'

describe("FireStore IO", () => {
  it("FireStore Upload passed", () => {
    firebase.initializeApp(conf)
    firebase.auth().signInAnonymously().then(user => {
      console.log("currentUser: " + user)

      const _db = firebase.firestore()
      const cl = _db.collection("users")
      cl.add({
        first: "hhh",
        last:"fff",
        age: 20
      }).catch(err => {
        console.error("err add:" + err)
      })
    }).catch(err => {
      console.error("err: " + err)
    })
  })

  it("Firebase Storage upload passed", () => {
    firebase.initializeApp(conf)
    firebase.auth().signInAnonymously().then(user => {
      // root reference
      const rootRef = firebase.storage().ref()
      
      // sample file reference
      const sampleRef = rootRef.child("benkyousuru_hito.png")

      const fs = require("fs")
      const sample = fs.readFileSync("./src/sample_asset/benkyousuru_hito.png")
    })
  }) 
})
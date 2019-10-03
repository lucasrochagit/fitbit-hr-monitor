import { BodyPresenceSensor } from "body-presence"
import { HeartRateSensor } from "heart-rate"
import { AppSettings } from "../settings/index.js"
import document from "document";
import * as messaging from "messaging";

const settings = new AppSettings()
settings.init()
animateHeart()

const MAX_IMAGE_VALUE = 13
const hrm = new HeartRateSensor({ frequency: 1, batch: 30 });
const body = new BodyPresenceSensor()
let heart = document.getElementById("heart")
const bpm = document.getElementById("bpm")
const circItem = document.getElementById("circItem")
let count = 1


if (HeartRateSensor && BodyPresenceSensor) {
  body.addEventListener("reading", () => {
    if (!body.present) {
      sendMessage({
        message: "The user does not using the device.",
        description: "Please verify that the user is using the smartwatch."
      }) 
      hrm.stop()
    }
    else hrm.start()
  })
  
  hrm.addEventListener("reading", () => {
    setHRValue(hrm.heartRate)
    sendMessage({
      timestamp: `${new Date().toISOString()}`,
      value: hrm.heartRate,
      classification: heartRateClassification(hrm.heartRate)});
  })
  body.start()
}

/*
* Application Functions
*/

function heartRateClassification(value) {
  if (value < 50) return 'low'
  else if (value > 100) return 'high'
  return 'normal'
}

function sendMessage(data) {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        // Send the data to peer as a message
        messaging.peerSocket.send(data);
    }
}

function isUserUsingWatch() {
  return body.present
}

function animateHeart() {
  setInterval(() => {
    heart.href = `images/${count}.png`
    count ++
    if (count=== MAX_IMAGE_VALUE) count = 1
  }, 50)
}


function setHRValue(value) {
  bpm.text = value
}


/**
 * SOCKET EVENTS
 */
messaging.peerSocket.onopen =  () =>  {
  console.log("Socket Open")  
  circItem.style.fill = "green"
}
messaging.peerSocket.onclose =  () => {
  console.log("Socket Close")
  circItem.style.fill = "red"
}
messaging.peerSocket.onerror = err => {
  console.log("Connection error: " + err.code + " - " + err.message)
    circItem.style.fill = "red"
}


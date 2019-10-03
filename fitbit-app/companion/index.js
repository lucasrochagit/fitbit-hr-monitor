/* ----------------------------------------------------------------------------------
     Esta é a classe principal de Companion
---------------------------------------------------------------------------------- */
import { peerSocket } from "messaging"
import { ServerAPI } from "./server.js"

const serverAPI = new ServerAPI();

peerSocket.onopen = () => console.log("Companion started.")

peerSocket.onmessage = evt => {
    if (!evt.data) return
    serverAPI.sendHeartRateData(evt.data)
}

peerSocket.onclose = () => console.log("Companion closed.")
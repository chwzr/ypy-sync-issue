const Y = require("yjs")
const WebSocket = require('ws')
const { WebsocketProvider } = require("y-websocket")

const doc = new Y.Doc()
const wsProvider = new WebsocketProvider('ws://localhost:1234', 'card_cd846c85-057d-413b-989a-1085d54c37f2.ipynb', doc, { WebSocketPolyfill: WebSocket })

wsProvider.on('status', event => {
    console.log(event.status) // logs "connected" or "disconnected"
})

wsProvider.on("sync", _ => {
    cells = doc.getArray("cells")
    console.log(cells.toJSON())
})



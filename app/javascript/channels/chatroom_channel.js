import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  // Called once when the subscription is created.
  // initialized() {
  // },
  // // Called when the subscription is ready for use on the server.
  // connected() {
  // },
  // // Called when the WebSocket connection is closed.
  // disconnected() {
  // },
  received(data) {
    const container = document.getElementById('message-container')
    container.insertAdjacentHTML( 'beforeend', data.message );
  }

  // createHTML(data) {
    
  // }


})
<script lang="ts">
  import { io } from "socket.io-client";

  const socket = io("ws://localhost:3000");

  socket.emit("sending client message");

  socket.on("sending server message", () => {
    console.log("received server message!")
  });
</script>

<h1>Hello, World!</h1>
<p>Check the browser console</p>

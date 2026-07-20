<button onclick="iniciarMusica()">Entrar</button>

<div id="player"></div>

<script>
function iniciarMusica() {
    document.getElementById("player").innerHTML = `
        <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/ID_DEL_VIDEO?autoplay=1&loop=1&playlist=ID_DEL_VIDEO"
            allow="autoplay"
            frameborder="0">
        </iframe>`;
}
</script>

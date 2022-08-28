const main = document.getElementById('app');

const externalHTML = `
<article>
    
<h1>The MIT License (MIT)</h1>

<p>Copyright © 2022 &lt;copyright holders&gt;</p>

<p>
<img id="preview" src="src/img/image.png"/>
<img id="twibbon" src="src/img/twibbon.png" style="display: none"/>
<canvas id="cakfer" style="width: 300px; height: 300px; display: none"></canvas>
</p>

<p>
<input type="text" id="filename" autocomplete="off" readonly="" placeholder="Tidak ada file yang diunggah.">
<br />
<label for="fileInput" class="custom-file-upload">
<i class="text-button"></i> <i class="far fa-images"></i> UNGGAH GAMBAR BARU
<input id="fileInput" type="file" />
</label>
</p>

<p>
<a href="#" id="unduh" download="magg.netlify.app.png" style="display: none" class="button-3" role="button"><i class="fa fa-download"></i> UNDUH</a>
<button id="klik" onclick="drawImage()" class="button-3" role="button"><i class="far fa-eye"></i> PRATINJAU</button> 
<button id="cancel" onclick="location.reload()" class="button-4" role="button" style="color:red"><i class="fas fa-trash-alt"></i> HAPUS</button>
</p>
</article>
  
<footer>
<p><a target="_blank" rel="noopener" href="#">Copyright © 2022 Ferry Ayunda.</a></p>
</footer>`;
// shows the alert
app.innerHTML = externalHTML;

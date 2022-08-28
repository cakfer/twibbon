const main = document.getElementById('app');

const externalHTML = `
<article>
    
<h1>The MIT License (MIT)</h1>

<p>Copyright © 2022 &lt;copyright holders&gt;</p>

<p>
<img id="preview" src="src/img/image.png"/>
<img id="twibbon" src="src/img/twibbon.png" style="display: none"/>
<canvas id="twibbonbaker" style="width: 300px; height: 300px; display: none"></canvas>
</p>

<p>The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.</p>
</article>
  
<footer>
<p><a target="_blank" rel="noopener" href="#">Copyright © 2022 Ferry Ayunda.</a></p>
</footer>`;
// shows the alert
app.innerHTML = externalHTML;

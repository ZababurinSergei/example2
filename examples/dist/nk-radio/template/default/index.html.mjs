export default()=>'\n    <template>\n    <div class="audio-newkind">\n        <form class="audio-newkind__form">\n            <input type="radio" class="audio-newkind__radio" id="raxxla" name="radio-selection" value="https://hermitage.hostingradio.ru/hermitage128.mp3" checked>\n            <label for="raxxla"><span></span>Raxxla Radio</label>\n            <input type="radio" class="audio-newkind__radio" id="earth" name="radio-selection" value="https://ice1.somafm.com/u80s-128-aac">\n            <label for="earth"><span></span>Earth Radio</label>\n            <input type="radio" class="audio-newkind__radio" id="cats-radio" name="radio-selection" value="https://ice1.somafm.com/deepspaceone-128-aac">\n            <label for="cats-radio"><span></span>Cats Radio</label>\n        </form>\n        <canvas id="oscilloscope"></canvas>\n        <button class="audio-newkind__btn" id="start">Start Audio</button>\n    </div>\n</template>';
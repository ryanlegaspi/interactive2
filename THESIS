let fft, input, sound;
const spectrumLength = 1024;
const canvasWidth = 1920 / 2;
const canvasHeight = 1080 / 2;
const music = 'https://onlinesequencer.net/1204441';

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  drawArea = createGraphics(width, height);
	drawArea.colorMode(HSB);
	drawArea.background(0, 0, 0);

  setupAudio(canvas);
}

function draw() {
  let spectrum = fft.waveform(spectrumLength);
	shrinkPixels = 8;
	drawArea.image(drawArea, shrinkPixels / 2, shrinkPixels / 2, width - shrinkPixels, height - shrinkPixels);
  drawArea.stroke((frameCount - 10) % 360, 80, 40, 40);
  drawArea.fill(frameCount % 360, 80, 100); 
	drawArea.beginShape();
	drawArea.vertex(0, height);
	for (var i = 0; i < spectrumLength; i++){
		var x = map(i, 0, spectrumLength, 0, width);
		var h = height - map(spectrum[i], 0, 1, 0, height) * 4;
		drawArea.vertex(x, h);
	}
	drawArea.vertex(width, height);
	drawArea.endShape();
	image(drawArea, 0, 0);
	drawMusic();
}

function drawMusic() {
	fill(30);
	push();
	translate(width / 2, height / 2);
  rotate(PI / 2.0);
	fill(255, 0, 0);
	strokeWeight(5);
	translate(-height / 2 + 10, -width / 2 + 20);
	stroke(0);
	textSize(20);
	text('Muzica:  ' + music + ' ' + (sound ? sound.currentTime().toFixed(2) : '0'), 10, 10);
	pop();
}

function setupAudio(canvas) {
	canvas.drop(gotFile);
	//mic
	input = new p5.AudioIn();
	input.start();

	//for file
	fft = new p5.FFT();
	fft.setInput(input);

	analyzer = new p5.Amplitude();
	analyzer.setInput(input);
}

function gotFile(file) {
	if (file.type === 'image') {
    const img = createImg(file.data).hide();
    image(img, 0, 0, width, height);
	} else if (file.type === 'audio') {
		if(sound) {
			sound.stop();
		}
    sound = loadSound(file, function successLoaded () {
			//background(bg);
			sound.amp(0.5)
			sound.loop();
			analyzer = new p5.Amplitude();
			analyzer.setInput(sound);
			
			fft = new p5.FFT();
			fft.setInput(sound);
		});
  } else {
    console.log('Not an valid file (audio ogg/wav or image)!');
  }
}

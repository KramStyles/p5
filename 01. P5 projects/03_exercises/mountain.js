function sky(e, shades) {
    loadPixels();
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const n = noise(x * e, y * e);
        const c = shades[floor(n * shades.length)];
        set(x, y, c)
      }
    }
    updatePixels();
  }
  
  function mountains(oy, epsilon, startColor, endColor, reductionScaler) {
    for (let y = oy; y < height; y += 1) {
      const row = [];
      row.push(createVector(0, y));
      for (let x = 0; x < width; x += 1) {
        const n = noise(x * epsilon, y * epsilon);
        const reduction = map(y, 0, height, 1, 0) * reductionScaler;
        const off = y + map(n, 0, 1, -reduction, reduction);
        row.push(createVector(x, off));
      }
      row.push(createVector(width, height));
      row.push(createVector(0, height));
      const ammount = map(y, oy, height, 0, 1);
      const c = lerpColor(color(startColor), color(endColor), ammount);
      fill(c);
  
      beginShape();
      for (let v of row) {
        vertex(v.x, v.y);
      }
      endShape(CLOSE);
    }
  }
  
  function setup() {
    createCanvas(1280, 760);
    background(255);
    stroke(255, 20);
    
    const shades = [
      color('#EEEEEE'),
      color('#DDDDDD'),
    ];
    sky(0.02, shades);
  
    const ridgeLineTop = {
      oy: 210,
      e: 0.011,
      startColor: color('#AAAAAA'),
      endColor: color('#000000'),
      reductionScaler: 300,
    }
  
    const ridgeLineMiddle = {
      oy: 350,
      e: 0.009,
      startColor: color('#555555'),
      endColor: color('#000000'),
      reductionScaler: 200,
    }
  
    const Lake = {
      oy: 450,
      e: 0.0182,
      startColor: color('#888888'),
      endColor: color('#000000'),
      reductionScaler: 10,
    }
  
    const ridgeLineBottom = {
      oy: 500,
      e: 0.0049182,
      startColor: color('#555555'),
      endColor: color('#000000'),
      reductionScaler: 300,
    }
  
    mountains(...Object.values(ridgeLineTop));
    mountains(...Object.values(ridgeLineMiddle));
    mountains(...Object.values(Lake));
    mountains(...Object.values(ridgeLineBottom));
  }
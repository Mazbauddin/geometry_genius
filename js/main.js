// Triangle start
function calculateTriangleArea() {
  // triangel base
  const triangelBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangelBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  // triangel height
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  // calculate area
  const area = (base * height) / 2;
  console.log("area of the triangle is: ", area);

  // display triangle area
  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerHTML = area;
}
// Rectangle start
function calculateRectangleArea() {
  // rectangle base
  const rectangleBaseInput = document.getElementById("rectangel-base");
  const rectangleBaseText = rectangleBaseInput.value;
  const base = parseFloat(rectangleBaseText);
  console.log(base);

  // rectangle height
  const rectangleHeightInput = document.getElementById("rectangel-height");
  const rectangleHeightText = rectangleHeightInput.value;
  const height = parseFloat(rectangleHeightText);
  console.log(height);

  // calculate area
  const area = base * height;
  console.log("area of the rectangle is: ", area);

  // display rectangle area
  const rectangleArea = document.getElementById("rectangel-area");
  rectangleArea.innerHTML = area;
}

// Parallelogram start
function calculateParallelogramArea() {
  // rectangle base
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBaseInput.value;
  const base = parseFloat(parallelogramBaseText);
  console.log(base);

  // rectangle height
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramHeightText = parallelogramHeightInput.value;
  const height = parseFloat(parallelogramHeightText);
  console.log(height);

  // calculate area
  const area = base * height;
  console.log("area of the parallelogram is: ", area);

  // display rectangle area
  const parallelogramArea = document.getElementById("parallelogram-area");
  parallelogramArea.innerHTML = area;
}

// Rhombus start
function calculateRhombusArea() {
  // Rhombus base
  const rhombusBaseInput = document.getElementById("rhombus-base");
  const rhombusBaseText = rhombusBaseInput.value;
  const base = parseFloat(rhombusBaseText);
  console.log(base);

  // Rhombus height
  const rhombusHeightInput = document.getElementById("rhombus-height");
  const rhombusHeightText = rhombusHeightInput.value;
  const height = parseFloat(rhombusHeightText);
  console.log(height);

  // calculate area
  const area = (base * height) / 2;
  console.log("area of the triangle is: ", area);

  // display Rhombus area
  const rhombusArea = document.getElementById("rhombus-area");
  rhombusArea.innerHTML = area;
}
// Pentagon start
function calculatepentagonArea() {
  // Pentagon base
  const pentagonBaseInput = document.getElementById("pentagon-base");
  const pentagonBaseText = pentagonBaseInput.value;
  const base = parseFloat(pentagonBaseText);
  console.log(base);

  // Pentagon height
  const pentagonHeightInput = document.getElementById("pentagon-height");
  const pentagonHeightText = pentagonHeightInput.value;
  const height = parseFloat(pentagonHeightText);
  console.log(height);

  // calculate area
  const area = (base * height) / 2;
  console.log("area of the triangle is: ", area);

  // display Pentagon area
  const pentagonArea = document.getElementById("pentagon-area");
  pentagonArea.innerHTML = area;
}

// all function reused so one function make
// ellipse area
function calculateEllipseArea() {
  const majorRadius = getInputValueById("ellipse-major-radius");
  // console.log(majorRadius);
  const minorRadius = getInputValueById("ellipse-minor-radius");
  // console.log(minorRadius);
  const area = 3.14 * majorRadius * minorRadius;
  setInnerTextById("ellipse-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

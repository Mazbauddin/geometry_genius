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

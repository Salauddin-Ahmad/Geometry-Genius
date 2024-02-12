function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
console.log( base);

    // get triangle base value
    const triangleHeightInput = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
console.log(height);
    // calculate the area of the triangle
    const area = 0.5 * base * height;
    console.log('area of the triangle is', area);

    // display the result
    const triangleAreaSpan = document.getElementById("triangle-area");
    triangleAreaSpan.innerText = area;


}
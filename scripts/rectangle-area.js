function calculateRectangleArea() {
    // get rectangle length value
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    // get rectangle width value
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    
    // calculate the area of the rectangle
    const area = length * width;
    console.log('area of the rectangle is', area);

    // display the result
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area; 
}
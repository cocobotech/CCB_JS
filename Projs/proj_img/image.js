function convertImageToBase64() {
    const imageUrl = document.getElementById("imageUrlInput").value;
    const imagePreview = document.getElementById("imagePreview");
    const base64TextArea = document.getElementById("base64TextArea");
    const base64Result = document.getElementById("base64Result");

    // Create a new image element
    const image = new Image();

    // Set the crossOrigin attribute to avoid CORS issues
    image.crossOrigin = "Anonymous";

    // Set the image source to the provided URL
    image.src = imageUrl;

    // Listen for the 'load' event on the image
    image.onload = function () {
        // Draw the image onto a canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        // Get the Base64 data URL from the canvas
        const base64 = canvas.toDataURL('image/png');

        // Display the Base64 image and result
        imagePreview.src = base64;
        imagePreview.style.display = "block";
        base64TextArea.value = base64;
        base64Result.style.display = "block";
    }
}
function convertBase64ToImage() {
   
    const imagePreview2 = document.getElementById("imagePreview2");
    const base64Result = document.getElementById("base64Result");
    const base64TextArea = document.getElementById("base64TextArea");
    console.log(base64TextArea.textContent)
    console.log(base64TextArea.value)
    //imagePreview2.src="https://raw.githubusercontent.com/cocobotech/DB/main/science_rotate.png" //"data:image/png;base64,"+base64Result
    imagePreview2.src=base64TextArea.value
    imagePreview2.style.display = "block";
}

function convertBase64FromCanvas(){
    const img = document.getElementById('imagePreview');
    const base64TextArea2 = document.getElementById("base64TextArea2");

    // Create a canvas element
    const canvas = document.getElementById('canvas');

    // Set the canvas dimensions to the image dimensions
    canvas.width = img.width;
    canvas.height = img.height;

    // Get the canvas context
    const ctx = canvas.getContext('2d');

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0);

    // Get the Base64-encoded data
    const dataURL = canvas.toDataURL();
    base64TextArea2.value=dataURL;

    const img2 = document.getElementById('imagePreview3');
    img2.src="data:image/png;base64,"+document.getElementById("base64TextArea").text
    img2.style.display="block"
    

}

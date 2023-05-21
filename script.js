
const imageInput = document.getElementById("image-input");
// console.log( imageInput);
// if (imageInput.src == 'https://template.isgoing.online/canvas/img/LEBAL%20NEW%20123-01.png'){
    const textInput = document.getElementById("text-input");
    const textInput1 = document.getElementById("text-input1");
    const textInput2 = document.getElementById("text-input2");
    const textInput3 = document.getElementById("text-input3");
    const textInput4 = document.getElementById("text-input4");
    const canvas = document.getElementById("canvas");
    const downloadBtn = document.getElementById("download-btn");
    
    
    document.getElementById("canvas").style.background = "url('')";
    const ctx = canvas.getContext("2d");
    
    const loadImage = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
        });
    };
    var myFont = new FontFace('myFont', 'url(/Roboto-BoldCondensed.ttf)');
    // const urlq="https://template.isgoing.online/canvas/img/LEBAL%20NEW%20123-01.png"
    const drawImage = async (urlq) => {
        const img = await loadImage(urlq);
        // console.log(urlq);
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    
    
        heading = true
        if (heading = true) {
    
            ctx.font = "bold 250px' Roboto-Black";
            ctx.fillStyle = "#7c5702";
            ctx.textAlign = "center";
            ctx.fillText(textInput.value, img.width / 2, img.height / 3);
            console.log(textInput.value);
        }
        subheading = true
        if (subheading = true) {
            ctx.font = "150px bolder Monospace";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(textInput1.value, img.width / 2, img.height / 2.5);
    
        }
        weight = true
        if (weight = true) {
            ctx.font = "150px bolder Monospace";
            ctx.fillStyle = "#7c5702";
            ctx.textAlign = "center";
            ctx.fillText(textInput2.value, img.width / 1.5, img.height / 2.2); 
    
        }
        footertext = true
        if (footertext = true) {
            console.log("done");
            ctx.font = "150px bolder Monospace";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            // console.log(textInput3.value);
            ctx.fillText(textInput3.value, img.width / 1.5, img.height / 1.2);
    
        }
        footertext1 = true
        if (footertext1 = true) {
            console.log("done");
            ctx.font = "100px bolder Monospace";
            ctx.fillStyle = "#7c5702";
            ctx.textAlign = "center";
            // console.log(textInput3.value);
            ctx.fillText(textInput4.value, img.width / 3, img.height / 1.2);
    
        }
    };
    
    
    
    const updateImage = async () => {
        const done = imageInput.src
        const file = done;
        // console.log(file);
        const url = file;
        await drawImage(url);
        URL.revokeObjectURL(url);
    };
    
    
    imageInput.addEventListener("change", updateImage);
    textInput.addEventListener("input", updateImage);
    textInput1.addEventListener("input", updateImage);
    textInput2.addEventListener("input", updateImage);
    textInput3.addEventListener("input", updateImage);
    textInput4.addEventListener("input", updateImage);
    
    downloadBtn.addEventListener("click", () => {   
        const url = canvas.toDataURL("image/png");
        console.log(url);
        downloadBtn.href = url;
    });
    
// }else{
//     console.log('error');
// }

// const textInput = document.getElementById("text-input");
// const textInput1 = document.getElementById("text-input1");
// const textInput2 = document.getElementById("text-input2");
// const textInput3 = document.getElementById("text-input3");
// const textInput4 = document.getElementById("text-input4");
// const canvas = document.getElementById("canvas");
// const downloadBtn = document.getElementById("download-btn");


// document.getElementById("canvas").style.background = "url('')";
// const ctx = canvas.getContext("2d");

// const loadImage = (url) => {
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => resolve(img);
//         img.onerror = reject;
//         img.src = url;
//     });
// };
// var myFont = new FontFace('myFont', 'url(/Roboto-BoldCondensed.ttf)');
// // const urlq="https://template.isgoing.online/canvas/img/LEBAL%20NEW%20123-01.png"
// const drawImage = async (urlq) => {
//     const img = await loadImage(urlq);
//     // console.log(urlq);
//     canvas.width = img.width;
//     canvas.height = img.height;
//     ctx.drawImage(img, 0, 0);


//     heading = true
//     if (heading = true) {

//         ctx.font = "bold 250px' Roboto-Black";
//         ctx.fillStyle = "#7c5702";
//         ctx.textAlign = "center";
//         ctx.fillText(textInput.value, img.width / 2, img.height / 3);
//         console.log(textInput.value);
//     }
//     subheading = true
//     if (subheading = true) {
//         ctx.font = "150px bolder Monospace";
//         ctx.fillStyle = "black";
//         ctx.textAlign = "center";
//         ctx.fillText(textInput1.value, img.width / 2, img.height / 2.5);

//     }
//     weight = true
//     if (weight = true) {
//         ctx.font = "150px bolder Monospace";
//         ctx.fillStyle = "#7c5702";
//         ctx.textAlign = "center";
//         ctx.fillText(textInput2.value, img.width / 1.5, img.height / 2.2); 

//     }
//     footertext = true
//     if (footertext = true) {
//         console.log("done");
//         ctx.font = "150px bolder Monospace";
//         ctx.fillStyle = "black";
//         ctx.textAlign = "center";
//         // console.log(textInput3.value);
//         ctx.fillText(textInput3.value, img.width / 1.5, img.height / 1.2);

//     }
//     footertext1 = true
//     if (footertext1 = true) {
//         console.log("done");
//         ctx.font = "100px bolder Monospace";
//         ctx.fillStyle = "#7c5702";
//         ctx.textAlign = "center";
//         // console.log(textInput3.value);
//         ctx.fillText(textInput4.value, img.width / 3, img.height / 1.2);

//     }
// };



// const updateImage = async () => {
//     const done = imageInput.src
//     const file = done;
//     // console.log(file);
//     const url = file;
//     await drawImage(url);
//     URL.revokeObjectURL(url);
// };


// imageInput.addEventListener("change", updateImage);
// textInput.addEventListener("input", updateImage);
// textInput1.addEventListener("input", updateImage);
// textInput2.addEventListener("input", updateImage);
// textInput3.addEventListener("input", updateImage);
// textInput4.addEventListener("input", updateImage);

// downloadBtn.addEventListener("click", () => {   
//     const url = canvas.toDataURL("image/png");
//     console.log(url);
//     downloadBtn.href = url;
// });
function ready(){
    let imageSrc = "https://template.isgoing.online/images/honey1.jpg";
    let encodedImageSrc = encodeURIComponent(imageSrc);
    console.log(encodedImageSrc);
    window.location.href = "https://template.isgoing.online/canvas/index1.html?src=" + encodedImageSrc ;
    console.log(window.location.href);

}

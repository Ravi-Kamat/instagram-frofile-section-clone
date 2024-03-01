
const addImg = document.getElementById('item_1');
let inputImage = document.getElementById('image_input')

let upload = '';

inputImage.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        upload = reader.result;
        addImg.style.backgroundImage = `url(${upload})`
    })
    reader.readAsDataURL(this.files[0]);

})



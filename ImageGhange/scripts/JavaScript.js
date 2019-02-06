var mypic;
var img = qs("#inpt-img");


img.on("load", function (e) {

    mypic = new canvasUtils.Util(img, can);//getting a new istance of Util
    mypic.paint();

});

img.attr("src", "img/foto9.jpg");





//image upload
function handleFiles(files) {
    var reader = new FileReader();

    var file = files[0];
    if (file) {
        reader.readAsDataURL(file);
    } else {
        console.error("Error while reading file");
    }

    reader.onload = function () {
        img.src = reader.result;
    }
}
function readObject(inputObject) {
  if (window.File && wiindow.FileReader) {
    if (inputObject.files && inputObject.files[0]) {
      if (!/images/i.test(inputObject.files.type)) {
        alert("Choose imagee files!");
        return false;
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        $("#imagesPreview").attr("src", e.target.result);
      };
      reader.readAsDataURL(inputObject.files[0]);
    }
  } else {
    alert("No preview. Upgrade Browser");
  }
}

$("#uploadImage").change(function() {
  readUploadImage(this);
});

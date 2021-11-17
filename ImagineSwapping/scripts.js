function changeImage(fullswap) { 
    document.getElementById('largeImage').src=fullswap;
}

largeImage.addEventListener("dblclick", function() {
    document.getElementById('img1').src='img5.jpg';
    document.getElementById('img2').src='img6.jpg';
    document.getElementById('img3').src='img7.jpg';
    document.getElementById('img4').src='img8.jpg';
});

//Slick idea from Tanner below so you can get back to the original without refreshing
largeImage.addEventListener("click", function() {
    document.getElementById('img1').src='img1.jpg';
    document.getElementById('img2').src='img2.jpg';
    document.getElementById('img3').src='img3.jpg';
    document.getElementById('img4').src='img4.jpg';
}); 
// declare all the elements I need

var notify = document.querySelector('.notify')
var albums = document.querySelectorAll('.album')
var totalItems = document.querySelector('.total-items')
var downloadButton = document.querySelector('.download-button')

// an array that will hold the albums a user selects and a loop that will let the user know what has been selected

var selectedAlbums = []
var i = 0;

while (i < albums.length) {
	albums[i].onclick = function(e) {
		var albumTitle = this.querySelector('.title').textContent
		//var albumArtist = this.querySelector('.artist').textContent
		//console.log(alert(`You've selected ${albumTitle} by ${albumArtist}.`));


//adding the class "selected" to the album divs
    if (this.classList.contains('selected') !== true) {
    	this.classList.add('selected');
    	selectedAlbums.push(albumTitle)
    	//this currently adds duplicates
    } else {
    	this.classList.remove('selected');
    	//remove those duplicates
    	selectedAlbums = selectedAlbums.filter(function(item) {
    		return item !== albumTitle
    	})
    }
	}


	console.log(i);
	i++
}



// notification pop up 
downloadButton.onclick = function() {
	//show the number of albums downloaded according to whatever is added to the array
	totalItems.textContent = (`You have downloaded ${selectedAlbums.length} albums`); 
	document.getElementById('active').style.display = 'block';

    //notification disappears after 2 seconds
   setTimeout(function() {
   	document.getElementById('active').style.display = 'none';
   }, 

   	3000)
	console.log('downloaded');
}
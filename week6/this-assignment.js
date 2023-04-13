
let photoSlideShow = {
    photoList: ['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4', 'Photo 5'],
    currentphotoIndex: 0,
    nextPhoto: function () {
        if (this.currentphotoIndex < this.photoList.length) {
            this.currentphotoIndex++;
            console.log('The current photo is ' + this.currentphotoIndex + '. \n');
        }
        else {
            console.log('End of slideshow');
        }       
    },
    prevPhoto: function () {
        if (this.currentphotoIndex > 0) {
            this.currentphotoIndex--;
            
            console.log('The current photo is ' + this.currentphotoIndex);
        }
        else {
            console.log('Start of slideshow');
        }
    },    
    getCurrentPhoto: function () {
        console.log('This is '+ this.photoList[this.currentphotoIndex] + '\n');
        return this.photoList[this.currentphotoIndex];    
    }
}
    for(let i = 0; i < photoSlideShow.photoList.length + 1; i++) {
        if (i < photoSlideShow.photoList.length) {
            photoSlideShow.getCurrentPhoto();
    }
            photoSlideShow.nextPhoto();
}    
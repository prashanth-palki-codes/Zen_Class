var TvApplication = /** @class */ (function () {
    function TvApplication() {
        this.videoUrl = '';
    }
    TvApplication.prototype.startTrailer = function (videoUrl) {
        this.videoUrl = videoUrl;
        var video = document.getElementById('video');
        video.setAttribute('src', "" + this.videoUrl);
        this.resume(video);
    };
    TvApplication.prototype.resume = function (video) {
        video.play();
    };
    TvApplication.prototype.pause = function (video) {
        video.pause();
    };
    TvApplication.prototype.volumeUP = function (video) {
        video.volume = video.volume + 0.1;
        var volume = document.getElementById('volume');
        volume.innerHTML = "Volume : " + video.volume.toFixed(2) * 100 + "%";
    };
    TvApplication.prototype.volumeDown = function (video) {
        video.volume = video.volume - 0.1;
        var volume = document.getElementById('volume');
        volume.innerHTML = "Volume : " + video.volume.toFixed(2) * 100 + "%";
    };
    return TvApplication;
}());
function playTrailer(brand) {
    var tv = new TvApplication();
    switch (brand) {
        case 'xiaomi':
            tv.startTrailer('Videos/xiaomi.mp4');
            break;
        case 'lg':
            tv.startTrailer('Videos/lg.mp4');
            break;
        case 'sony':
            tv.startTrailer('Videos/sony.mp4');
            break;
        case 'oneplus':
            tv.startTrailer('Videos/oneplus.mp4');
            break;
    }
}
var video = document.getElementById('video');
var resume = document.getElementById('resume');
var tv = new TvApplication();
resume.addEventListener('click', function () {
    tv.resume(video);
});
var pause = document.getElementById('pause');
pause.addEventListener('click', function () {
    tv.pause(video);
});
var volUP = document.getElementById('volumeUP');
volUP.addEventListener('click', function () {
    tv.volumeUP(video);
});
var volDown = document.getElementById('volumeDown');
volDown.addEventListener('click', function () {
    tv.volumeDown(video);
});

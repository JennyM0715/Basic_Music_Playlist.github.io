/*********************
 * 
 *  GLOBAL VARIABLES
 * 
 *********************/
var audio;
var playlist;
var tracks;
var current;
        
init();
function init(){
    current = 0;

            /*'audio is referring to the <audio> tag'*/ 
    audio = $("audio");
            /*'#playlist' is referring to the id="playlist" 
            for the <ul class="list-group"> tag*/ 
    playlist = $("#playlist");

            /*is referring to the <li> <a> tags inside the 
            <ul class="list-group"> tag*/ 
    tracks = playlist.find("li a");
            /*length of track which are the <li> <a> tags*/ 
    let len = tracks.length - 1;
    audio[0].volume = .10;
    playlist.find("a").click(function(e){
        e.preventDefault();
        let link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener("ended",function(e){
        current++;
        if(current == len){
            current = 0;
            var link = playlist.find("a")[0];
        }else{
            link = playlist.find("a")[current];    
        }
            run($(link),audio[0]);
    });
}
/*grabs the href source of the <a> tags to play the music when user clicks
    the name of each song (track) to run the song*/
function run(link, player){
    player.src = link.attr("href");
    audio[0].load();
    audio[0].play();
}
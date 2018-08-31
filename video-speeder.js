/******* VIDEO SPEEDER ******/
// Video speeder is the one and only tool you need.

// We don't have time for 1x speed. Even 2x is not enough. So let's watch 3 x the speed.

// It works in any website with video. YouTube, Udemy, Frontend Masters...


function speedMe(r) {
    return document.getElementsByTagName("video")[0].playbackRate = r;
    };
speedMe(3);

// <3 You're welcome. (bow) Don't try 4 or 5, it is unwatchable :)

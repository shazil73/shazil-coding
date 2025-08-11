function getVideo () {
    return new Promise ((resolve) => {setTimeout(() => {console.log("there are some video")},3000);})}


    async function showVideo () {
        await getVideo();
        console.log("video is ready");
    }
    
showVideo()
console.log("i print first")

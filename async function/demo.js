function getvideo () {
    return new promise ((resolve) => {setTimeout(() => {console.log("i print after 3 second")},3000)})}

    async function showvideo () {
        await getvideo();
        console.log("video is shown");
    }

showvideo();
console.log("i print before the video is shown");
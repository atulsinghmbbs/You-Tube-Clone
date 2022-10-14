// var getData = JSON.parse(localStorage.getItem("video"));
// console.log(getData)
// let showvideo = document.getElementById("showvideo");
// getData.map(({id:videoId},{snippet:title})=>{
//     console.log({id:videoId},{snippet:title})
//     let div = document.createElement("div");
//     div.setAttribute("id","div")
//     let iframe = document.createElement("iframe");
//         iframe.src=`https://www.youtube.com/embed/${videoId}`;

//         iframe.width="100%";
//         iframe.height="80%";
//         iframe.allow = "fullscreen"

//         let name = document.createElement("h5");
//         name.innerText=title;
//         div.append(iframe,name);
//         showvideo.append(div)
// })

let rightside = document.getElementById("rightside")
const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyCVSqhFrOPc3taGYAOuN9Zc00n1lFRrUks"
fetch(url)
.then((res) =>{
    console.log(res);
    return res.json();
}).then((res)=>{
    console.log(res);
    popularright(res.items)
}).catch((err)=>{
    console.log(err);
})

function popularright(data){

    data.map(({id, snippet: {channelTitle,title,thumbnails:{medium:{url}}}, statistics:{viewCount}}) =>{
        let div = document.createElement("div");
        div.setAttribute("id","rightdiv")
        let div1 = document.createElement("div");
        div1.setAttribute("id","div1")
        let div2 = document.createElement("div");
        div2.setAttribute("id","div2")
        let image = document.createElement("img");
        image.src=url;
        
        div1.append(image)
        
        let name = document.createElement("h5");
        name.innerText=title;
        name.setAttribute("id","name")
        let channelname = document.createElement("h5");
        channelname.innerText=channelTitle;
        channelname.setAttribute("class","name")
        let views = document.createElement("h5");
        views.setAttribute("class","name")
        views.innerText=`${viewCount} views`;
        div2.append(name,channelname,views)
        div2.setAttribute("id","div2")
        div.append(div1,div2)
        rightside.append(div)
    })
}

const getpopvideos = JSON.parse(localStorage.getItem("clickvideo"));
let videoplaying = document.getElementById("videoplaying")
console.log(getpopvideos)
let div = document.createElement("div");
div.setAttribute("id","div")
let iframe = document.createElement("iframe");
    if(getpopvideos.id.videoId==null){
        iframe.src=`https://www.youtube.com/embed/${getpopvideos.id}`;
        
    }
    else{
        
        iframe.src=`https://www.youtube.com/embed/${getpopvideos.id.videoId}`;
    }

        iframe.width="100%";
        iframe.height="80%";
        iframe.allow = "fullscreen"

        let name = document.createElement("h3");
        name.innerText=getpopvideos.title;
        name.setAttribute("class","title")
        console.log(name)
        div.append(iframe,name);
        videoplaying.append(div) 

// const getvideos = JSON.parse(localStorage.getItem("data"));

// //let videoplaying = document.getElementById("videoplaying")
// console.log(getvideos)
// let div1 = document.createElement("div");
// div1.setAttribute("id","div")
// let iframe = document.createElement("iframe");
//     iframe.src=`https://www.youtube.com/embed/${getvideos.id.videoId}`;

//         iframe.width="100%";
//         iframe.height="80%";
//         iframe.allow = "fullscreen"

//         let name = document.createElement("h3");
//         name.innerText=getvideos.snippet.title;
//         div1.append(iframe,name);
//         videoplaying.append(div1) 
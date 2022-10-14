//GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]
const APIKEY = "AIzaSyB4BYIkvyb0FjjVtnnt9ETVXtM0faSSzgQ";

let id;
let query = document.getElementById("query");
if(query==""){
    movies_div.innerHTML=null;
}
const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyCVSqhFrOPc3taGYAOuN9Zc00n1lFRrUks"
fetch(url)
.then((res) =>{
    console.log(res);
    return res.json();
}).then((res)=>{
    console.log(res);
    popular(res.items)
}).catch((err)=>{
    console.log(err);
})

let show_videos = document.getElementById("show_videos");

function popular(data){
    
    data.map(({id, snippet: {channelTitle,title,thumbnails:{medium:{url}}}, statistics:{viewCount}}) =>{
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        div1.setAttribute("id","div1")
        let div2 = document.createElement("div");
        div2.setAttribute("id","div2")
        let image = document.createElement("img");
        image.src=url;
        image.setAttribute("id","image")
        let arr = [];
        let data = {
            title,
            id,
        }
        //arr.push(data)
        image.addEventListener("click", function(){
            clickvideo(data)
        })
        div1.append(image)
        let div3 = document.createElement("div");
        let img = document.createElement("img");
        img.src="Jack.png";
        div3.append(img)
        image.setAttribute("id","image")
        let div4 = document.createElement("div");
        let name = document.createElement("h5");
        name.innerText=title;
        name.setAttribute("id","name")
        let channelname = document.createElement("h5");
        channelname.innerText=channelTitle;
        channelname.setAttribute("class","name")
        let views = document.createElement("h5");
        views.setAttribute("class","name")
        views.innerText=`${viewCount} views`;
        div4.append(name,channelname,views)
        div2.append(div3,div4)
        div.append(div1,div2)
        show_videos.append(div)
    })
}

function clickvideo(data){
    localStorage.setItem("clickvideo",JSON.stringify(data))
    console.log(data)
    window.location.href="video.html";
}
const seachVideo = async () => {

    try{
        const q = document.getElementById("query").value;

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${APIKEY}`)

        const data = await res.json()
        console.log(data.items)
        //append(data.items)
        return data.items;
    }catch(err){
        console.log(err)
    }
}

// const seachVideos = async () => {

//     try{
//         const q = document.getElementById("query").value;

//         const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${APIKEY}`)

//         const data = await res.json()
//         console.log(data.items)
//         append(data.items)
//         //return data.items;
//     }catch(err){
//         console.log(err)
//     }
// }

// const append = (videos) =>{

//     let show_videos = document.getElementById("show_videos");
//     show_videos.innerHTML=null;
//     videos.map(({id, snippet: {title,thumbnails:{medium:{url}}}}) =>{
//         let div = document.createElement("div");
//         let image = document.createElement("img");
//         image.src=url;
//         image.setAttribute("id","image")
//         // let iframe = document.createElement("iframe");
//         // iframe.src=`https://www.youtube.com/embed/${videoId}`;

//         // iframe.width="100%";
//         // iframe.height="100%";
//         // iframe.allow = "fullscreen"
//         //iframe.append(image)
//         let name = document.createElement("h5");
//         name.innerText=title;
//         div.append(image,name);
//         let arr = [];
//         let data = {
//             title,
//             id
//         }
//         //arr.push(data)
//         div.onclick = ()=>{
//             showvideo(data)
//         }
        
//         show_videos.append(div)
//     })
// }

// const showvideo = (x) =>{
//     window.location.href="video.html";
//     localStorage.setItem("video", JSON.stringify(x))
// }

function appendata(data){
    console.log(data)
    let movies_div = document.getElementById("movies")
    movies_div.style.display="block";
    if(data===undefined){
        return false;
    }
    
    movies_div.innerHTML=null;
    data.map(({id, snippet: {title,thumbnails:{medium:{url}}}}) =>{
        let arr1 = [];
        //console.log(elem)
        let p = document.createElement("p");            
        p.innerText=title;
        console.log(p.innerText)
        p.setAttribute("id","p")
        let data = {
            title,
            id,
        }
        p.addEventListener("click", function(){
            movevideo(data)
            console.log(data)
        })
        movies_div.append(p)
    })
}

function movevideo(arr){
    console.log(arr)
    localStorage.setItem("clickvideo",JSON.stringify(arr))
    window.location.href="video.html";
}
async function main(){
    let data = await seachVideo();

    if(data===undefined){
        return false;
    }
    appendata(data)

}

const search = (func,delay) =>{
    if(id){
        clearTimeout(id)
    }

    id = setTimeout(function(){
        func();
    },delay)
}

// ------------------

let menuicon = document.getElementById("menuicon");
let sidebar = document.querySelector(".sidebar")
menuicon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    console.log("hiii")
}
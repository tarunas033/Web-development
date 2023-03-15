
// // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[AIzaSyCXCijThJfKELhYf0jtiJn-r1nuzDhNJes]
const API_KEY=`AIzaSyBEkHA55xJSjgp1BAZb-xL7TSzThvIZi14`;


const searchVideos = async() => {

try{

const query = document.getElementById('query').value;

const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`)

const data = await res.json();

const actual_data =data.items;

//what and where
appendVideos(actual_data);

// console.log("data:",data);

}   catch(error) {
    console.log("error:",error);
}

 };
  const appendVideos = (data) => {
    
    data.forEach(({snippet, id }) => {
     
      // console.log("el:",el);
  //       data that we need
      // thumbnail
      // videoID
      // title
      // channel name

      const title = snippet.title;

      const videoId = id.videoId;

      const thumbnail = snippet.thumbnails.high.url;

      const channel_name = snippet.channelTitle;

        //  console.log('el:',el)
      const div = document.createElement("div");

      const img = document.createElement("img")
       img.src = thumbnail

      const title_html = document.createElement ('h4');
      title_html.innerText = title;

      const channel_html = document.createElement('h5');
      channel_html.innerText = channel_name;

      div.append(img,title_html,channel_html);

      
      Container_div.append(div);
    });
  };
  

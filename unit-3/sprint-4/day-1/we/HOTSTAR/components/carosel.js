function carousel(){
    let arr =["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/24/1280024-h-aa8dc3cc21b6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5603/1145603-h-3038c1e973f7"];

    let i = 0;
   
    let div = document.getElementById("carousel");
    let img = document.createElement("img");
      img.src= arr[0];

    div.append(img);
     i=i+1

    setInterval(function (){
      if(i==3){
        i = 0;
      } 

       img.src= arr[i];
       i = i + 1;

       div.append(img);
    },2000);

}
carousel();

export default carousel;
var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '不要走再看看啊 🥲';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '感谢观看 👻';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
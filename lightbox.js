function is_youtubelink(e){return!!e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)&&RegExp.$1}function is_imagelink(e){return!!e.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)}function is_vimeolink(e,t){var i=!1,l=new XMLHttpRequest;l.onreadystatechange=function(){if(l.readyState==XMLHttpRequest.DONE)if(200==l.status){var e=JSON.parse(l.responseText);i=e.video_id,console.log(i),t.classList.add("lightbox-vimeo"),t.setAttribute("data-id",i),t.addEventListener("click",function(e){e.preventDefault(),document.getElementById("lightbox").innerHTML='<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://player.vimeo.com/video/'+t.getAttribute("data-id")+'/?autoplay=1&byline=0&title=0&portrait=0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>',document.getElementById("lightbox").style.display="block",setGallery(this)})}else 400==l.status?alert("There was an error 400"):alert("something else other than 200 was returned")},l.open("GET","https://vimeo.com/api/oembed.json?url="+e,!0),l.send()}function setGallery(e){if(document.body.querySelectorAll(".gallery").forEach(e=>{e.classList.remove("gallery")}),e.closest("ul, p")){var t,i=e.closest("ul, p").querySelectorAll("a[class*='lightbox-']");i.forEach(e=>{e.classList.remove("current")}),i.forEach(t=>{e.getAttribute("href")==t.getAttribute("href")&&t.classList.add("current")}),i.length>1&&(document.getElementById("lightbox").classList.add("gallery"),i.forEach(e=>{e.classList.add("gallery")}));var l=document.querySelectorAll("a.gallery");if(Object.keys(l).forEach(function(e){l[e].classList.contains("current")&&(t=e)}),t==l.length-1)var a=0;else a=parseInt(t)+1;if(0==t)var n=parseInt(l.length-1);else n=parseInt(t)-1;document.getElementById("next").addEventListener("click",function(){l[a].click()}),document.getElementById("prev").addEventListener("click",function(){l[n].click()})}}document.addEventListener("DOMContentLoaded",function(){var e=document.createElement("div");e.setAttribute("id","lightbox"),document.body.appendChild(e),document.querySelectorAll("a").forEach(e=>{var t=e.getAttribute("href");if(t&&(-1===t.indexOf("vimeo")||e.classList.contains("no-lightbox")||is_vimeolink(t,e),is_youtubelink(t)&&!e.classList.contains("no-lightbox")&&(e.classList.add("lightbox-youtube"),e.setAttribute("data-id",is_youtubelink(t))),is_imagelink(t)&&!e.classList.contains("no-lightbox"))){e.classList.add("lightbox-image");var i=e.getAttribute("href").split("/").pop().split(".")[0];e.setAttribute("title",i)}}),document.getElementById("lightbox").addEventListener("click",function(e){"next"!=e.target.id&&"prev"!=e.target.id&&(this.innerHTML="",document.getElementById("lightbox").style.display="none")}),document.querySelectorAll("a.lightbox-youtube").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),document.getElementById("lightbox").innerHTML='<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://www.youtube.com/embed/'+this.getAttribute("data-id")+'?autoplay=1&showinfo=0&rel=0"></iframe></div>',document.getElementById("lightbox").style.display="block",setGallery(this)})}),document.querySelectorAll("a.lightbox-image").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),document.getElementById("lightbox").innerHTML='<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="img" style="background: url(\''+this.getAttribute("href")+'\') center center / contain no-repeat;" title="'+this.getAttribute("title")+'" ><img src="'+this.getAttribute("href")+'" alt="'+this.getAttribute("title")+'" /></div><span>'+this.getAttribute("title")+"</span>",document.getElementById("lightbox").style.display="block",setGallery(this)})})});
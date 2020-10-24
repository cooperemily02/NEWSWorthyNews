let li = document.createElement('li');
li.setAttribute('id', "listofarticles");
let articles = document.querySelector('#articlelist')
document.getElementById('submitbutton').onclick = 
function submitArticleRequest(){
   let topic = document.getElementById("searchbar").value;
   let mycategory = document.getElementById('category').value;
   if(mycategory == "noneselected")
   {
       window.alert("You have not selected a category");
       return false;
   }

   submitbutton.style.visibility = 'hidden';
   searchbar.style.visibility = 'hidden';
   category.style.visibility = 'hidden';
   searchagain.style.visibility = 'visible';
   gotoarticles.style.visibility = 'visible';
   let pcategory = document.createElement('p');
   pcategory.setAttribute('id', "scrolltoarticles");
    pcategory.innerText = "Showing articles pertaining to: " + mycategory + ". \n With keyword: " + topic + ".";

   li.appendChild(pcategory);
    let url = 'http://newsapi.org/v2/top-headlines?' +
              'category=' + mycategory + '&' +
              'q=' + topic + '&' +
              'apiKey=363f5cb246e3405d9b0ffc826f002954';
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        let i = 0;

        if(data.articles.length==0)
        {
            let noarticlesreturned = document.createElement('P');
            noarticlesreturned.innerHTML = "No articles have been returned.";
            document.body.appendChild(noarticlesreturned);
        }

       data.articles.forEach(article=> {
            let authora = article.author;
            let titlea = article.title;
            let urla = article.url;
            let imgurla = article.urlToImage;
            let descriptiona = article.description;
            let datea = article.publishedAt;

            var articlecomponents = document.createElement('li');
            articlecomponents.setAttribute('id', "singlearticle");

           //Article title and link
            var atitle = document.createElement('a');
            atitle.setAttribute('href', article.url)
            atitle.setAttribute('target', "_blank");
            atitle.setAttribute('style', 'font-size:30px')
            atitle.innerHTML = titlea;
            atitle.setAttribute("text-align", "center");
            articlecomponents.appendChild(atitle);
           

           //Author
           if(authora!=null)
           {
            var aauthor = document.createElement('p');
            aauthor.setAttribute("style", "font-size:20px");
            aauthor.innerHTML = "Author: " + authora;
            articlecomponents.appendChild(aauthor);
           }    

           //Image
           if (imgurla!=null)
           {
            var aimg = document.createElement("img");
            aimg.src = imgurla;
            articlecomponents.appendChild(aimg);
           }

           //Description
           var adescription = document.createElement('p');
           adescription.innerHTML = "Description: " + descriptiona;
           articlecomponents.appendChild(adescription);

           //Date
           var adate = document.createElement('p');
           adate.innerHTML = "Published: " + new Date(datea);
           articlecomponents.appendChild(adate);

           li.appendChild(articlecomponents);
           document.body.appendChild(li);
        
         })
        })
    console.log(topic);
    console.log(mycategory);
    return false;
    }

    document.getElementById('searchagain').onclick = function refreshthepage() {
        location.reload()
    }

    //Get the button:
mybutton = document.getElementById("totop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




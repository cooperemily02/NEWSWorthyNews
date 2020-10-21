let li = document.createElement('li');
li.setAttribute('id', "listofarticles");
let articles = document.querySelector('#articlelist')
document.getElementById('submitbutton').onclick = function submitArticleRequest(){
    let topic = document.getElementById("searchbar").value;
    if(topic == " " || topic == null)
    {
        window.alert("Enter something bitch");
        return false;
    }
    submitbutton.style.visibility = 'hidden';
    searchbar.style.visibility = 'hidden';
    let url = 'http://newsapi.org/v2/everything?' +
              'q=' + topic + '&' +
              'sortBy=popularity&' +
              'apiKey=363f5cb246e3405d9b0ffc826f002954';
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        let i = 0;
       data.articles.forEach(article=> {
        //if(article.content.includes("entertainment") || article.content.includes("technology") || article.content.includes("sports"))
        //{
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
           //document.body.appendChild(document.createElement("br"));

           //Author
           var aauthor = document.createElement('p');
           aauthor.setAttribute("style", "font-size:20px");
           aauthor.innerHTML = "Author: " + authora;
           articlecomponents.appendChild(aauthor);
           //document.body.appendChild(document.createElement("br"));

           //Image
           if (imgurla!=null)
           {
            var aimg = document.createElement("img");
            aimg.src = imgurla;
            articlecomponents.appendChild(aimg);
            //document.body.appendChild(document.createElement("br"));
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
        //}
        
         })
        })
    console.log(topic);
    return false;
    }




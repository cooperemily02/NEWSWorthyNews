let li = document.createElement('li');
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
           
            var container = document.createElement('div');
            container.setAttribute("class", "article");
            document.body.appendChild(container);

           //Article title and link
           var a = document.createElement('a');
           a.setAttribute('href', article.url)
           a.setAttribute('target', "_blank");
           a.setAttribute('style', 'font-size:40px')
           a.innerHTML = article.title;
           a.setAttribute("text-align", "center");
           document.body.appendChild(a);
           document.body.appendChild(document.createElement("br"));

           //Author
           var d = document.createElement('p');
           d.innerHTML = article.author;
           document.body.appendChild(d);
           document.body.appendChild(document.createElement("br"));

           //Image
           if (article.urlToImage!=null)
           {
            var b = document.createElement("img");
            b.src = article.urlToImage;
            document.body.appendChild(b);
            document.body.appendChild(document.createElement("br"));
           }

           //Description
           var c = document.createElement('p');
           c.innerHTML = "Description: " + article.description
           document.body.appendChild(c);

           //Date
           var d = document.createElement('p');
           d.innerHTML = "Published: " + new Date(article.publishedAt);
           document.body.appendChild(d);
        //}
        
         })
        })
    console.log(topic);
    return false;
    }



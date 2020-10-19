let li = document.createElement('li');
let articles = document.querySelector('#articlelist')
function submitArticleRequest(){
    let topic = document.getElementById("searchbar").value;
    let url = 'http://newsapi.org/v2/everything?' +
              'q=${topic}&' +
              'sortBy=popularity&' +
              'apiKey=363f5cb246e3405d9b0ffc826f002954';
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        let i = 0;
       data.articles.forEach(article=> {
           //createArticle(article.title, article.author, new Date(article.date), article.description, article.url, article.urltoImage);
           var a = li.createElement('a');
           a.setAttribute('href', article.url)
           a.setAttribute('target', "_blank");
           a.setAttribute('style', 'font-size:40px')
           a.innerHTML = article.title;
           document.body.appendChild(a);
           document.body.appendChild(document.createElement("br"));
           var d = document.createElement('d');
           d.innerHTML = article.author;
           document.body.appendChild(d);
           document.body.appendChild(document.createElement("br"));
           if (article.urlToImage!=null)
           {
            var b = document.createElement("img");
            b.src = article.urlToImage;
            document.body.appendChild(b);
            document.body.appendChild(document.createElement("br"));
           }
           var c = document.createElement('P');
           c.innerHTML = "Description: " + article.description
           document.body.appendChild(c);
           var d = document.createElement('P');
           d.innerHTML = "Published: " + new Date(article.publishedAt);
           document.body.appendChild(d);
        
         })})
    console.log(topic);
    }


/*function createArticle(title, author, date, description, url, urltoImage)
{
    let newarticle = li.createElement('li');

    //title
    var arttitle = newarticle.createElement('a');
    arttitle.setAttribute("href", url);
    arttitle.setAttribute("target", "_blank");
    arttitle.textContent = title;
    newarticle.appendChild(arttitle);

    //author
    var artauthor = newarticle.createElement('P');
    artauthor.setAttribute("class", "tab");
    artauthor.innerText = author;
    newarticle.appendChild(artauthor);

    //date
    var artdate = newarticle.createElement('P');
    artdate.setAttribute("class", "tab");
    artauthor.innerText = new Date(date);
    newarticle.appendChild(artadate)

    //description
    var artdescription = newarticle.createElement('P');
    artdescription.setAttribute("class", "tab");
    artdescription.innerText = description;
    newarticle.appendChild(artdescription);

    //image
    var artimage = newarticle.createElement('img');
    artimage.setAttribute("src", urltoImage);
    newarticle.appendChild(artimage);

    li.appendChild(newarticle);



}
*/
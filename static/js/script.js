const searchFrom = document.querySelector(".search");
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list')

searchFrom.addEventListener('submit', retrieve)

function retrieve(e){
    generate_table();
    e.preventDefault();
    
    let topic = input.value;
    let url = 'http://newsapi.org/v2/everything?' +
              'q=${topic}&' +
              'sortBy=popularity&' +
              'apiKey=363f5cb246e3405d9b0ffc826f002954';
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        })
    console.log(topic);
}

function generate_table(){
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i<19; i++)
    {
        var row = document.createElement("tr");
        for (var j = 0; i<2; j++)
        {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("test");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
    tblBody.appendChild(row)
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribule("border", 2);
    
}

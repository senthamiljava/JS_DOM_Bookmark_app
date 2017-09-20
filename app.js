document.getElementById('addSite').addEventListener("submit",save);

function save(e)
{
	
	console.log("in sumbmission");
	var name=document.getElementById("site").value;
	var url=document.getElementById("url").value;

     var bookMark={}
     bookMark.name=name;
     bookMark.url=url;
     console.log(bookMark);
     var bookMarks=[];
     bookMarks.push(bookMark);
     console.log(bookMarks);

     for(i=0;i<bookMarks.length;i++)
     {
     console.log(i);
     var n=bookMarks[i].name;
     var url=bookMarks[i].url;

    parent=document.getElementById("sites");
     var element=document.createElement("h1");
     var text=document.createTextNode(n);
     element.appendChild(text);
     parent.appendChild(element);

     var ln=document.createElement("a");
     var att = document.createAttribute("href");
     var t=document.createTextNode(url);
     att.value =url;
     console.log(ln.setAttributeNode(att));
     ln.appendChild(t);     
     parent.appendChild(ln);

    // var del=document.createElement("button");
    // var att=document.createAttribute("onclick");
    // var t=document.createTextNode("DELETE");
    // att.value="deleteEvent(name)";
    // del.setAttributeNode(att);
    // del.appendChild(t);
    // parent.appendChild(del);


     e.preventDefault();       

     }

	 e.preventDefault();
}





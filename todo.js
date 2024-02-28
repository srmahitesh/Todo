
let List=[]; //this array will store the tasks added in the list

let fetch_str=localStorage.getItem('TaskList');

if(fetch_str!=undefined){                  //Fetching PRevious Todos from Local Storage
  List=JSON.parse(fetch_str);
  DisplayList();
}

function addToList(){
  let textShortCut=document.querySelector('#inputbox');
  let dateShortCut=document.querySelector('#inputdate');

  let taskText=textShortCut.value;
  let taskDate=dateShortCut.value;
  List.push({item: taskText, date: taskDate});
  document.querySelector('#inputbox').value='';
  document.querySelector('#inputdate').value='';
}



function DisplayList(){

  let mainHtml=document.querySelector('#List-Container');

  let newHtml='';
  for(let i=0; i<List.length; i++){
    let {item,date}=List[i];
    newHtml+=`
    <div id="internaldiv">
    <div><span>${item}</span></div>
    <div><span>${date}</span></div>
    <div> 
    <button onclick="
    List.splice(${i},1);
    DisplayList();
    ">Delete</button> </div>
    </div>`;
  }
  mainHtml.innerHTML=newHtml;
  let str=JSON.stringify(List);
  localStorage.setItem("TaskList",str);

}
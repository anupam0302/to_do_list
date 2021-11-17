

function myfunc()
{
    let task = document.getElementById("task").value;
    let desc = document.getElementById("desc").value;    
    let arr = [];
    if(!localStorage.getItem("details"))
    {   
        arr.push([task,desc]);
        localStorage.setItem("details",JSON.stringify(arr));
    }
    else
    {
        let array = JSON.parse(localStorage.getItem("details"));
        arr.push(task,desc);
        array.push(arr);
        let str = JSON.stringify(array);
        localStorage.setItem("details",str);
    }
    addToTable();    
}

function addToTable()
{
    let mytable = document.querySelector('table');
    let arr = JSON.parse(localStorage.getItem("details"));
    let i = arr.length-1;
    // let checkbox = document.createElement("input");
    // checkbox.type = "checkbox";
    // mytable.appendChild(checkbox);
    mytable.innerHTML += "<tr><td>"+(i+1)+"</td><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td><td><input type='checkbox' ></td><td><button onclick='deleted("+i+")'>x</button></td></tr>";
}

display();

function display()
{
    let mytable = document.querySelector('table');
    let arr = JSON.parse(localStorage.getItem("details"));

    for(let i=0;i<arr.length;i++)
    {
        mytable.innerHTML += "<tr><td>"+(i+1)+"</tf><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td><td><input type='checkbox' ></td><td><button onclick='deleted("+i+")'>x</button></td></tr>";
    }
}

function deleted(i)
{
    const arr = JSON.parse(localStorage.getItem("details"));
    arr.splice(i,1);
    localStorage.setItem("details",JSON.stringify(arr));
    location.reload();
}



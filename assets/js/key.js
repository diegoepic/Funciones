


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    document.getElementById('key').style.backgroundColor = 'pink';
    } else if (event.key === 's') {
    document.getElementById('key').style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
    document.getElementById('key').style.backgroundColor = 'skyblue';
    }
    else if (event.key === 'q') {
    let div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.backgroundColor ='magenta';
    div.style.border = '10px solid black';
    document.body.appendChild(div);
    }
    else if (event.key === 'w') {
        let div = document.createElement('div');
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.backgroundColor ='grey';
        div.style.border = '10px solid black';
        document.body.appendChild(div);
        }
    else if (event.key === 'e') {
        let div = document.createElement('div');
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.backgroundColor ='brown';
        div.style.border = '10px solid black';
        document.body.appendChild(div);
        }    
           
});
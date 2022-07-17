const table = document.getElementsByTagName('table')[0]; 
table.tHead.rows[0].style.backgroundColor = 'lightgreen'; 
var r = table.tBodies[0]; 
r.rows[0].style.backgroundColor ='pink';
r.rows[1].style.backgroundColor ='pink';
for(let i=0; i<r.rows.length; i++){ 
    var c = r.rows[i]; 
    for(let j=1; j<c.cells.length; j=j+2){
         console.log(c.cells[j].innerText); 
        }
        }
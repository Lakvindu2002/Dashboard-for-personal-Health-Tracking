
Swal.fire("Welcome to Health Tracker");

const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');



let title=document.getElementById("output");

console.log(document.getElementById("output"));




let dateArray=[];
let distanceArray=[];
let weightArray=[];

let firstWeight="";
let lastWeight="";



   
document.getElementById("btnAdd").addEventListener("click",()=>{

    // console.log("clicked");

    let date=document.getElementById("inputDate").value;
    let distance=document.getElementById("inputDistance").value;
    let weight=document.getElementById("inputWeight").value;

    document.getElementById("inputDate").value="";
    document.getElementById("inputDistance").value="";
    document.getElementById("inputWeight").value="";

    // console.log(date);
    // console.log(distance);
    // console.log(weight);

    dateArray.push(date);
    distanceArray.push(distance);
    weightArray.push(weight);

    firstWeight=weightArray[0];
    lastWeight=weightArray[weightArray.length-1];

})
 
  document.getElementById("mainInput").addEventListener("click",()=>{

    let firstWeight2=Number(firstWeight);
    let lastWeight2=Number(lastWeight);

    let tempArray=[];
    let tempArray2=[];
    let tempArray3=[];
     
    dateArray.forEach(element => {

       tempArray.push(element);
        
        
    });

    distanceArray.forEach(element2=>{

        tempArray2.push(element2);
       
        
    });
    weightArray.forEach(element3=>{

        tempArray3.push(element3);
       
        
    })

   
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: tempArray,
          datasets: [{
            label: 'Total Distance Of Run in Each Day',
            backgroundColor:'rgb(26, 26, 29)',
            data: tempArray2,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
     
       
    new Chart(ctx2, {
        type: 'line',
        data: {
          labels: tempArray,
          datasets: [{
            label: 'Weight prograss in Each Day',
            backgroundColor:'rgb(26, 26, 29)',
            data: tempArray3,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
     

      if(firstWeight2==lastWeight2){

        title.innerHTML=` <div class="card" style="background-color: chartreuse;">
                        <div class="card-body" style="background-color: chartreuse;">
                        <p class="card-title" style="text-size:20px;" style="font-size: 25px;font-weight: bold;">${"Your weight has not changed. Try again"}</p>
                        <p class="card-text mt-4" style="text-size:20px;" style="font-size: 25px;font-weight: bold;" >${"Your weight is : "+(firstWeight2)}</p>
                       </div>
                      </div>  
            `

      }else if(firstWeight2>lastWeight2){

            title.innerHTML=`
                        <div class="card" style="background-color: chartreuse;" >
                        <div class="card-body" style="background-color: chartreuse;">
                         <p class="card-text" >${"You are enough. You have lost weight."}</p>
                        <p class="card-text" >${"You lost your weight by : "+(firstWeight2-lastWeight2)}</p>
                       </div>
                </div>
            `
      }else{
        title.innerHTML=`
                         <div class="card" style="background-color: chartreuse;" >
                        <div class="card-body" style="background-color: chartreuse;">
                        <p class="card-text" >${"Your weight has increased. Try again"}</p>
                        <p class="card-text" >${"Your weight increase by : "+(lastWeight2-firstWeight2)}</p>
                       </div>
                     </div>  
            `
      }
   
    
    

    
  });

 
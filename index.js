  //function search button
  function searchButton(){
    document.getElementById('show-all').innerHTML=''
    document.getElementById('card-details').innerHTML='';
    document.getElementById('displayMobile').innerHTML='';
    document.getElementById('spinner').innerHTML=` <div class="d-flex justify-content-center align-items-center" style="height: 400px;">
    <div class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`
    const inputField=document.getElementById('input-field');
    const inputFieldValue=inputField.value;
   if(inputFieldValue==''){
    document.getElementById('spinner').innerHTML=`<div class="d-flex justify-content-center align-items-center" style="height: 400px;">
    <h3>pls enter something</h3>
    </div>`
   
   }
   else{
    const url=` https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      document.getElementById('spinner').innerHTML=''
      document.getElementById('show-all').innerHTML=`<button  class="btn text-white border border-white px-5 d-block mx-auto mt-0 mb-4  " onclick="showall()" >showall</button>`
      showMobile(data.data.slice(0,20))
    })

   }
   
  }
  
//  showMobile funtion
const showMobile=(mobiles)=>{
     console.log(mobiles.length)
     if(mobiles.length==0){
      document.getElementById('spinner').innerHTML=`<div class="d-flex justify-content-center align-items-center" style="height: 400px;">
      <h3>searching result no pound</h3>
      </div>`
      document.getElementById('show-all').innerHTML=''
     }
     else{
      
        var displayMobile=document.getElementById('displayMobile')

        for(let mobile of mobiles){
            var newDiv=document.createElement('div')
            
            newDiv.classList.add('col')
            newDiv.innerHTML=`<div class="card text-center pt-4 rounded shadow fw-bold ">
            <img src="${mobile.image}" class="card-img-top img-fluid w-50 d-block mx-auto" alt="..." style="height: 250px;" >
            <div class="card-body">

              <h5 class="card-title text-black  ">Name: ${mobile.phone_name}</h5>
              <h5 class="card-title text-black   ">Brand: ${mobile.brand}</h5>
              <button class="btn bg-dark text-white px-4 mt-2 mb-3" onclick="details('${mobile.slug}')">Details</button>
            </div>
          </div>`
            displayMobile.appendChild(newDiv)
      
        }
     }
   

 }
 //click function
const details=(datails)=>{
  document.getElementById('card-details').innerHTML=''
  document.getElementById('spinner').innerHTML=` <div class="d-flex justify-content-center align-items-center" style="height: 400px;">
  <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`

     const url=`https://openapi.programming-hero.com/api/phone/${datails}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>{ 
      document.getElementById('spinner').innerHTML=''
       showdetails(data.data)
      
      })
 }
 //show detils
 const showdetails=(data)=>{
console.log(data)
console.log(data.others)

     document.getElementById('card-details').innerHTML=`<div class="card mb-3 " style="width:100%; ">
     <div class="row g-0">
       <div class="col-md-4 p-lg-4  pt-lg-4  d-flex flex-column  justify-content-lg-center align-items-lg-center">
       <div class="text-end d-block d-lg-none"><span onclick="deleteFunction(this)"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="margin-right:10px; margin-top:10px;color:black;" fill="currentColor" class="bi bi-x-square  text-black" viewBox="0 0 16 16">
       <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg></span></div>
         <img src="${data.image}" class="img-fluid rounded-start d-block mx-auto " alt="..." style="width:70%; height:80%;">
       </div>
       <div class="col-md-8">
       <div class="text-end d-none d-lg-block"><span onclick="deleteFunction(this)"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="margin-right:10px; margin-top:10px;color:black;" fill="currentColor" class="bi bi-x-square text-black" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></span></div>
         <div class="card-body text-black  fw-bold pb-5">
         
           <p class="card-title">Name: <span class="text-black fw-normal"> ${data.name}</span> </p>
           <p class="card-text"> Brand: <span class="text-black fw-normal">${data.brand} </span>  </p>
          
            <p class="card-text">ReleaseDate: <span class="text-black fw-normal"> ${data.releaseDate ? data.releaseDate:'release data no found'} </span> </p>
            <p class="card-text">Storage: <span class="text-black fw-normal"> ${data.mainFeatures.storage}</span> </p>
            <p class="card-text">Memory: <span class="text-black fw-normal"> ${data.mainFeatures.memory}</span> </p>
            <p class="card-text"> Chipset: <span class="text-black fw-normal"> ${data.mainFeatures.chipSet}</span> </p>
            <p class="card-text"> Display-size: <span class="text-black fw-normal"> ${data.mainFeatures.displaySize}</span> </p>
            <p class="card-text"> Sensor:<span class="text-black fw-normal">${data.mainFeatures.sensors} </span>   </p>
            <p class="card-text"> GPS:<span class="fw-normal">${data.others ? data.others.GPS:'No '}  </span> <br> Bluetooth:<span class="fw-normal"> ${data.others ? data.others.Bluetooth:'No'} </span> <br>   WLAN:<span class="fw-normal">${data.others ? data.others. WLAN:'No'}</span> <br>  USB:<span class="fw-normal">${data.others ? data.others. USB:'No'} </span> <br>     Radio:<span class="fw-normal">${data.others ? data.others. Radio:'No'} </span>   <br>    NFC:<span class="fw-normal">${data.others ? data.others.   NFC:'No'}</span></p>
          
         </div>
       </div>
     </div>
   </div>`
 
 

 }

 //delet details
const deleteFunction=(div)=>{

console.log(div.parentNode.parentNode.parentNode.parentNode.style.display='none')
 }


//showall function
const showall=()=>{

  document.getElementById('show-all').innerHTML=''

  document.getElementById('card-details').innerHTML='';
  document.getElementById('displayMobile').innerHTML='';
  document.getElementById('spinner').innerHTML=` <div class="d-flex justify-content-center align-items-center" style="height: 400px;">
  <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`
  const inputField=document.getElementById('input-field');
  const inputFieldValue=inputField.value;
 if(inputFieldValue==''){
  document.getElementById('spinner').innerHTML=`<div class="d-flex justify-content-center align-items-center" style="height: 400px;">
  <h3>pls enter something</h3>
  </div>`

 }
 else{
  const url=` https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    document.getElementById('spinner').innerHTML=''
    showMobileAll(data.data)
  })

 }
}

//showmobileAll function
const showMobileAll=(mobiles)=>{
  console.log(mobiles.length)
  if(mobiles.length==0){
   document.getElementById('spinner').innerHTML=`<div class="d-flex justify-content-center align-items-center" style="height: 400px;">
   <h3>searching result no pound</h3>
   </div>`
  }
  else{
   
     var displayMobile=document.getElementById('displayMobile')

     for(let mobile of mobiles){
         var newDiv=document.createElement('div')
         
         newDiv.classList.add('col')
         newDiv.innerHTML=`<div class="card text-center pt-4 rounded shadow fw-bold ">
         <img src="${mobile.image}" class="card-img-top img-fluid w-50 d-block mx-auto" alt="..." style="height: 250px;" >
         <div class="card-body">

           <h5 class="card-title text-black  ">Name: ${mobile.phone_name}</h5>
           <h5 class="card-title text-black   ">Brand: ${mobile.brand}</h5>
           <button class="btn bg-dark text-white px-4 mt-2 mb-3" onclick="details('${mobile.slug}')">Details</button>
         </div>
       </div>`
         displayMobile.appendChild(newDiv)
   
     }
  }


}
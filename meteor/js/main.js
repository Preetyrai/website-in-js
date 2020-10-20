"use strict";


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    
    renderHTML(myObj)
  }
};
xmlhttp.open("GET", "https://next.json-generator.com/api/json/get/V1f5G_Qzw", true);
xmlhttp.send();


function renderHTML(data){
  var about = data.about;
  var links = data.links;
  var footer = data.footer_link;
  document.getElementById('demo').innerHTML = `<span>${data.header.small_heading}</span> 
                                               <h2>${data.header.small_heading}</h2>
                                               <p>${data.header.para}</p>`;
    
                
  document.getElementById('mop').innerHTML = `${about.map(about_detail).join('')}`;
  document.getElementById('link').innerHTML = `${links.map(navigation).join('')}`;
  document.getElementById('copyright').innerHTML = `<p>${data.copyright}<p>`;
  document.getElementById('footerLink').innerHTML =  `${data.footer_link.map(footlink).join('')}`; 

/*-----------------------------introduction start----------------------*/
 function about_detail(intro){
       return`<div class="col-md-3 col-sm-6 col-xs-12"> 
                                              <div class="service-item ${intro.icon}">
                                              <div class="icon"></div>
                                              <h4>${intro.heading}</h4>
                                              <p>${intro.para}</p>
                                              </div>
                                              </div>`
                                            }
/*-----------------------------introduction end----------------------*/

/*-----------------------------navigation start----------------------*/

 function navigation(nav){
                 return `
                 <li><a href="#" class="scroll-top" data-id="${nav.data_id}">${nav.menu_name}</a></li>
                 `
               }
/*-------------------------------navigation end------------------------*/


/*-----------------------------footer icon start----------------------*/
function footlink(data){
     return`<li>
                                <a href="${data.link}"><i class="fa fa-${data.icon}"></i></a>
                            </li>`
  }


/*(function(){

  function onPositionRecieved(position){
       console.log(position);
  }

  if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(onPositionRecieved);
  }
})();*/



/*-----------------------------footer icon end----------------------*/

  }

         
     
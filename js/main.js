import { data } from "./data.js";


function seemore(){
    console.log("click");
}

$("#btn").click(function(){
    let s=document.getElementById("service").value;
    console.log(s);
    let p=Number(document.getElementById("pin").value);
    console.log(p);
    let c=document.getElementById("city").value;
    console.log(c);
let z=document.getElementById("zone").value;
console.log(z);
    const service_providers=[];

    for (const d of data) {
        if(d.occupation===s && d.pincode===p && d.city===c && d.zone===z){
            service_providers.push(d);
        }
    }
    console.log(service_providers);
    
    let text="";
    // Create anchor element.
    var a = document.createElement('a'); 
          
    // Set the href property.
    a.setAttribute('href',"https://www.youtube.com/"); 
    a.textContent= "link text";
      
    // Append the anchor element to the body.
    
    for (const p of service_providers) {
        
        text+=`<div class="s-provider">
        <hr>
		<h3 id="seemore" onclick="seemore()">Name:${p.name}</h3>
		<p>${p.occupation}</p>
		<h5>Mob no.${p.number}</h5>
		<p>City:${p.city}, Pin code:${p.pincode}</p>
        <h4>${p.zone}</p>

	</div>`
    }
    document.getElementById("mydiv").innerHTML=text;
    document.getElementById("mydiv").appendChild(a);

});


$("#seemore").click(function(){
    console.log("click");
});

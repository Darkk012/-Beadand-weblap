function ido(){
		d=new Date();
		ev=d.getFullYear();
		ho=d.getMonth()+1;
		nap=d.getDate();
		ora=d.getHours();
		perc=d.getMinutes();
		mp=d.getSeconds();		
		str=ev+"."+ho+"."+nap+". "+ora+":"+perc+":"+mp;
		document.getElementById("idopont").innerHTML=str;		
		setTimeout("ido()",1000);
	}

function elsokepek(){
	str="";
	str+='<h1>Hubble által készített képek:</h1>'
	str+='<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'
	str+='<div class="carousel-inner">'
	str+='<div class="carousel-item active">'
	str+='<img src="kepek/img0.jpg" class="d-block w-100" alt="kep0">'
	str+='</div>'
	for(i=1;i<9;i++){
		str+='<div class="carousel-item">'
		str+='<img src="kepek/img'+i+'.jpg" class="d-block w-100" alt="kep'+i+'">'
		str+='</div>'
	}		
	str+='</div>'
	str+='<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">'
	str+='<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
	str+='<span class="sr-only">Previous</span>'
	str+='</a>'
	str+='<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">'
	str+='<span class="carousel-control-next-icon" aria-hidden="true"></span>'
	str+='<span class="sr-only">Next</span>'
	str+='</a>'
	str+='</div>'
	document.getElementById('g1').innerHTML=str;
}
	
	
function masodkepek(){
	str="";
	str+='<h1>Amatőr fotósók által készitett képek:</h1>'
	str+='<div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">'
	str+='<div class="carousel-inner">'
	str+='<div class="carousel-item active">'
	str+='<img src="kepek/imga0.jpg" class="d-block w-100" alt="kep0">'
	str+='</div>'
	for(i=1;i<8;i++){
		str+='<div class="carousel-item">'
		str+='<img src="kepek/imga'+i+'.jpg" class="d-block w-100" alt="kep'+i+'">'
		str+='</div>'
	}		
	str+='</div>'
	str+='<a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">'
	str+='<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
	str+='<span class="sr-only">Previous</span>'
	str+='</a>'
	str+='<a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">'
	str+='<span class="carousel-control-next-icon" aria-hidden="true"></span>'
	str+='<span class="sr-only">Next</span>'
	str+='</a>'
	str+='</div>'
	document.getElementById('g2').innerHTML=str;
}
	

window.addEventListener('load',colocarEvent)
function colocarEvent(){
	open=document.querySelectorAll(".options ul li.updown")
	for(i=0;i<open.length;i++){
		pg =open[i].addEventListener('click',abrir);

	}
}
x=0;
d=0;
function abrir(){
	
	ol=this.querySelector('ol')
	
	if(ol.classList.contains("mainbox")){
		x+=1;
	if(x%2==1){
		ol.style="display:block;";
		
	}else{
		ol.style="display:none;";
	}
	}else{
		d+=1;
	if(d%2==1){
		ol.style="display:block;";
		
	}else{
		ol.style="display:none;";
	}		
	}

}

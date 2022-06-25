var firstText= document.getElementsByClassName("first-text")[0];
var secondText= document.getElementsByClassName("second-text")[0];
setTimeout(()=>{
    firstText.style["display"]="none";
    secondText.style["display"]="inline-block";
    document.getElementById("span").style["visibility"]="hidden";
},1000);
setTimeout(()=>{
    document.getElementById("span").style["visibility"]="visible";
},1400);





window.onload= function monk(){
    setTimeout(()=>{
        document.getElementsByClassName("load")[0].querySelector(".image-container").style["animation"]="popout 1s ease";
        document.getElementsByClassName("load")[0].querySelector(".text-container").style["animation"]="popout 1s ease";
        setTimeout(()=>{
            document.getElementsByClassName("load")[0].querySelector(".image-container").style["display"]="none";
            document.getElementsByClassName("load")[0].querySelector(".text-container").style["display"]="none";
            setTimeout(()=>{
                document.getElementsByClassName("load")[0].style["display"]="none";
                document.getElementsByClassName("container")[0].style["display"]="block";
            },2000);
        },1000);
    },4000);
}

var totalTranslateX= 0;
var id=0;
function prevClickHandler(){
    totalTranslateX+= 11.6;
    id-=1;

    if(id===0){
        document.getElementsByClassName("teaser")[0].classList.add("active");
    }
    else{
        if(document.getElementsByClassName("teaser")[0].classList.contains("active")){
            document.getElementsByClassName("teaser")[0].classList.remove("active");
        }
    }
    
    if(id>0 && id<8){
        Array.from(document.getElementsByClassName("quotes")).map((item,index)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
        document.getElementsByClassName(`quotes quotes_${id}`)[0].classList.add("active");
    }
    else{
        Array.from(document.getElementsByClassName("quotes")).map((item,index)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
    }

    if(id===0){
        document.getElementById("prev").style["display"]="none"
    }
    else{
        document.getElementById("prev").style["display"]="block";
    }

    if(id===8){
        document.getElementById("next").style["display"]="none";
    }
    else{
        document.getElementById("next").style["display"]="block";
    }
    
    document.getElementsByClassName("nav-item active")[0].classList.remove("active");
    document.getElementById(`${id}`).classList.add("active");
    document.getElementsByClassName("background-image")[0].style["transform"]=`translateX(${totalTranslateX}%)`;
};

function nextClickHandler(){
    totalTranslateX+= -11.6;
    id+=1;

    if(id===0){
        document.getElementsByClassName("teaser")[0].classList.add("active");
    }
    else{
        if(document.getElementsByClassName("teaser")[0].classList.contains("active")){
            document.getElementsByClassName("teaser")[0].classList.remove("active");
        }
    }
    
    if(id>0 && id<8){
        Array.from(document.getElementsByClassName("quotes")).map((item,index)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
        document.getElementsByClassName(`quotes quotes_${id}`)[0].classList.add("active");
    }
    else{
        Array.from(document.getElementsByClassName("quotes")).map((item,index)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
    }

    if(id===0){
        document.getElementById("prev").style["display"]="none"
    }
    else{
        document.getElementById("prev").style["display"]="block";
    }

    if(id===8){
        document.getElementById("next").style["display"]="none";
    }
    else{
        document.getElementById("next").style["display"]="block";
    }
    document.getElementsByClassName("nav-item active")[0].classList.remove("active");
    document.getElementById(`${id}`).classList.add("active");
    document.getElementsByClassName("background-image")[0].style["transform"]=`translateX(${totalTranslateX}%)`;
};
function navClickHandler(e){
    var currentId=e.srcElement.parentNode.id;
    var activeId= document.getElementsByClassName("nav-item active")[0].getAttribute("id");
    document.getElementsByClassName("nav-item active")[0].classList.remove("active");
    e.srcElement.parentNode.classList.add("active");
    id= parseInt(currentId);

    if(id===0){
        document.getElementsByClassName("teaser")[0].classList.add("active");
    }
    else{
        if(document.getElementsByClassName("teaser")[0].classList.contains("active")){
            document.getElementsByClassName("teaser")[0].classList.remove("active");
        }
    }
    
    if(id>0 && id<8){
        Array.from(document.getElementsByClassName("quotes")).map((item,index)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
        document.getElementsByClassName(`quotes quotes_${id}`)[0].classList.add("active");
    }
    else{
        Array.from(document.getElementsByClassName("quotes")).map((item,index)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
    }

    if(currentId==="0"){
        document.getElementById("prev").style["display"]="none"
    }
    else{
        document.getElementById("prev").style["display"]="block";
    }

    if(currentId==="8"){
        document.getElementById("next").style["display"]="none";
    }
    else{
        document.getElementById("next").style["display"]="block";
    }

    if(activeId>currentId){
        totalTranslateX+=(activeId-currentId)*11.6;
        document.getElementsByClassName("background-image")[0].style["transform"]=`translateX(${totalTranslateX}%)`;
    }
    else{
        totalTranslateX+=(currentId-activeId)*-11.6;
        document.getElementsByClassName("background-image")[0].style["transform"]=`translateX(${totalTranslateX}%)`;
    }
};

Array.from(document.getElementsByClassName("nav-item")).map((item,index)=>{
    item.addEventListener("click",navClickHandler);
});


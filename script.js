console.log("script is running...")
document.querySelector('.cancel').style.display = 'none';
document.querySelector('.ham').addEventListener("click", ()=>{document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.cancel').style.display = 'none'
    }   
    else{
        setTimeout(()=>{
            document.querySelector('.cancel').style.display= 'inline'
        }, 400);
        document.querySelector('.ham').style.display = 'none'
    }
})
document.querySelector('.cancel').addEventListener("click", ()=>{document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){    
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.cancel').style.display = 'none'
    }   
    else{
        document.querySelector('.cancel').style.display = 'inline'
        document.querySelector('.ham').style.display = 'none'
    }
})
    
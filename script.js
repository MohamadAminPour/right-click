


let contextMenu = document.getElementById('contextMenu')


document.body.addEventListener('contextmenu', function (event) {
  event.preventDefault()

  if (contextMenu.style.display === 'none') {
    contextMenu.style.left = event.pageX + 'px'
    contextMenu.style.top = event.pageY + 'px'
    

    contextMenu.style.display = 'block'
  }
  else {
    contextMenu.style.left = event.pageX + 'px'
    contextMenu.style.top = event.pageY + 'px'
  }
  console.log(event);
})


document.body.addEventListener('click',function(event){
 

    contextMenu.style.display = 'none'
  
})






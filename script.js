const dropdownMenu=document.querySelectorAll('.option')
const select= document.querySelectorAll('table')
const inputBox=document.querySelectorAll('.inputBox')
const off=document.querySelectorAll('.off')
const radio=document.querySelectorAll('.button')


const handleMenu=(event)=>{
    const idno=event.target.classList[1]
     const selectedDiv=document.getElementById(idno)
    
      const radioButton= document.getElementById(`radio-${selectedDiv.classList[1]}`)
      radioButton.checked=true;
     selectedDiv.classList.toggle('open')

     dropdownMenu.forEach((div)=>{
           if(div!=selectedDiv && div.classList.contains('open')){
            div.classList.toggle('open')
           }
     })



}
//using event bubbling to handle the dropdown menu
dropdownMenu.forEach((option) => {
    option.addEventListener('click',handleMenu
    )
});

//used stop propagation to stop unnecessary event bubbling 
select.forEach((select)=>{
      select.addEventListener('click',(event)=>{
        event.stopPropagation()
      })
})

radio.forEach((select)=>{
    select.addEventListener('click',(event)=>{
      event.stopPropagation()
    })
})

off.forEach((select)=>{
    select.addEventListener('click',(event)=>{
      event.stopPropagation()
    })
})

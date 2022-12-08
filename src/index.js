import './less/index.less'

// Your code goes here!


//1-Load

    window.onload = function(event){    
        console.log(`event ${event.type} fired! Ready to go!`)
        const heading = document.querySelector('h1')
        heading.textContent = "Ready to GO!"


//2-copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

//3-click
    document.body.addEventListener('click', event =>{
        event.target.classList.toggle('mirror')
    })

//4- dblclick
    document.body.addEventListener('dblclick', event =>{
        event.target.outerHTML = ''
    })

//5-keydown
    window.addEventListener('keydown', event =>{
        if(event.key === '6'){
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })

//6-mousemove
    document.body.addEventListener('mousemove', event => {
        const{clientX, clientY} = event
        //console.log(`Mouse is at ${clientX} and ${clientY}`)
    })

//7-mouseenter
//8-mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations){
        destination.addEventListener(`mouseenter`, () =>{
            destination.style.fontweight = 'bold'
        })
        destination.addEventListener(`mouseleave`, () =>{
            setTimeout = (()=> {
                destination.style.fontweight = 'initial'
            }, 500)
        })
    }

}

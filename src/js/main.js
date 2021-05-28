
window.onload = () => {
          
      let themeMode = localStorage.getItem("theme") 
      const initialCheckmark = document.createElement("div")
      
      // if no theme has previously been saved in localStorage then use theme-1
      // else set the last saved theme
      if(!themeMode) {
            const targetElement = document.getElementById("theme-1")
            targetElement.appendChild(initialCheckmark).setAttribute('id', 'checkmark')
      } else {
            const targetElement = document.getElementById(themeMode)
            targetElement.appendChild(initialCheckmark).setAttribute('id', 'checkmark')
            document.documentElement.setAttribute('data-theme', themeMode)
      }

      document.querySelectorAll('.checkmark-area').forEach(item => {
            item.addEventListener('click', event => {

              //set data-them on html-element to the theme matching the press button
              document.documentElement.setAttribute('data-theme', item.id)
              
              //move checkmark to the correct position relative to the current theme
              const checkMark = document.getElementById("checkmark")
              document.getElementById(item.id).appendChild(checkMark)

            //update localStorage
            localStorage.setItem('theme', item.id)  
            })
      })
      

}




// function toggleBtn(e) {
//       const htmlEl = document.documentElement
//       const el = document.getElementById("checkmark")
//       let targetEl = document.getElementById('theme-' + e)
//       htmlEl.setAttribute('data-theme', 'theme-' + e)
//       targetEl.appendChild(el)
//     }



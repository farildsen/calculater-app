
function toggleBtn(e) {
      const htmlEl = document.documentElement
      const el = document.getElementById("checkmark")
      let targetEl = document.getElementById('theme-' + e)
      htmlEl.setAttribute('data-theme', 'theme-' + e)
      targetEl.appendChild(el)
    }



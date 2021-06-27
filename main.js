const Panes = {
  active: null,
  scrollTimeout: null,

  switch(target) {
    if (target == this.active) return
    this.active = target
    document.querySelector('.button.active').classList.remove('active')
    document.querySelector(`.button[data-target=${target}]`).classList.add('active')
  },

  scrollTo(target) {
    clearTimeout(this.scrollTimeout)

    let targetPane = document.querySelector(`[data-id=${target}]`)
    if(!targetPane) return

    targetPane.scrollIntoView({
      behavior: 'smooth'
    })
    Panes.switch(target)

  }
  
}

window.onload = function () {
  // nav buttons handler
  document.querySelector('#nav').onclick = function (e) {
    let target = e.target.getAttribute('data-target')
    if (target) {
      Panes.scrollTo(target)
    }
  }

  // index buttons handler
  document.querySelector('.pane.index>.grid').onclick = function (e) {
    console.log(this, e.target)
    if (e.target.classList.contains('active')) {
      window.open(e.target.getAttribute('data-link'))
      return
    }
    if (this != e.target) {
      let target = e.target.getAttribute('data-target'),
        targetEl = document.querySelector(`.head>.description.${target}`),
        activeGrid = document.querySelector('.grid>div.active')

      if (!targetEl) return

      document.querySelector('.head>.description.active').classList.remove('active')
      if (activeGrid) activeGrid.classList.remove('active')
      targetEl.classList.add('active')
      e.target.classList.add('active')
    }
  }

  // scroll handler
  document.querySelector('.wrapper').addEventListener('scroll', function (e) {
    let x = this.scrollTop / window.innerHeight,
      y = Math.floor(x + .5),
      z = x % 1,
      v = 1 - z

    clearTimeout(Panes.scrollTimeout)
    Panes.scrollTimeout = setTimeout(function () {
      Panes.switch(document.querySelector('.panes').children[y].getAttribute('data-id'))
      if (z < .2 || v < .2)
        Panes.scrollTo(document.querySelector('.panes').children[y].getAttribute('data-id'))
    }, 200)

  });

  // hash check
  if (location.hash) {
    window.scrollTo(0, 0)                               // prevent scroll jump
    let target = location.hash.slice(1)                 // get target pane
    Panes.scrollTo(target)

  }

  // initial typewriter animation
  document.querySelectorAll('.typein').forEach(typein => {
    var target = typein.getAttribute('data-content')

    function print(index = 0) {
      typein.textContent += target[index] // add next char

      if (target[index + 1]) {  // if exists, shedule next char
        setTimeout(function () {
          print(index + 1)
        }, 75)
      }

    }

    print() // start animation

  })

}

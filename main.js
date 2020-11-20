const Panes = {
  active: null,
  scrollTimeout: null,
  switch(target) {
    if (target == this.active) return
    this.active = target
    document.querySelector('.button.active').classList.remove('active')
    document.querySelector(`.button[data-target=${target}]`).classList.add('active')
  },
  scrollTo(target){
    clearTimeout(this.scrollTimeout)
    document.querySelector(`#${target}`).scrollIntoView({
      behavior: 'smooth'
    })
    Panes.switch(target)
  }
}

window.onload = function () {
  // nav buttons handler
  document.querySelector('#nav').onclick = function (e) {
    e.preventDefault()
    let target = e.target.getAttribute('data-target')
    if (target) {
      Panes.scrollTo(target)
    }
  }

  // index buttons handler
  document.querySelector('#index>.grid').onclick = function (e) {
    if(this != e.target){
      let target = e.target.getAttribute('data-target'),
        targetEl = document.querySelector(`.head>.description.${target}`)

      if(!targetEl) return
      document.querySelector('.head>.description.active').classList.remove('active')
      targetEl.classList.add('active')
    }
  }

  // scroll handler
  document.querySelector('.wrapper').addEventListener('scroll', function (e) {
    let x = this.scrollTop / window.innerHeight,
      y = Math.floor(x + .5)

    clearTimeout(Panes.scrollTimeout)
    Panes.scrollTimeout = setTimeout(function () {
      Panes.scrollTo(document.querySelector('.panes').children[y].id)
    }, 200)

  });

  // window.onhashchange = e => {
  //   e.preventDefault()
  //   console.log(e, location.hash)
  // }

  // hash check
  if(location.hash){
    let target = location.hash.slice(1)
    if (!document.querySelector(`#${target}`)) return
    Panes.switch(target)
    document.querySelector(`#${target}`).scrollIntoView()
  }

  // initial typewriter animation
  document.querySelectorAll('.typein').forEach(typein => {
    var target = typein.getAttribute('data-content')
    function print(index) {
      typein.textContent += target[index]
      if (target[index + 1]) {
        setTimeout(function () {
          print(index+1)
        }, 75)
      }
    }
    print(0)
  })

}

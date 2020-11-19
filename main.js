const Panes = {
  active: null,
  switch(target) {
    if (target == this.active) return
    this.active = target
    document.querySelector('.butt.active').classList.remove('active')
    document.querySelector(`.butt[data-target=${target}]`).classList.add('active')
  }
}

window.onload = function () {
  document.querySelector('#nav').onclick = function (e) {
    let target = e.target.getAttribute('data-target')
    if (target) {
      // location.href = `#${target}`
      clearTimeout(scrollTimeout)
      document.querySelector(`#${target}`).scrollIntoView({
        behavior: 'smooth'
      })
      Panes.switch(target)
    }
  }

  var scrollTimeout,
    wrapper = document.querySelector('.wrapper')

  wrapper.addEventListener('scroll', function (e) {
    let x = wrapper.scrollTop / window.innerHeight,
      y = Math.floor(x + .3)

    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(function () {
      Panes.switch(['about', 'contact', 'more'][y])
    }, 75)

  });

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

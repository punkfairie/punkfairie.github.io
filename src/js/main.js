import CircleType from 'circletype'

new CircleType(document.getElementById('footer')).radius(250).dir(-1)
new CircleType(document.getElementById('headerTitle')).radius(450)

const carousel = document.getElementById('carousel')
const prevBtn = document.getElementById('carousel-prev')
const nextBtn = document.getElementById('carousel-next')

const scroll = function (event) {
  const slideWidth = document.querySelector('.Carousel-item').clientWidth

  if (event.target.id === 'carousel-next') {
    carousel.scrollLeft += slideWidth
  } else if (event.target.id === 'carousel-prev') {
    carousel.scrollLeft -= slideWidth
  }
}

nextBtn.addEventListener('click', scroll)
prevBtn.addEventListener('click', scroll)

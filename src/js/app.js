import Zooming from 'zooming'

document.addEventListener('DOMContentLoaded', () => {
  const zooming = new Zooming()

  zooming.listen('.img-zoomable')
})

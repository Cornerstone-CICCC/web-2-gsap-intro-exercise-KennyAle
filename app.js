const timeline = gsap.timeline()

timeline.to('.red', { duration: 0, transform: 'translate(-110%, -110%)'})
.to('.green', { duration: 0, transform: 'translate(110%, -110%)'})
.to('.blue', { duration: 0, transform: 'translate(110%, 110%)'})
.to('.yellow', { duration: 0, transform: 'translate(-110%, 110%)'})
.to('.red', { duration: 0.5, transform: 'translate(0)'})
.to('.green', { duration: 0.5, transform: 'translate(0)'})
.to('.blue', { duration: 0.5, transform: 'translate(0)'})
.to('.yellow', { duration: 0.5, transform: 'translate(0)'})
.to('.red', { duration: 1, top: 0, left: 'calc(100% - 200px)', backgroundColor: 'green'})
.to('.green', { duration: 1, top: 'calc(100% - 200px)', right: 0, backgroundColor: 'blue'}, '<')
.to('.blue', { duration: 1, bottom: 0, right: 'calc(100% - 200px)', backgroundColor: 'yellow'}, '<')
.to('.yellow', { duration: 1, bottom: 'calc(100% - 200px)', left: 0, backgroundColor: 'red'}, '<')
.to('.box', { borderRadius: '50%' }, '<')

timeline.play()
async function addSmoothScroll() {
  const LocomotiveScroll = (await import('locomotive-scroll')).default
  const locomotiveScroll = new LocomotiveScroll()
}

export default addSmoothScroll;
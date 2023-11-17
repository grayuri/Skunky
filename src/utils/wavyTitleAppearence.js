import gsap from "gsap"

export default function wavyTitleAppearence(element, splitedElement) {
  return gsap.from(splitedElement.chars, {
    yPercent: 130,
    stagger: 0.024,
    ease: "back.out",
    duration: 0.48,
    delay: 0.48,

    scrollTrigger: {
      trigger: element,
      start: "top 100%"
    }
  })
}

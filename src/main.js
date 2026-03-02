import './style.scss'
import './lottieplayer'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  offset: 200,
  duration: 700
})

const lottie = document.querySelector('.key_visual_animation')

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lottie.play()
        obs.unobserve(entry.target) // 播放後就不再監聽
      }
    })
  },
  { threshold: 0.3 }
)

observer.observe(lottie)
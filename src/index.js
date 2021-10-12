import './styles.css';

const refs = {
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
}

const { daysEl, hoursEl, minsEl, secsEl } = refs

class DownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null
    this.selector = selector
    this.targetDate = targetDate
  }

  startInterval() {
    this.selector = setInterval(() => {
      const currentTime = Date.now()
      const deltaTime = this.targetDate - currentTime
      const countDown = this.getTimeComponents(deltaTime)

      this.upClockView(countDown)
  }, 1000)
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs}
  }

  pad(value) {
    return String(value).padStart(2, '0')
  }

  upClockView({ days, hours, mins, secs }) {
    daysEl.textContent = days
    hoursEl.textContent = hours
    minsEl.textContent = mins
    secsEl.textContent = secs
  }
}

const timer = new DownTimer({
  selector: '#timer-1',
  targetDate: new Date('dec 1, 2021')
});

timer.startInterval()
function getCompleted(part, total) {
    const [ph, pm, ps] = part.split(':')
    let partInSeconds = (Number(ph) * 3600) + (Number(pm) * 60) + Number(ps)
  
    const [th, tm, ts] = total.split(':')
    let totalInSeconds = (Number(th) * 3600) + (Number(tm) * 60) + Number(ts)
  
    const gcd = (a, b) => {
      let remainder;
  
      while (b) {
        remainder = a % b
        a = b
        b = remainder
      }
  
      return a
    }
  
    const divisor = gcd(partInSeconds, totalInSeconds)
  
    return `${partInSeconds /= divisor}/${totalInSeconds /= divisor}`
}

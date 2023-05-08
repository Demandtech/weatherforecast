let date = new Date()

export const formatTime = (str: string): string => {
  let formattedTime = ''
  if (str) {
    date = new Date(str)
    formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }
  formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return formattedTime
}

export const formatDate = (): string => {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return formattedDate
}

export const getWeekDay = (strDate: string): string => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const date = new Date(strDate)

  let dayOfweek = daysOfWeek[date.getDay()]
  if (new Date().getDay() === new Date(strDate).getDay()) {
    dayOfweek = 'Today'
  }
  return dayOfweek
}

export const shortDateFormat = () => {
  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)
  const formattedDate = `${day} ${month}`
  return formattedDate
}

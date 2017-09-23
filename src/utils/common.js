const HACKERNEWS_BASE_API = 'https://hacker-news.firebaseio.com/v0/'
export const HACKERNEWS_STORY_URL = HACKERNEWS_BASE_API
export const HACKERNEWS_ITEM_URL = HACKERNEWS_BASE_API + 'item/'

export function host (url) {
  if (!url) {
    return ''
  }
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') {
    parts.shift()
  }
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  }
  else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  }
  else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  return (time === 1) ? (time + label) : (time + label + 's')
}

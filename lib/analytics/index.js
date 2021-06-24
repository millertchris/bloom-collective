/* https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/ */

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', 'UA-3568150-9', {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}

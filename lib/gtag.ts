export const GA_MEASUREMENT_ID = "G-2EJ6JCB9N2"

type GtagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}


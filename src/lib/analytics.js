export function trackEvent(name, attributes = {}) {
  try {
    if (typeof window === 'undefined') return
    if (typeof window.sa_event !== 'function') return
    window.sa_event(name, attributes)
  } catch (_) {
    // Silently ignore analytics errors to avoid UI impact.
  }
}

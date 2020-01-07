import EventData from '../data/event.json'
import Polyglot from '@s-ui/i18n/lib/adapters/polyglot'
import I18n from '@s-ui/i18n'
import {literals} from '../i18n/translations'

function getInitialData() {
  return typeof window === 'undefined' ||
    typeof window.__INITIAL_DATA__ === 'undefined'
    ? {}
    : window.__INITIAL_DATA__
}

function getTranslationsByCulture({culture = 'es-ES', isClient}) {
  const {i18n} = getInitialData()
  // Try to grab translations from window to avoid request from domain
  if (isClient && typeof i18n !== 'undefined') {
    const {translations} = i18n
    return Promise.resolve({languages: translations.toJSON()})
  }

  // If we don't have translations on the window, call the domain for them
  return Promise.resolve({languages: literals})
}

function getBrowserInfo({isClient, userAgent}) {
  const {browser} = getInitialData()
  if (isClient && typeof browser !== 'undefined') {
    return Promise.resolve(browser)
  } else {
    return import('../server/browser').then(({default: getBrowser}) =>
      getBrowser(userAgent)
    )
  }
}

export default function contextFactory({
  cookies,
  isClient,
  pathName,
  req = {},
  userAgent
}) {
  // TODO: Manage Language
  const i18n = new I18n({adapter: new Polyglot()})
  const culture = window.navigator.language // TODO: Hardcoded

  return Promise.all([
    getTranslationsByCulture({culture, isClient}),
    getBrowserInfo({isClient, userAgent})
  ]).then(([{languages}, browser]) => {
    i18n.languages = languages
    i18n.culture = culture

    const domain = {event: EventData}

    return {
      browser,
      cookies,
      domain,
      i18n,
      pathName,
      userAgent
    }
  })
}

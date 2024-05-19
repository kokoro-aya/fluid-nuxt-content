import {LanguageProfile} from "~/lang/Language";

export const de: LanguageProfile = {
  name: 'Deutsch',
  home: {
    menu: 'Startseite',
    title: 'Startseite'
  },
  pages: {
    archive: {
      menu: 'Archiv',
      title: 'Archiv',
      subtitle: 'Archiv',
      postTotal: 'Insgesamt %d Artikel'
    },
    portfolio: {
      menu: 'Portfolio',
      title: 'Portfolio',
      subtitle: 'Portfolio'
    },
    privacy: {
      menu: 'Privacy',
      title: 'Privacy',
      subtitle: 'Privacy'
    },
    category: {
      menu: 'Kategorien',
      title: 'Kategorien',
      subtitle: 'Kategorien',
      postTotal: 'Insgesamt %d Artikel',
      more: 'More...'
    },
    collections: {
      menu: 'Sammlungen',
      title: 'Sammlungen',
      subtitle: 'Sammlungen'
    },
    tag: {
      menu: 'Schlagwörter',
      title: 'Schlagwörter',
      subtitle: 'Schlagwörter',
      postTotal: 'Insgesamt %d Artikel'
    },
    about: {
      menu: 'Über',
      title: 'Über',
      subtitle: 'Über'
    },
    friends: {
      menu: 'Weblinks',
      title: 'Weblinks',
      subtitle: 'Weblinks'
    },
    page404: {
      menu: 'Die Seite wurde nicht gefunden',
      title: 'Die Seite wurde nicht gefunden',
      subtitle: 'Die Seite wurde nicht gefunden'
    }
  },
  post: {
    toc: "Inhaltsverzeichnis",
    prevPost: "Vorheriger",
    nextPost: "Nächster",
    updated: "Geändert am %s",
    copyright: {
      author: "Beitragsautor",
      posted: "Veröffentlicht am",
      updated: "Geändert am",
      licensed: "Urheberrechtshinweis",
      cc: "CC - Creative Commons license",
      by: "BY - Attribution",
      sa: "SA - Share-alike",
      nc: "NC - Non-commercial",
      nd: "ND - No derivative works"
    }
  },
  search: {
    title: 'Suchen',
    keyword: 'Stichwort'
  },
  noScriptWaring: 'Blog funktioniert am besten mit aktiviertem JavaScript'
}
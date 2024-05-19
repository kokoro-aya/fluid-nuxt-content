
interface SimpleLanguageEntry {
  menu: string
  title: string
}

interface LanguagePageEntryWithSubtitle extends SimpleLanguageEntry {
  subtitle: string
}

interface ExtendedLanguagePageEntry extends LanguagePageEntryWithSubtitle {
  postTotal: string
  more: string
}

interface LanguagePostEntry {
  toc: string
  prevPost: string
  nextPost: string
  updated: string
  copyright: {
    author: string
    posted: string
    updated: string
    licensed: string
    cc: string
    by: string
    sa: string
    nc: string
    nd: string
  }
}

interface LanguageSearchEntry {
  title: string
  keyword: string
}

export interface LanguageProfile {

  name: string

  home: SimpleLanguageEntry

  pages: {
    [anyPage: string]: SimpleLanguageEntry | LanguagePageEntryWithSubtitle | ExtendedLanguagePageEntry
  }

  post: LanguagePostEntry

  search: LanguageSearchEntry

  noScriptWaring: string

}
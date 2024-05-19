import {LanguageProfile} from "~/lang/Language";

export default interface Config {
  site: {
    title: string,
    subtitle: string,
    description: string,
    keywords: string[],
    author: string,
    languages: LanguageProfile[]
  }

  archiveGenerator: {
    enabled: boolean
  }


}
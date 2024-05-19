export default interface FluidConfig {
  navbar: {
    blogTitle: string,
    menu: { key: string, path: string }[]
  },
  footer: string | undefined,
  index: {
    bannerImg: string,
    bannerImgHeightRatio: number,
    slogan: { text: string } | undefined
  }
  page: {
    bannerImg: string,
    bannerImgHeightRatio: number
  },
  page404: {
    bannerImg: string,
    bannerImgHeightRatio: number
  } | undefined,
  friends: {
    bannerImg: string,
    bannerImgHeightRatio: number,
    friends: {
      title: string,
      intro: string,
      url: string,
      avatar: string
    }[],
    onErrorAvatar: string,
    customFooter: {
      content: string
    } | undefined
  } | undefined,
  staticPrefix: {

  }
}

import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://o3s.xyz/',
  base: '/',
  title: 'Refactor.XYZ',
  description:
    '',
  author: 'Tiny.Twist',
  lang: 'en',
  ogLocale: 'en_US',
  imageDomains: ['cdn.bsky.app'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/articles',
      title: 'Articles',
      displayMode: 'alwaysText',
      text: 'Articles',
    },
    // {
    //   path: '/blog',
    //   title: 'Blog',
    //   displayMode: 'alwaysText',
    //   text: 'Blog',
    // },
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'alwaysText',
      text: 'Projects',
    },
    // {
    //   path: '/shorts',
    //   title: 'Shorts',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Shorts',
    //   icon: 'i-material-symbols-note-stack-outline-sharp',
    // },
    {
      path: '/tools',
      title: 'Tools',
      displayMode: 'iconToTextOnMobile',
      text: 'Tools',
      icon: 'i-mdi:tools',
    },
    // {
    //   path: '/highlights',
    //   title: 'Highlights',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Highlights',
    //   icon: 'i-ri-screenshot-line',
    // },
    // {
    //   path: '/changelog',
    //   title: 'Changelog',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Changelog',
    //   icon: 'i-ri-draft-line',
    // },
  ],
  socialLinks: [
    {
      link: 'https://github.com/tinymahua',
      title: 'Tiny.Twist on Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    // {
    //   link: 'https://x.com/astrodotbuild',
    //   title: 'Astro on Twitter',
    //   displayMode: 'alwaysIcon',
    //   icon: 'i-ri-twitter-x-fill',
    // },
    // {
    //   link: 'https://bsky.app/profile/astro.build',
    //   title: 'Astro on Bluesky',
    //   displayMode: 'alwaysIcon',
    //   icon: 'i-meteor-icons-bluesky',
    // },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
  postMetaStyle: 'minimal',
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'content',
    },
  ],
  share: [
    false,
    {
      twitter: [false, '@ste7lin'],
      bluesky: [false, '@ste7lin.bsky.social'],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'tinymahua/astro-tiny.twist.site',
      'data-repo-id': 'R_Bkegfe0GDeifejigjeijgeif',
      'data-category': 'Giscus',
      'data-category-id': 'DIC_joiFJEIGe4oigdkg',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-lang': 'en',
    },
  ],
}

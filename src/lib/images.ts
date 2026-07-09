// Decorative documentary images (Wix Media, Moroccan-authentic set).
// Keyed by homepage/section slot. Stable Wix static CDN URLs.
export const decorative = {
  hero: "https://static.wixstatic.com/media/21c42f_3bd90f7496d34acf918dd4e9f2d3b593~mv2.png",
  proof: "https://static.wixstatic.com/media/21c42f_89817f5612894b6ea53b2384b6cd2815~mv2.png",
  signature: "https://static.wixstatic.com/media/21c42f_e492d2a3bdc04f44ad810dd362c2adb8~mv2.png",
  howItWorks: "https://static.wixstatic.com/media/21c42f_38160905506d44e082c99bfdca7374d6~mv2.png",
  stories: "https://static.wixstatic.com/media/21c42f_0e1311e09ad0431ea065460cb431cf34~mv2.png",
  trust: "https://static.wixstatic.com/media/21c42f_02df3d126a83477da4c89617406b36a7~mv2.png",
  finalCta: "https://static.wixstatic.com/media/21c42f_c067fb04fc6743f3ab9bb40a7dafba62~mv2.png",
  about: "https://static.wixstatic.com/media/21c42f_f2843c04f80c45bda0e4ebbc71c52646~mv2.png",
} as const;

// Hero photoshoot sequence — consistent studio framing, only garment + fabric samples
// change frame to frame, so the crossfade reads as clothes changing on set.
export const heroShoot = [
  { src: "https://static.wixstatic.com/media/21c42f_22e4d8e6f35642eda93cb68313ccc413~mv2.png", alt: "A saffron silk kaftan on the studio rail with its silk fabric samples pinned beside it, Studio Moire Casablanca" },
  { src: "https://static.wixstatic.com/media/21c42f_4688754ad26b40c4913815fd9b03697e~mv2.png", alt: "An indigo raw-denim jacket on the studio rail with denim fabric samples pinned beside it" },
  { src: "https://static.wixstatic.com/media/21c42f_a9da233e75914ec594c15a39849d9077~mv2.png", alt: "A white embroidered cotton kaftan with gold-thread detail and linen fabric samples beside it" },
  { src: "https://static.wixstatic.com/media/21c42f_7bb0c22228d24a078dfb25401d215c7d~mv2.png", alt: "A terracotta wool coat on the studio rail with wool fabric samples pinned beside it" },
  { src: "https://static.wixstatic.com/media/21c42f_40c99b7d71b64fb3be211a7d15441171~mv2.png", alt: "A striped hand-woven Moroccan djellaba on the studio rail with woven fabric samples beside it" },
] as const;


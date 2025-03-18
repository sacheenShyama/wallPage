export interface Wallpaper {
  url: string;
  name: string;
}
export function useWallpapers(): Wallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/image/lossless/response/lf6nKDv3SRidUa8qX0ChBA",
      name: "Heritage",
    },

    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/_aNa-fqzQKW0r0fDOFmzWQ",
      name: "lake",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/xFuIZUfjTSSOMisraKgfzQ",
      name: "Nice",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/xrZp8eKdS_uJzi7FHE8NmA",
      name: "sunset",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Y9zz_o_VRFe5G27tWRWJmw",
      name: "sunrise",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/QDH_m_DMQC2DvQ88q6Sb5w",
      name: "Nature",
    },
  ];
}

export const LOGO_VARIANTS = {
    "light": "light",
    "dark": "dark"
} as const;

export type LogoVariantsType = (typeof LOGO_VARIANTS)[keyof typeof LOGO_VARIANTS];
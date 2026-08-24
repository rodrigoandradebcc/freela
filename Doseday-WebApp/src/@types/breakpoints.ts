export const BREAKPOINTS = {
    mobile: '@media (min-width: 375px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1366px)',
    large: '@media (min-width: 2500px)'
} as const; 

export type BreakpointKeys = (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS];
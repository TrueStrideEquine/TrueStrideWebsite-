export const scrollViewport = { once: false, amount: 0.55 } as const;

export const scrollEase = [0.16, 1, 0.3, 1] as const;

export const fadeUpInitial = { opacity: 0, y: 20 } as const;
export const fadeUpIn = { opacity: 1, y: 0 } as const;

export const scaleInitial = { opacity: 0, scale: 0.9 } as const;
export const scaleIn = { opacity: 1, scale: 1 } as const;

export const slideLeftInitial = { opacity: 0, x: -20 } as const;
export const slideRightInitial = { opacity: 0, x: 20 } as const;
export const slideIn = { opacity: 1, x: 0 } as const;

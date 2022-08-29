let MAX_AGE = 100

export const makeRandomNumber = (max: number = MAX_AGE): number => Math.ceil(Math.random() * max)
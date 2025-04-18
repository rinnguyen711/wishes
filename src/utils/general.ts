export function getRandomDigits(length: number = 3): string {
    return Math.floor(Math.random() * Math.pow(10, length))
        .toString()
        .padStart(length, '0')
}
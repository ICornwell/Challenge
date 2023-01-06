import synomyns from './synomyns.mjs'
import patterns from './inputPatterns.mjs'

export default function processInput(input) {
    const parts = input.toLowerCase().split(' ')
    const cleanParts = parts.map(p => synomyns[p]??p)
    const cleanInput = cleanParts.join(' ')

    const matchPattern = Object.keys(patterns).find(pattern => cleanInput.match(pattern))

    if (!matchPattern) return { action: null }

    const match = cleanInput.match(matchPattern)

    return patterns[matchPattern](match)
}
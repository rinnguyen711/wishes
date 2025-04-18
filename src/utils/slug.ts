import slugify from 'slugify'

export function generateUniqueSlug(
    name: string,
): string {
    const baseSlug = slugify(name, { lower: true, strict: true })
    const randomSuffix = Math.random().toString(36).substring(2, 8)
    return `${baseSlug}-${randomSuffix}`
}

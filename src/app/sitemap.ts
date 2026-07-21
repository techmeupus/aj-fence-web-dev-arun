import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ajfencemfg.com'

    const routes = [
        '/',
        '/about-us/',
        '/contact-us/',
        '/blog/',
        '/fencing-services/aluminum/',
        '/fencing-services/chain-link/',
        '/fencing-services/vinyl/',
        '/fencing-services/wood/',
        '/fence-company/',
        '/fence-contractor/',
        '/fence-installation/',
        '/home-fencing/',
        '/residential-fence/',
        '/vinyl-fence/',
        '/chain-link-fence/',
        '/blog/choosing-right-fence-florida/',
        '/blog/vinyl-vs-wood-privacy-fence/',
        '/blog/aluminum-fence-maintenance-tips/',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}

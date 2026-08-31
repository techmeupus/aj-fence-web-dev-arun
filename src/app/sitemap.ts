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
        '/blog/how-to-extend-life-of-aluminum-fence-florida/',
        '/blog/chain-link-fence-installation-lakeland-fl-cost-guide/',
        '/blog/repairing-vs-replacing-fence/',
        '/blog/aluminum-fence-installation-lakeland-fl/',
        '/blog/privacy-vs-security-fence/',
        '/blog/fence-installation-cost-polk-hillsborough/',
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

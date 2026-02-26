import SpitiValleyRoadTrip from './[slug]/best-time-to-visit-spiti-valley-road-trip';

// This is a dynamic page that handles individual blog posts
export default async function BlogDetailPage({ params }) {
    const { slug } = await params;

    if (!slug) return null;

    // Capitalize slug for display title
    const blogTitle = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Blog mapping
    if (slug === 'best-time-to-visit-spiti-valley-road-trip') {
        return <SpitiValleyRoadTrip blogTitle={blogTitle} />;
    }

    // Default fallback (or you could render a generic blog layout)
    return <SpitiValleyRoadTrip blogTitle={blogTitle} />;
}

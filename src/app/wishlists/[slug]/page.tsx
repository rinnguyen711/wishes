import WishlistDetailScreen from "@/components/wishlist-detail";

export default async function WishlistDetailPage({params}: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    return (
        <WishlistDetailScreen slug={slug} />
    )
}

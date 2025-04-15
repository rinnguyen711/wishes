import WishlistDetailScreen from "@/components/wishlist-detail";

export default function WishlistDetailPage({ params }: { params: { slug: string } }) {
    return (
        <WishlistDetailScreen slug={params.slug} />
    )
}

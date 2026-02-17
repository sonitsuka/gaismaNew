import { notFound } from "next/navigation"
import { getPressItemBySlug } from "@/lib/press-data"
import PressViewer from "./PressViewer.client"

export default function PressDetailPage({ params }: { params: { slug: string } }) {
  const item = getPressItemBySlug(params.slug)

  if (!item || !item.pages || item.pages.length === 0) {
    notFound()
  }

  return <PressViewer item={item} />
}

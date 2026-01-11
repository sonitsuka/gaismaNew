import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you need fresh data
})

// Image URL builder helper
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper to get YouTube thumbnail from video ID
export function getYouTubeThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`
}

// Helper to extract YouTube video ID from URL
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // Just the ID
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

// Type definitions for Sanity documents
export interface MusicItem {
  _id: string
  title: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  imageUrl?: string
  href: string
  alt: string
  releaseDate?: string
  order: number
}

export interface MusicSection {
  _id: string
  category: string
  name?: string
  items: MusicItem[]
  order: number
  isActive: boolean
}

export interface Video {
  _id: string
  title: string
  url: string
  videoId?: string
  thumbnail?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  category: string
  description?: string
  credits?: string
  releaseDate?: string
  order: number
  isActive: boolean
}

export interface Performance {
  _id: string
  title: string
  url: string
  videoId?: string
  thumbnail?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  thumbnailUrl?: string
  category: string
  credits?: string
  description?: string
  date?: string
  order: number
  isActive: boolean
}

export interface Show {
  _id: string
  title: string
  date: string
  dateRange?: string
  venue: string
  tag: string
  description?: string
  ticketLink?: string
  isSoldOut: boolean
  isUpcoming: boolean
  isFeatured: boolean
}

export interface PressArticle {
  _id: string
  title: string
  publication?: string
  date: string
  dateText?: string
  url: string
  excerpt?: string
  language?: string
  coverImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  isFeatured: boolean
  order: number
}

export interface MediaPhoto {
  _id: string
  title: string
  image: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  alt: string
  caption?: string
  photographer?: string
  date?: string
  category?: string
  order: number
  isActive: boolean
}

// Fetch functions
export async function getMusicSections(): Promise<MusicSection[]> {
  const query = `*[_type == "musicSection" && isActive == true] | order(order asc) {
    _id,
    category,
    name,
    order,
    isActive,
    "items": items[]-> {
      _id,
      title,
      image,
      imageUrl,
      href,
      alt,
      releaseDate,
      order
    } | order(order asc)
  }`

  return client.fetch(query)
}

export async function getVideos(category?: string): Promise<Video[]> {
  const query = category
    ? `*[_type == "video" && category == $category && isActive == true] | order(order asc) {
        _id, title, url, videoId, thumbnail, category, description, credits, releaseDate, order, isActive
      }`
    : `*[_type == "video" && isActive == true] | order(order asc) {
        _id, title, url, videoId, thumbnail, category, description, credits, releaseDate, order, isActive
      }`

  return client.fetch(query, { category })
}

export async function getPerformances(category?: string): Promise<Performance[]> {
  const query = category
    ? `*[_type == "performance" && category == $category && isActive == true] | order(order asc) {
        _id, title, url, videoId, thumbnail, thumbnailUrl, category, credits, description, date, order, isActive
      }`
    : `*[_type == "performance" && isActive == true] | order(order asc) {
        _id, title, url, videoId, thumbnail, thumbnailUrl, category, credits, description, date, order, isActive
      }`

  return client.fetch(query, { category })
}

export async function getShows(upcoming: boolean = true): Promise<Show[]> {
  const query = `*[_type == "show" && isUpcoming == $upcoming] | order(date ${
    upcoming ? 'asc' : 'desc'
  }) {
    _id, title, date, dateRange, venue, tag, description, ticketLink, isSoldOut, isUpcoming, isFeatured
  }`

  return client.fetch(query, { upcoming })
}

export async function getPressArticles(): Promise<PressArticle[]> {
  const query = `*[_type == "pressArticle"] | order(date desc) {
    _id, title, publication, date, dateText, url, excerpt, language, coverImage, isFeatured, order
  }`

  return client.fetch(query)
}

export async function getMediaPhotos(category?: string): Promise<MediaPhoto[]> {
  const query = category
    ? `*[_type == "mediaPhoto" && category == $category && isActive == true] | order(order asc) {
        _id, title, image, alt, caption, photographer, date, category, order, isActive
      }`
    : `*[_type == "mediaPhoto" && isActive == true] | order(order asc) {
        _id, title, image, alt, caption, photographer, date, category, order, isActive
      }`

  return client.fetch(query, { category })
}

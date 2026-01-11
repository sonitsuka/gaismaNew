# Sanity CMS Setup Guide for GAISMA Portfolio

This guide will help you set up Sanity CMS for managing content on the GAISMA portfolio website.

## Overview

Sanity CMS has been integrated into this Next.js application to allow GUI-based content management for:
- **Music** (Albums, EPs, DJ Sets, Radio Shows)
- **Videos** (Music Videos, DJ & Live performances, Radio content)
- **Performance** (Performance videos, Art & Film, Acting credits)
- **Shows/Events** (Upcoming and past shows)
- **Press** (Interviews and press articles)
- **Media Photos** (Photo gallery)

## Prerequisites

- Node.js 18+ installed
- A Sanity account (free at https://sanity.io)

## Step 1: Install Dependencies

First, install the required npm packages:

```bash
npm install
```

This will install:
- `sanity` - Sanity Studio
- `next-sanity` - Next.js integration
- `@sanity/image-url` - Image URL builder
- `@sanity/vision` - Query testing tool

## Step 2: Create a Sanity Project

1. Go to https://sanity.io/manage
2. Click "Create new project"
3. Choose a project name (e.g., "GAISMA Portfolio")
4. Select **FREE plan** (no payment required)
5. Create a dataset named `production`

After creating the project, you'll get:
- **Project ID**: A unique identifier like `abc123de`
- **Dataset**: `production`

## Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

   **Note**: The `SANITY_API_TOKEN` is optional and only needed for write operations from the frontend. For most use cases, you'll manage content through the Sanity Studio.

## Step 4: Deploy Sanity Studio

The Sanity Studio is embedded in your Next.js app at `/studio`. To access it:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:3000/studio

3. Log in with your Sanity account

4. You should see the Sanity Studio interface with all your content types

## Step 5: Add CORS Origins

To allow your website to fetch data from Sanity:

1. Go to https://sanity.io/manage
2. Select your project
3. Go to "API" settings
4. Under "CORS Origins", add:
   - `http://localhost:3000` (for development)
   - Your production domain (e.g., `https://yourdomain.com`)

## Step 6: Content Types & How to Use

### Music Content

**Music Sections** group music items by category:
1. Go to "Music Section" in the Studio
2. Create a new section (e.g., "Album & EP", "DJ Sets")
3. Add a category name and optional artist name
4. Create "Music Items" and reference them in the section

**Music Items** are individual albums/tracks:
- Upload cover artwork or use external image URL
- Add streaming platform links (Spotify, SoundCloud, etc.)
- Set display order

### Videos

Create video entries with:
- YouTube or Vimeo URL
- Category (Music Video GAISMA, Music Video Sceti, DJ & Live, Radio Live)
- Optional custom thumbnail
- Video ID is extracted automatically from YouTube URLs

### Performance

Similar to videos but with additional credits field:
- Categories: Performance, Art & Film, Played a Role
- Add detailed credits for choreographers, directors, etc.

### Shows/Events

Manage upcoming and past shows:
- Set date and venue
- Mark as "Upcoming Event" for homepage display
- Mark "Sold Out" if applicable
- Add ticket links

### Press Articles

Add interviews and press coverage:
- Article title and publication name
- Publication date
- External URL to the article
- Optional excerpt and cover image

### Media Photos

Build a photo gallery:
- Upload high-quality images
- Add captions and photographer credits
- Categorize by type (Live, Studio, Press, etc.)

## Step 7: Migrating Existing Content

Currently, all content is hardcoded in the page files. You have two options:

### Option A: Manual Entry (Recommended)
- Go through each content type in Sanity Studio
- Manually enter the existing content from the codebase
- This gives you a chance to review and update content

### Option B: Bulk Import (Advanced)
- Use Sanity's import CLI: `sanity dataset import`
- Create JSON files with the existing content
- Import into your dataset

## Content Management Workflow

### Adding New Content

1. Go to http://localhost:3000/studio (or your production URL)
2. Select the content type (Music, Videos, etc.)
3. Click "Create new"
4. Fill in the required fields
5. Click "Publish"
6. Content will appear on the website within 60 seconds (due to revalidation)

### Editing Existing Content

1. Find the content item in Sanity Studio
2. Click to edit
3. Make changes
4. Click "Publish"
5. Changes appear on the website within 60 seconds

### Deleting Content

1. Find the content item
2. Click the menu (three dots)
3. Select "Delete"
4. Confirm deletion

### Managing Order

Most content types have an "order" field:
- Lower numbers appear first
- You can use 0, 10, 20, 30... to leave room for reordering

## Production Deployment

### Deploy Sanity Studio

You can deploy the embedded Studio with your Next.js app, or separately:

**Option 1: Embedded (Current Setup)**
- The Studio is at `/studio` in your Next.js app
- Deploys automatically with your Next.js deployment

**Option 2: Separate Deployment**
```bash
npm run studio:build
npx sanity deploy
```

### Environment Variables in Production

Make sure to set these in your hosting platform (Vercel, Netlify, etc.):
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Troubleshooting

### "CORS Origin" Errors
- Add your domain to CORS origins in Sanity project settings

### "Project ID not found" Error
- Check your `.env.local` file has the correct project ID
- Make sure the file is named `.env.local` (not `.env.local.example`)

### Content Not Updating
- Wait 60 seconds for revalidation
- Clear your browser cache
- Check that content is "Published" in Sanity Studio

### Sanity Studio Not Loading
- Check that you're logged in to Sanity
- Verify the project ID in `sanity.config.ts` matches your project

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/sanity-nextjs-preview)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## Support

If you encounter issues:
1. Check the Sanity console for errors: https://sanity.io/manage
2. Review the browser console for client-side errors
3. Check Next.js logs for server-side errors

## Next Steps

1. Set up your Sanity project and configure environment variables
2. Access the Studio at `/studio`
3. Start adding your content
4. Monitor the website to ensure content appears correctly
5. Train your client on how to use the Studio

---

**Note**: This implementation uses Sanity's free plan. No payment is required for basic usage.

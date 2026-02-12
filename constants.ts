
import { Artist, Release, Track, LabelEvent, TeamMember, StoreItem, GalleryItem, DistributionFeature } from './types';

/**
 * ==========================================
 * 1. ARTIST ROSTER
 * Change names, genres, bios, and social links here.
 * ==========================================
 */
export const ARTISTS: Artist[] = [
  {
    id: 'kimcug',
    name: 'KIM C UG',
    genre: 'Afro-Pop / Urban Excellence',
    bio: 'The cornerstone of Century Music Empire. KIM C UG defines the modern sound of the continent with global appeal and uncompromising style. Known for "I Propose To You", he blends traditional rhythms with futuristic production.',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&h=800&auto=format&fit=crop',
    socials: { instagram: '#', spotify: '#', twitter: '#' }
  },
  {
    id: 'luna',
    name: 'LUNA VOID',
    genre: 'Synthwave / Dream Pop',
    bio: 'Atmospheric soundscapes that blend 80s nostalgia with futuristic production. Luna Void is the ethereal voice of the Empire.',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&h=800&auto=format&fit=crop',
    socials: { instagram: '#', spotify: '#', twitter: '#' }
  },
  {
    id: 'kinetic',
    name: 'THE KINETIC PROJECT',
    genre: 'Progressive Electronic',
    bio: 'Heavy rhythms meet intricate melodies. The Kinetic Project represents the high-energy pulse of the Empire\'s underground circuit.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&h=800&auto=format&fit=crop',
    socials: { instagram: '#', spotify: '#' }
  }
];

/**
 * ==========================================
 * 2. FOUNDATION TEAM
 * Manage the leadership profiles here.
 * ==========================================
 */
export const TEAM: TeamMember[] = [
  {
    id: 'eddy',
    name: 'EDDY KIYOYO',
    role: 'Co-Founder & CEO',
    bio: 'The strategic visionary behind Century Music Empire. Eddy Kiyoyo oversees global operations and expansion into new territories.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: 'kim',
    name: 'KIM C UG',
    role: 'Co-Founder & Creative Director',
    bio: 'Balancing artistic brilliance with executive leadership, Kim ensures the Empire\'s sonic standard remains unmatched.',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: 'rapking',
    name: 'RAPKING256',
    role: 'Head of Digital Strategy',
    bio: 'The architect of the Empire\'s online footprint. Rapking256 manages global distribution and social resonance.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop'
  }
];

/**
 * ==========================================
 * 3. MUSIC RELEASES (ALBUMS/SINGLES)
 * These appear in "The Vault" section.
 * ==========================================
 */
export const RELEASES: Release[] = [
  {
    id: 'kc-propose',
    title: 'I PROPOSE TO YOU',
    artistId: 'kimcug',
    artistName: 'KIM C UG',
    releaseDate: '2024-05-20',
    coverUrl: 'https://images.unsplash.com/photo-1514525253361-bee8718a7439?q=80&w=800&h=800&auto=format&fit=crop',
    type: 'single'
  },
  {
    id: 'kc-dynasty',
    title: 'DYNASTY',
    artistId: 'kimcug',
    artistName: 'KIM C UG',
    releaseDate: '2024-02-14',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&h=800&auto=format&fit=crop',
    type: 'album'
  },
  {
    id: 'lv-neon',
    title: 'NEON DREAMS',
    artistId: 'luna',
    artistName: 'LUNA VOID',
    releaseDate: '2024-03-15',
    coverUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&h=800&auto=format&fit=crop',
    type: 'album'
  }
];

/**
 * ==========================================
 * 4. IMPERIAL PLAYLIST (AUDIO FILES)
 * Set audio URLs and durations for the player.
 * ==========================================
 */
export const PLAYLIST: Track[] = [
  {
    id: 'tkc-propose',
    title: 'I PROPOSE TO YOU',
    artistName: 'KIM C UG',
    duration: '3:45',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    coverUrl: 'https://images.unsplash.com/photo-1514525253361-bee8718a7439?q=80&w=100&h=100&auto=format&fit=crop',
    releaseDate: '2025'
  },
  {
    id: 'tkc1',
    title: 'KANDYE EZANGE',
    artistName: 'KIM C UG',
    duration: '3:20',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=100&h=100&auto=format&fit=crop',
    releaseDate: '2024'
  }
];

/**
 * ==========================================
 * 5. IMPERIAL STORE
 * Manage merchandise and music gear prices.
 * ==========================================
 */
export const STORE_ITEMS: StoreItem[] = [
  {
    id: 'shirt-1',
    name: 'EMPIRE SIGNATURE TEE',
    category: 'merch',
    priceUGX: 50000,
    priceUSD: 15,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&h=800&auto=format&fit=crop',
    description: 'Heavyweight cotton featuring the Century Music Empire seal. A standard for the street and the studio.'
  },
  {
    id: 'phones-1',
    name: 'EMPIRE PRO MONITORS',
    category: 'gear',
    priceUGX: 950000,
    priceUSD: 250,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&h=800&auto=format&fit=crop',
    description: 'Reference-grade monitoring headphones designed for precision engineering.'
  }
];

/**
 * ==========================================
 * 6. GALLERY (VISUAL ARCHIVE)
 * Add or remove images from the gallery here.
 * ==========================================
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', imageUrl: 'https://api.typedream.com/v1/image/public/7e29b109-00f7-418b-a337-376516629737_image_png', title: 'IMPERIAL PRESS OPS', category: 'lifestyle' },
  { id: 'g2', imageUrl: 'https://api.typedream.com/v1/image/public/9f38102a-360d-451f-b514-46c556f8f170_image_png', title: 'STUDIO A FREQUENCIES', category: 'studio' },
  { id: 'g3', imageUrl: 'https://api.typedream.com/v1/image/public/691d1466-419b-43d7-a5ca-069004863864_image_png', title: 'KIM C UG: TERMINAL V', category: 'lifestyle' },
  { id: 'g5', imageUrl: 'https://api.typedream.com/v1/image/public/a721df34-297c-4861-ae02-140660613271_image_jpg', title: 'KIM C UG LIVE: EMPIRE NIGHT', category: 'event' },
  { id: 'g13', imageUrl: 'https://api.typedream.com/v1/image/public/2b16e459-f831-4191-8848-03886b361a7a_image_jpg', title: 'SOUND BOX RECORDS PROMO', category: 'studio' },
];

/**
 * ==========================================
 * 7. DISTRIBUTION FEATURES
 * Information shown in the "Distribution" page.
 * ==========================================
 */
export const DIST_FEATURES: DistributionFeature[] = [
  { id: 'df1', title: '150+ STREAMING SITES', description: 'Immediate deployment to Spotify, Apple, Tidal, Audiomack, and 150+ global platforms.', icon: '🌐' },
  { id: 'df2', title: 'ELITE PROTOCOL', description: 'Pay 50,000 UGX per release and retain 100% of your royalties.', icon: '💰' },
  { id: 'df3', title: 'PARTNERSHIP PROTOCOL', description: 'Distribute for FREE with an 85% to 15% royalty share (Artist/Label).', icon: '🤝' },
  { id: 'df4', title: 'RIGHTS PROTECTION', description: 'Rigid IP protection and royalty tracking for every single stream.', icon: '🛡️' },
];

/**
 * ==========================================
 * 8. LABEL EVENTS
 * Scheduled public events and summits.
 * ==========================================
 */
export const EVENTS: LabelEvent[] = [
  {
    id: 'e1',
    title: 'EMPIRE NIGHT: KIM C UG LIVE',
    location: 'Century Arena, Kampala',
    date: 'JUNE 28, 2025',
    time: '20:00',
    ticketUrl: '#'
  }
];

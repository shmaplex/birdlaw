'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface GiphyGif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
      width: string;
      height: string;
    };
  };
}

export default function GiphyGallery() {
  const [gifs, setGifs] = useState<GiphyGif[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        // Using Giphy's public beta API key for demo purposes
        // In production, you should use your own API key from https://developers.giphy.com/
        const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY; // Replace with actual key
        const searchTerms = [
          'charlie kelly bird law',
          'its always sunny bird',
          'charlie kelly lawyer',
          'charlie kelly filibuster'
        ];
        
        const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
        
        // For demo purposes, using a fallback if API key is not set
        if (apiKey === 'YOUR_GIPHY_API_KEY') {
          // Demo data - replace with actual API call
          setGifs([]);
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(randomTerm)}&limit=6&rating=pg-13`
        );
        
        if (response.ok) {
          const data = await response.json();
          setGifs(data.data || []);
        }
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGifs();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="h-48 animate-pulse bg-[#2c1810]" />
        ))}
      </div>
    );
  }

  // Fallback content when no API key is provided
  if (gifs.length === 0) {
    return (
      <div className="py-8 text-center">
        <div className="text-[#a89968] mb-4">
          <p className="mb-2 text-lg">🦅 Charlie Kelly's Greatest Moments 🦅</p>
          <p className="text-sm italic">
            "I'm not saying I agree with it. It's just that bird law in this country—it's not governed by reason."
          </p>
        </div>
        <div className="mt-6 text-[#4a4a3a] text-sm">
          <p>To display GIFs from It's Always Sunny:</p>
          <ol className="mt-2 space-y-1 list-decimal list-inside">
            <li>Get a free API key from <a href="https://developers.giphy.com/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">developers.giphy.com</a></li>
            <li>Replace 'YOUR_GIPHY_API_KEY' in components/GiphyGallery.tsx</li>
            <li>Redeploy to see Charlie Kelly in action!</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {gifs.map((gif) => (
        <Card key={gif.id} className="overflow-hidden group cursor-pointer hover:border-[#d4af37] transition-all">
          <div className="relative aspect-video">
            <Image
              src={gif.images.fixed_height.url}
              alt={gif.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized // GIFs need unoptimized flag
            />
          </div>
          <div className="p-2 text-xs text-[#a89968] truncate">
            {gif.title}
          </div>
        </Card>
      ))}
    </div>
  );
}

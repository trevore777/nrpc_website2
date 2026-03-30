export type YouTubeVideo = {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
};

type YouTubeSearchResponse = {
  items?: Array<{
    id?: {
      videoId?: string;
    };
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: {
        high?: { url?: string };
        medium?: { url?: string };
        default?: { url?: string };
      };
    };
  }>;
};

export async function fetchLatestSermonsFromYouTube(maxResults = 12) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    throw new Error("Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID");
  }

  const params = new URLSearchParams({
    part: "snippet",
    channelId,
    maxResults: String(maxResults),
    order: "date",
    type: "video",
    key: apiKey
  });

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`YouTube API error: ${text}`);
  }

  const data = (await res.json()) as YouTubeSearchResponse;

  const videos: YouTubeVideo[] = (data.items ?? [])
    .filter((item) => item.id?.videoId && item.snippet?.title)
    .map((item) => {
      const videoId = item.id!.videoId!;
      const snippet = item.snippet!;

      return {
        videoId,
        title: snippet.title ?? "Untitled Sermon",
        description: snippet.description ?? "",
        publishedAt: snippet.publishedAt ?? "",
        thumbnail:
          snippet.thumbnails?.high?.url ||
          snippet.thumbnails?.medium?.url ||
          snippet.thumbnails?.default?.url ||
          "",
        url: `https://www.youtube.com/watch?v=${videoId}`
      };
    });

  return videos;
}
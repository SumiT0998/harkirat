import { VideoCard } from "./VideoCard";

const Videos = [
  {
    title: "learn coding in 60 days || javascrip mystery",
    icon: "icon.jpg",
    thumbnail: "thumb.jpeg",
    author: "sumit s bisht",
    views: "18k",
    timestamp: "2 days ago",
  },
  {
    title: "learn coding in 60 days || javascrip mystery",
    icon: "icon.jpg",
    thumbnail: "thumb.jpeg",
    author: "sumit s bisht",
    views: "18k",
    timestamp: "2 days ago",
  },
  {
    title: "learn coding in 60 days || javascrip mystery",
    icon: "icon.jpg",
    thumbnail: "thumb.jpeg",
    author: "sumit s bisht",
    views: "18k",
    timestamp: "2 days ago",
  },
  {
    title: "learn coding in 60 days || javascrip mystery",
    icon: "icon.jpg",
    thumbnail: "thumb.jpeg",
    author: "sumit s bisht",
    views: "18k",
    timestamp: "2 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {Videos.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            icon={video.icon}
            thumbnail={video.thumbnail}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};

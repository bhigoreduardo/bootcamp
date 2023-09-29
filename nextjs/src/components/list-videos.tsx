import { Video } from "@/utils/models";
import Image from "next/image";

export async function getVideos(): Promise<Video[]> {
  const response = await fetch("http://localhost:8000/videos", {
    next: { revalidate: 10 },
  });
  return await response.json();
}

export default async function ListVideos() {
  const videos = await getVideos();

  return (
    <ul>
      {videos.map((item) => (
        <li key={item.id}>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={item.thumbnail_url}
              alt={item.title}
              width={100}
              height={100}
              priority
            />
            <div className="flex flex-col">
              <span>{item.title}</span>
              <span>{item.description}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

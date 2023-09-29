import ListCategories from "@/components/list-categories";
import ListVideos from "@/components/list-videos";
import { Suspense } from "react";

export default function VideosPage() {
  return (
    <div>
      <h1>Lista de vídeos</h1>
      <Suspense fallback={<p>Carregando as categorias</p>}>
        <ListCategories />
      </Suspense>
      <Suspense fallback={<p>Carregando os vídeos</p>}>
        <ListVideos />
      </Suspense>
    </div>
  );
}

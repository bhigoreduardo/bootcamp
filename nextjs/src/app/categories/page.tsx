import ListCategories from "@/components/list-categories";
import Link from "next/link";

export default async function CategoriesPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Lista de categories</h1>
      <Link href="/categories/create">Criar categoria</Link>
      <ListCategories />
    </div>
  );
}

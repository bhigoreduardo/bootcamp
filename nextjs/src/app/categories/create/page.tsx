import CreateCategoryForm from "@/components/create-category-form";
import Link from "next/link";

export default function CategoriesCreatePage() {
  return (
    <div>
      <h1>Criar categoria</h1>
      <Link href="/categories">Todas categorias</Link>
      <CreateCategoryForm />
    </div>
  );
}

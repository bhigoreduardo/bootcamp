import { Category } from "@/utils/models";

export async function getCategories(): Promise<Category[]> {
  const response = await fetch("http://localhost:8000/categories", {
    next: { tags: ["categories"] },
    // next: { revalidate: 10 },
  });
  return response.json();
}

export default async function ListCategories() {
  const categories = await getCategories();

  return (
    <ul className="flex gap-1">
      {categories.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

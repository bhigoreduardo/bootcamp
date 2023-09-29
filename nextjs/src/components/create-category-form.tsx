"use client";

import { FormEvent } from "react";

export default function CreateCategoryForm() {
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const name = document.querySelector<HTMLInputElement>("#name")!.value;
    const description =
      document.querySelector<HTMLInputElement>("#description")!.value;
    
    await fetch("http://localhost:3000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, description })
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="name" id="name" placeholder="name" className="text-black" />
      <input name="description" id="description" placeholder="description" className="text-black" />
      <button type="submit">Enviar</button>
    </form>
  );
}

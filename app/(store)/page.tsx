import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <h1>hello world</h1>
      <Button>click me</Button>
    </div>
  );
}

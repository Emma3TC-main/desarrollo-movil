export const products = Array.from({ length: 100 }).map((_, i) => ({
  id: String(i + 1),
  name: `Producto ${i + 1}`,
  price: Math.floor(Math.random() * 990) + 10,
  category: ["Electrónica", "Ropa", "Hogar", "Juguetes"][i % 4],
}));

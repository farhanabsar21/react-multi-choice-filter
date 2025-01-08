import React, { useState } from "react";
import { brands, categories, colors, priceRanges, products } from "./constants";

const App: React.FC = () => {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    priceRange: null as [number, number] | null,
    minRating: null as number | null,
    colors: [] as string[],
  });

  const toggleFilter = (filterKey: keyof typeof filters, value: any) => {
    setFilters((prev) => {
      const currentValues = prev[filterKey];
      if (Array.isArray(currentValues)) {
        return {
          ...prev,
          [filterKey]: currentValues.includes(value as never)
            ? currentValues.filter((v) => v !== value)
            : [...currentValues, value],
        };
      }
      return { ...prev, [filterKey]: value };
    });
  };

  const applyFilters = () => {
    return products.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);
      const brandMatch =
        filters.brands.length === 0 || filters.brands.includes(product.brand);
      const colorMatch =
        filters.colors.length === 0 || filters.colors.includes(product.color);
      const priceMatch =
        !filters.priceRange ||
        (product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]);
      const ratingMatch =
        !filters.minRating || product.rating >= filters.minRating;

      return (
        categoryMatch && brandMatch && colorMatch && priceMatch && ratingMatch
      );
    });
  };

  const filteredProducts = applyFilters();

  return (
    <div className="p-6 bg-gray-50 min-h-screen grid grid-cols-[max-content,1fr] gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Product List</h1>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Filter by Category
          </h3>
          {categories.map((category) => (
            <label key={category} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
                checked={filters.categories.includes(category)}
                onChange={() => toggleFilter("categories", category)}
              />
              <span className="ml-2 text-gray-700">{category}</span>
            </label>
          ))}
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Filter by Brand
          </h3>
          {brands.map((brand) => (
            <label key={brand} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                className="form-checkbox text-green-600"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleFilter("brands", brand)}
              />
              <span className="ml-2 text-gray-700">{brand}</span>
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Filter by Price
          </h3>
          {priceRanges.map(([label, range]) => (
            <label key={label} className="block mb-1">
              <input
                type="radio"
                name="price"
                className="form-radio text-purple-600"
                checked={
                  filters.priceRange?.[0] === range[0] &&
                  filters.priceRange?.[1] === range[1]
                }
                onChange={() =>
                  setFilters((prev) => ({ ...prev, priceRange: range }))
                }
              />
              <span className="ml-2 text-gray-700">{label}</span>
            </label>
          ))}
          <button
            className="mt-2 text-sm text-red-500 underline"
            onClick={() =>
              setFilters((prev) => ({ ...prev, priceRange: null }))
            }
          >
            Clear Price Filter
          </button>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Filter by Minimum Rating
          </h3>
          <input
            type="number"
            min="1"
            max="5"
            step="0.1"
            className="border rounded p-1 w-20"
            value={filters.minRating || ""}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minRating: e.target.value ? parseFloat(e.target.value) : null,
              }))
            }
          />
        </div>

        {/* Color Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Filter by Color
          </h3>
          {colors.map((color) => (
            <label key={color} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                className="form-checkbox text-pink-600"
                checked={filters.colors.includes(color)}
                onChange={() => toggleFilter("colors", color)}
              />
              <span className="ml-2 text-gray-700">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtered Products */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Filtered Products
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="min-h-[200px] border p-4 rounded shadow-sm bg-white hover:shadow-md transition"
            >
              <span className="block font-bold text-gray-800">
                {product.name}
              </span>
              <span className="block text-sm text-gray-600">
                {product.category} - ${product.price} - {product.brand} -{" "}
                {product.rating}★ - {product.color}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  SlidersHorizontal,
  Star,
  StarHalf,
  ShoppingCart,
} from "lucide-react";
import { products } from "@/assets/data/products";

export default function ProductsPage() {
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className="h-4 w-4 fill-cyan-500 text-cyan-500"
          />
        ))}
        {hasHalfStar && (
          <StarHalf className="h-4 w-4 fill-cyan-500 text-cyan-500" />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-zinc-600" />
        ))}
      </div>
    );
  };

  const categories = [
    "All",
    "Vision",
    "Limbs",
    "Organs",
    "Neural",
    "Protection",
    "Processing",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Product Catalog
            </h1>
            <p className="mt-2 text-zinc-400">
              Browse our selection of premium cyborg enhancements
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row items-center justify-between">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-cyan-500"
              />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Select defaultValue="featured">
                <SelectTrigger className="w-full sm:w-[180px] bg-zinc-900 border-zinc-800 text-white focus:ring-cyan-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">

            <div className="col-span-12 lg:col-span-3">
              <div className="space-y-6">

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="mb-4 text-lg font-medium">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category}`}
                          className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-cyan-500"
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm text-zinc-300"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="mb-4 text-lg font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[0, 30000]} max={30000} step={1000} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">$0</span>
                      <span className="text-sm text-zinc-400">$30,000+</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="mb-4 text-lg font-medium">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`rating-${rating}`}
                          className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-cyan-500"
                        />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="ml-2 flex items-center text-sm text-zinc-300"
                        >
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-cyan-500 text-cyan-500"
                            />
                          ))}
                          {[...Array(5 - rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-zinc-600" />
                          ))}
                          <span className="ml-1">& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="mb-4 text-lg font-medium">Availability</h3>
                  <div className="space-y-2">
                    {["In Stock", "Low Stock", "Out of Stock"].map((status) => (
                      <div key={status} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`status-${status
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-cyan-500"
                        />
                        <label
                          htmlFor={`status-${status
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          className="ml-2 text-sm text-zinc-300"
                        >
                          {status}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden bg-zinc-900 border-zinc-800 text-white"
                  >
                    <div className="relative">
                      <div className="aspect-square overflow-hidden bg-zinc-950">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {product.bestSeller && (
                          <Badge className="bg-amber-500 hover:bg-amber-600 text-black">
                            Best Seller
                          </Badge>
                        )}
                        {product.newRelease && (
                          <Badge className="bg-green-500 hover:bg-green-600 text-black">
                            New Release
                          </Badge>
                        )}
                        {product.discount && (
                          <Badge className="bg-red-500 hover:bg-red-600 text-white">
                            {product.discount}% OFF
                          </Badge>
                        )}
                      </div>
                      {/* Stock indicator */}
                      <div className="absolute bottom-2 right-2">
                        <Badge
                          className={`
                            ${
                              product.stock === "In Stock"
                                ? "bg-green-500 hover:bg-green-600"
                                : product.stock === "Low Stock"
                                ? "bg-amber-500 hover:bg-amber-600"
                                : "bg-red-500 hover:bg-red-600"
                            } text-black
                          `}
                        >
                          {product.stock}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800">
                          {product.icon}
                        </div>
                        <Badge
                          variant="outline"
                          className="border-zinc-700 text-zinc-400"
                        >
                          {product.category}
                        </Badge>
                      </div>
                      <CardTitle className="line-clamp-1">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-zinc-400">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {renderRating(product.rating)}
                          <span className="text-xs text-zinc-400">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-end justify-between">
                        <div>
                          {product.discount ? (
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold">
                                $
                                {(
                                  product.price *
                                  (1 - product.discount / 100)
                                ).toFixed(2)}
                              </span>
                              <span className="text-sm text-zinc-400 line-through">
                                ${product.price.toFixed(2)}
                              </span>
                            </div>
                          ) : (
                            <span className="text-xl font-bold">
                              ${product.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                        disabled={product.stock === "Out of Stock"}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-800 bg-zinc-800 text-white"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  3
                </Button>
                <span className="text-zinc-500">...</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  8
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

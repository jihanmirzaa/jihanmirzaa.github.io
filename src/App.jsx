import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Search, Menu, Crown, Star, Heart } from 'lucide-react'
import royalLogo from './assets/royal_trend_logo.png'
import heroBanner from './assets/hero_banner.png'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(0)
  const [favorites, setFavorites] = useState(new Set())

  const products = [
    {
      id: 1,
      name: "Royal iPhone Case",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
      category: "Accessories"
    },
    {
      id: 2,
      name: "#royal #vintage #trendy WHITE Premium V-Neck Tee",
      price: 23.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      category: "Apparel"
    },
    {
      id: 3,
      name: "#royal #vintage #trendy WHITE Next Level 3600 T-Shirt",
      price: 23.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=300&h=300&fit=crop",
      category: "Apparel"
    },
    {
      id: 4,
      name: "#royal #vintage #trendy WHITE Baby Premium Onesie",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop",
      category: "Apparel"
    },
    {
      id: 5,
      name: "#royal #vintage #trendy WHITE Kids Classic Pullover Hoodie",
      price: 33.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
      category: "Apparel"
    },
    {
      id: 6,
      name: "#royal #vintage #trendy WHITE Unisex Classic Pullover Hoodie",
      price: 38.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
      category: "Apparel"
    },
    {
      id: 7,
      name: "#royal #vintage #trendy WHITE Mug",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
      category: "Drinkware"
    },
    {
      id: 8,
      name: "#royal #vintage #trendy WHITE Samsung Case",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
      category: "Accessories"
    }
  ]

  const categories = ["All", "Apparel", "Accessories", "Homeware", "Drinkware"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const addToCart = (productId) => {
    setCartItems(prev => prev + 1)
  }

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId)
      } else {
        newFavorites.add(productId)
      }
      return newFavorites
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm text-white sticky top-0 z-50 border-b border-gold-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={royalLogo} alt="Royal Trend" className="h-12 w-auto" />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Shop</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Categories</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400 relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15v-30l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Crown className="h-16 w-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            ROYAL TREND
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 mb-8 font-light tracking-wide">
            EMBRACE YOUR ROYAL STYLE
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            Shop Collection
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Shop by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? "bg-black text-white hover:bg-gray-800" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } transition-all duration-200`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 rounded-full"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.has(product.id) ? 'fill-red-500 text-red-500' : ''
                      }`} 
                    />
                  </Button>
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-black">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-black hover:bg-gray-800 text-white transition-colors duration-200"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">About Royal Trend</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Royal Trend embodies the perfect fusion of vintage elegance and contemporary style. 
            Our collection features premium apparel and accessories adorned with our signature royal crown design, 
            allowing you to express your regal personality with every piece you wear.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={royalLogo} alt="Royal Trend" className="h-12 w-auto mb-4" />
              <p className="text-gray-400">
                Embrace your royal style with our premium collection of vintage-inspired apparel and accessories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Apparel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Homeware</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Drinkware</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest collections and exclusive offers.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Royal Trend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


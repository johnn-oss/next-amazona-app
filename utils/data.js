import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'johnalphonsus3@gmail.com',
      password: bcrypt.hashSync('Chinechieze001'),
      isAdmin: true,
    },
    {
      name: 'Tonia',
      email: 'johnalphonsus39@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 1700,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/shirt1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 1800,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 1900,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 1900,
      brand: 'Oliver',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 1950,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 1750,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Human hair',
      slug: 'human-hair',
      category: 'Hair',
      image: '/images/hair2.jpg',
      price: 25000,
      brand: 'Lush',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: '100% human hair',
      isFeatured: true,
      banner: '/images/hair2.jpg',
    },
    {
      name: '14-inch Frontal Jerry curly',
      slug: 'frontal-jerry-curly',
      category: 'Hair',
      image: '/images/hair3.jpg',
      price: 58000,
      brand: 'Darling',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular hair',
      isFeatured: true,
      banner: '/images/hair3.jpg',
    },
    {
      name: '10-inch Fringe Bulb',
      slug: 'fringe-bulb',
      category: 'Hair',
      image: '/images/hair1.jpg',
      price: 28000,
      brand: 'Darling',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: '100% Human hair',
      isFeatured: true,
      banner: '/images/hair1.jpg',
    },
  ],
};

export default data;

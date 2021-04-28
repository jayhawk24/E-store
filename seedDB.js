const Product = require('./models/product');

const data = [
    {
        title: 'Brown eggs',
        price: 28.1,
        description: 'Raw organic brown eggs in a basket',
        image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc'
    },
    {
        title: 'Sweet fresh stawberry',
        price: 29.45,
        description: 'Sweet fresh stawberry on the wooden table',
        image: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055'
    },
    {
        title: 'Asparagus',
        price: 18.95,
        description: 'Asparagus with ham on the wooden table',
        image: 'https://images.unsplash.com/photo-1555100250-871c1f166ad1'
    },
    {
        title: 'Green smoothie',
        price: 17.68,
        description:
            "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
        image: 'https://images.unsplash.com/photo-1510693306332-74189fa090d4'
    },
    {
        title: 'Raw legums',
        price: 17.11,
        description: 'Raw legums on the wooden table',
        image: 'https://images.unsplash.com/photo-1607247098789-6a43ebeaba4e'
    },
    {
        title: 'Baking cake',
        price: 11.14,
        description:
            'Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.',
        image: 'https://images.unsplash.com/photo-1601000938365-f182c5ec2f77'
    }
];

const seedDB = async () => {
    await Product.insertMany(data);
    console.log('database seeded');
};

module.exports = seedDB;

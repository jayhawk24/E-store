const Product = require('./models/product');

const data = [
    {
        title: 'Dell XPS',
        price: 280000,
        description: 'Raw organic brown eggs in a basket',
        images: [
            'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        ]
    },
    {
        title: 'Iphone',
        price: 50000,
        description: 'Black iPhone',
        images: [
            'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        ]
    },
    {
        title: 'Drone',
        price: 100000,
        description: 'White drone hd',
        images: [
            'https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        ]
    },
    {
        title: 'Black T-shirt',
        price: 1799,
        description: 'Fears kills dreams',
        images: [
            'https://images.unsplash.com/photo-1612428056948-db07619cb4c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        ]
    },
    {
        title: 'Cap',
        price: 200,
        description: 'Black Cap',
        images: [
            'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHQlMjBzaGlydHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        ]
    },
    {
        title: 'Baking cake',
        price: 119,
        description:
            'Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.',
        images: ['https://images.unsplash.com/photo-1601000938365-f182c5ec2f77']
    }
];

const seedDB = async () => {
    await Product.insertMany(data);
    console.log('database seeded');
};

module.exports = seedDB;

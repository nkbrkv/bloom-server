const {PrismaClient} = require('../generated/prisma');

const prisma = new PrismaClient();

const createUser = async (data) => {
    return await prisma.user.create({data});
};

const createProduct = async (data) => {
    return await prisma.product.create({data});
};

const createOrder = async (data) => {
    return await prisma.order.create({data});
};

const createOrderItem = async (data) => {
    return await prisma.orderItem.create({data});
};

const getMockData = () => {
    return {
        users: [
            {
                name: 'Anna Petrova',
                mobile: '+380971234567',
                password: 'admin123',
                role: 'admin',
            },
            {
                name: 'Mikhail Smirnov',
                mobile: '+380977891234',
                password: 'customer123',
                role: 'customer',
            },
            {
                name: 'Elena Kozlova',
                mobile: '+380975556677',
                password: 'elena2024',
                role: 'customer',
            },
            {
                name: 'Dmitry Volkov',
                mobile: '+380973334455',
                password: 'dmitry456',
                role: 'customer',
            },
        ],
        products: [
            {
                name: 'Red Rose',
                description: 'Classic red rose of premium quality',
                price: 150.0,
                stockQuantity: 50,
                isActive: true,
            },
            {
                name: 'White Rose Bouquet',
                description: 'Elegant bouquet of 11 white roses',
                price: 1800.0,
                stockQuantity: 15,
                isActive: true,
            },
            {
                name: 'Yellow Tulip',
                description: 'Bright yellow tulip, symbol of spring',
                price: 120.0,
                stockQuantity: 80,
                isActive: true,
            },
            {
                name: 'Pink Peony Bouquet',
                description: 'Delicate bouquet of 7 pink peonies',
                price: 2200.0,
                stockQuantity: 8,
                isActive: true,
            },
            {
                name: 'White Lily',
                description: 'Fragrant white lily premium class',
                price: 200.0,
                stockQuantity: 25,
                isActive: true,
            },
            {
                name: 'Pink Carnation',
                description: 'Delicate pink carnation with long stem',
                price: 100.0,
                stockQuantity: 60,
                isActive: true,
            },
            {
                name: 'Mixed Flower Bouquet',
                description: 'Bright bouquet of various seasonal flowers',
                price: 1500.0,
                stockQuantity: 12,
                isActive: true,
            },
            {
                name: 'White Chrysanthemum',
                description: 'Large white spray chrysanthemum',
                price: 180.0,
                stockQuantity: 35,
                isActive: true,
            },
            {
                name: 'Phalaenopsis Orchid',
                description: 'Potted pink phalaenopsis orchid',
                price: 2500.0,
                stockQuantity: 6,
                isActive: true,
            },
            {
                name: 'Purple Iris',
                description: 'Noble purple iris',
                price: 160.0,
                stockQuantity: 40,
                isActive: true,
            },
            {
                name: 'Gerbera Bouquet',
                description: 'Sunny bouquet of bright gerberas',
                price: 1200.0,
                stockQuantity: 18,
                isActive: true,
            },
            {
                name: 'Pink Alstroemeria',
                description: 'Graceful pink alstroemeria',
                price: 140.0,
                stockQuantity: 45,
                isActive: true,
            },
            {
                name: 'Basket Composition',
                description: 'Festive flower composition in wicker basket',
                price: 3200.0,
                stockQuantity: 5,
                isActive: true,
            },
            {
                name: 'Potted Succulent',
                description: 'Low-maintenance succulent in decorative pot',
                price: 450.0,
                stockQuantity: 30,
                isActive: true,
            },
            {
                name: 'Glass Vase',
                description: 'Elegant glass vase for flowers',
                price: 800.0,
                stockQuantity: 20,
                isActive: true,
            },
            {
                name: 'Decorative Ribbon',
                description: 'Satin ribbon for bouquet decoration',
                price: 50.0,
                stockQuantity: 100,
                isActive: true,
            },
            {
                name: 'Wrapping Paper',
                description: 'Beautiful wrapping paper for bouquets',
                price: 80.0,
                stockQuantity: 75,
                isActive: true,
            },
            {
                name: 'Floral Foam',
                description: 'Professional floral foam',
                price: 120.0,
                stockQuantity: 40,
                isActive: true,
            },
            {
                name: 'Ceramic Planter',
                description: 'Stylish ceramic planter for plants',
                price: 650.0,
                stockQuantity: 15,
                isActive: true,
            },
            {
                name: 'Bridal Bouquet',
                description: 'Exquisite wedding bouquet of white roses and lilies',
                price: 4500.0,
                stockQuantity: 3,
                isActive: true,
            },
        ],
        orders: [
            {
                userIndex: 0,
                status: 'delivered',
                totalAmount: 2650.0,
                items: [
                    {productIndex: 0, quantity: 5, price: 150.0},
                    {productIndex: 1, quantity: 1, price: 1800.0},
                    {productIndex: 15, quantity: 1, price: 50.0},
                ],
            },
            {
                userIndex: 0,
                status: 'confirmed',
                totalAmount: 1380.0,
                items: [
                    {productIndex: 2, quantity: 3, price: 120.0},
                    {productIndex: 10, quantity: 1, price: 1200.0},
                ],
            },
            {
                userIndex: 1,
                status: 'pending',
                totalAmount: 2850.0,
                items: [
                    {productIndex: 3, quantity: 1, price: 2200.0},
                    {productIndex: 14, quantity: 1, price: 800.0},
                ],
            },
            {
                userIndex: 1,
                status: 'processing',
                totalAmount: 890.0,
                items: [
                    {productIndex: 4, quantity: 2, price: 200.0},
                    {productIndex: 5, quantity: 3, price: 100.0},
                    {productIndex: 11, quantity: 1, price: 140.0},
                ],
            },
            {
                userIndex: 1,
                status: 'shipped',
                totalAmount: 3520.0,
                items: [
                    {productIndex: 12, quantity: 1, price: 3200.0},
                    {productIndex: 7, quantity: 1, price: 180.0},
                    {productIndex: 9, quantity: 1, price: 160.0},
                ],
            },
            {
                userIndex: 1,
                status: 'cancelled',
                totalAmount: 4650.0,
                items: [
                    {productIndex: 19, quantity: 1, price: 4500.0},
                    {productIndex: 16, quantity: 1, price: 80.0},
                ],
            },
            {
                userIndex: 2,
                status: 'delivered',
                totalAmount: 1150.0,
                items: [
                    {productIndex: 6, quantity: 1, price: 1500.0},
                    {productIndex: 16, quantity: 2, price: 80.0},
                ],
            },
            {
                userIndex: 2,
                status: 'confirmed',
                totalAmount: 3150.0,
                items: [
                    {productIndex: 8, quantity: 1, price: 2500.0},
                    {productIndex: 18, quantity: 1, price: 650.0},
                ],
            },
            {
                userIndex: 2,
                status: 'processing',
                totalAmount: 720.0,
                items: [
                    {productIndex: 13, quantity: 1, price: 450.0},
                    {productIndex: 17, quantity: 2, price: 120.0},
                ],
            },
            {
                userIndex: 3,
                status: 'pending',
                totalAmount: 860.0,
                items: [
                    {productIndex: 0, quantity: 2, price: 150.0},
                    {productIndex: 2, quantity: 1, price: 120.0},
                    {productIndex: 5, quantity: 4, price: 100.0},
                ],
            },
            {
                userIndex: 3,
                status: 'delivered',
                totalAmount: 2080.0,
                items: [
                    {productIndex: 10, quantity: 1, price: 1200.0},
                    {productIndex: 11, quantity: 3, price: 140.0},
                    {productIndex: 7, quantity: 2, price: 180.0},
                ],
            },
            {
                userIndex: 3,
                status: 'confirmed',
                totalAmount: 1700.0,
                items: [
                    {productIndex: 4, quantity: 4, price: 200.0},
                    {productIndex: 9, quantity: 3, price: 160.0},
                    {productIndex: 15, quantity: 6, price: 50.0},
                ],
            },
            {
                userIndex: 3,
                status: 'shipped',
                totalAmount: 3900.0,
                items: [
                    {productIndex: 3, quantity: 1, price: 2200.0},
                    {productIndex: 1, quantity: 1, price: 1800.0},
                ],
            },
        ],
    };
};

async function loadMockData() {
    try {
        console.log('Loading mock data into database...');

        const mockData = getMockData();

        console.log('Clearing existing data...');
        await prisma.orderItem.deleteMany();
        await prisma.order.deleteMany();
        await prisma.product.deleteMany();
        await prisma.user.deleteMany();

        console.log('Creating users...');
        const createdUsers = [];
        for (const userData of mockData.users) {
            const user = await createUser(userData);
            createdUsers.push(user);
            console.log(`Created user: ${user.name}`);
        }

        console.log('Creating products...');
        const createdProducts = [];
        for (const productData of mockData.products) {
            const product = await createProduct(productData);
            createdProducts.push(product);
            console.log(`Created product: ${product.name}`);
        }

        console.log('Creating orders...');
        for (const orderData of mockData.orders) {
            const {items, ...orderInfo} = orderData;
            const userId = createdUsers[orderInfo.userIndex]?.id;
            if (!userId) {
                console.error(`User with index ${orderInfo.userIndex} not found`);
                continue;
            }

            const order = await createOrder({
                userId,
                status: orderInfo.status,
                totalAmount: orderInfo.totalAmount,
            });
            console.log(`Created order #${order.id} for user ${order.userId}`);

            for (const itemData of items) {
                const productId = createdProducts[itemData.productIndex]?.id;
                if (!productId) {
                    console.error(`Product with index ${itemData.productIndex} not found`);
                    continue;
                }

                const orderItem = await createOrderItem({
                    orderId: order.id,
                    productId,
                    quantity: itemData.quantity,
                    price: itemData.price,
                });
                console.log(`Added item: product ${orderItem.productId} x${orderItem.quantity}`);
            }
        }

        console.log('Mock data loaded successfully');
        console.log(`Statistics:`);
        console.log(`Users: ${createdUsers.length}`);
        console.log(`Products: ${createdProducts.length}`);
        console.log(`Orders: ${mockData.orders.length}`);
    } catch (error) {
        console.error('Error loading mock data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Запускаем загрузку, если файл вызван напрямую
if (require.main === module) {
    loadMockData()
        .then(() => {
            console.log('Mock data loading completed successfully');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Error:', error);
            process.exit(1);
        });
}

module.exports = loadMockData;

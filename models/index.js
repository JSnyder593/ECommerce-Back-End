// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: 'product_id',
  },
  as: 'tags_on_product' 
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { ProductTag,
  foreignKey: 'tag_id',
  unique: false,
},
as: 'products_with_tag'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const raw = fs.readFileSync('./data.json', 'utf-8');
const json = JSON.parse(raw);

const products = json.products;

console.log(Array.isArray(products)); // should print true
console.log(products.length);

for (const p of products) {
  const { error } = await supabase.from('products').insert({
    id: p.id,
    title: p.title,
    description: p.description,
    price: p.price,
    discount_percentage: p.discountPercentage,
    rating: p.rating,
    stock: p.stock,
    sku: p.sku,
    weight: p.weight,
    category_id: p.categoryId,
    brand: p.brand ?? null,
    warranty_information: p.warrantyInformation,
    shipping_information: p.shippingInformation,
    availability_status: p.availabilityStatus,
    return_policy: p.returnPolicy,
    minimum_order_quantity: p.minimumOrderQuantity,
    thumbnail: p.thumbnail
  });

  if (error) {
    console.error(`Product ${p.id} failed:`, error);
    continue;
  }

  if (p.dimensions) {
    await supabase.from('dimensions').insert({
      product_id: p.id,
      ...p.dimensions
    });
  }

  if (p.reviews?.length) {
    await supabase.from('reviews').insert(
      p.reviews.map(r => ({
        product_id: p.id,
        rating: r.rating,
        comment: r.comment,
        date: r.date,
        reviewer_name: r.reviewerName,
        reviewer_email: r.reviewerEmail
      }))
    );
  }

  if (p.images?.length) {
    await supabase.from('images').insert(
      p.images.map(url => ({
        product_id: p.id,
        url
      }))
    );
  }

  if (p.tags?.length) {
    await supabase.from('tags').insert(
      p.tags.map(tag => ({
        product_id: p.id,
        tag
      }))
    );
  }

  if (p.meta) {
    await supabase.from('meta').insert({
      product_id: p.id,
      created_at: p.meta.createdAt,
      updated_at: p.meta.updatedAt,
      barcode: p.meta.barcode,
      qr_code: p.meta.qrCode
    });
  }
}

console.log('Import complete');

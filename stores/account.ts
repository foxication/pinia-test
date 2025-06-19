import { defineStore } from 'pinia';

type ProductData = {
  productName: string;
  amount: number;
  status: 'inCart' | 'inDelivery' | 'delivered';
};

export const useAccount = defineStore('account', () => {
  const products = ref<ProductData[]>([]);

  const productsInCart = computed(() =>
    products.value.filter((p) => p.status === 'inCart')
  );
  const productsInDelivery = computed(() =>
    products.value.filter((p) => p.status === 'inDelivery')
  );
  const productsDelivered = computed(() =>
    products.value.filter((p) => p.status === 'delivered')
  );

  function addProduct(productName: string, amount = 1) {
    if (productName.length === 0) throw Error('product name is empty');
    if (amount < 1 || amount > 100) throw Error('amount is not correct');

    const existing = products.value.find(
      (product) => product.productName === productName
    );

    if (existing !== undefined) existing.amount += amount;
    else products.value.push({ productName, amount, status: 'inCart' });

    console.log('product added successfully');
  }
  function orderAllProductsFromCart() {
    for (const p of productsInCart.value) p.status = 'inDelivery';
  }

  return {
    products,
    productsInCart,
    productsInDelivery,
    productsDelivered,
    addProduct,
    orderAllProductsFromCart,
  };
});

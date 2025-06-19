<script setup lang="ts">
const amountToBuy = ref(1);
const productName = ref('');
const accData = useAccount();
</script>

<template>
    <div class="container bg-gray-200 mx-auto p-8 flex flex-col gap-6">
        <span class="font-bold text-xl">Products</span>
        <div class="flex flex-row gap-2">
            <UInput v-model="productName" color="neutral" variant="outline" placeholder="Enter product name" />
            <UInputNumber v-model="amountToBuy" color="neutral" :min="1" :max="3" />
            <UButton color="neutral" :disabled="productName.length === 0"
                v-on:click="accData.addProduct(productName, amountToBuy)">Add To Cart</UButton>
        </div>
        <div>
            <UButton color="neutral" variant="outline" to="/">Back</UButton>
        </div>
    </div>
</template>

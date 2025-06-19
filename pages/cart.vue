<script setup lang="ts">
const accData = useAccount();
</script>

<template>
    <div class="container bg-gray-200 mx-auto p-8 flex flex-col gap-6">
        <span class="font-bold text-xl">Cart</span>
        <UTable :data="accData.productsInCart" class="flex-1" />
        <div>
            <UButton color="neutral" variant="outline" to="/">Back</UButton>
            <UButton color="neutral" variant="outline" v-on:click="accData.orderAllProductsFromCart">Order All</UButton>
        </div>
    </div>
</template>

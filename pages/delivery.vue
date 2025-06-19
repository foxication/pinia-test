<script setup lang="ts">
const accData = useAccount();
</script>

<template>
    <div class="container bg-gray-200 mx-auto p-8 flex flex-col gap-6">
        <span class="font-bold text-xl">Delivery</span>
        <UTable :data="accData.productsInDelivery" class="flex-1" />
        <div>
            <UButton color="neutral" variant="outline" to="/">Back</UButton>
        </div>
    </div>
</template>

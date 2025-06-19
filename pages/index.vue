<script setup lang="ts">
const counter1 = useCounter();
const counter2 = useCounterAlt()
</script>

<template>
    <div class="flex flex-col gap-8">
        <div class="container bg-gray-200 mx-auto p-8 flex flex-col gap-6">
            <span class="font-bold text-xl">Counters</span>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <UButton v-on:click="counter1.increment(-1)" color="neutral" variant="outline">Decrement</UButton>
                <span>Count (simple): {{ counter1.value }}</span>
                <UButton v-on:click="counter1.increment()" color="neutral" variant="outline">Increment</UButton>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <UButton v-on:click="counter2.increment(-1)" color="neutral" variant="outline">Decrement</UButton>
                <span>Count (alt): {{ counter2.value }}</span>
                <UButton v-on:click="counter2.increment()" color="neutral" variant="outline">Increment</UButton>
            </div>
        </div>
        <div class="container bg-gray-200 mx-auto p-8 flex flex-col gap-6">
            <span class="font-bold text-xl">Store</span>

            <UButtonGroup>
                <UButton color="neutral" variant="outline" to="/products">Products</UButton>
                <UButton color="neutral" variant="outline" to="/cart">Cart</UButton>
                <UButton color="neutral" variant="outline" to="/delivery">In Delivery</UButton>
            </UButtonGroup>
        </div>
    </div>
</template>
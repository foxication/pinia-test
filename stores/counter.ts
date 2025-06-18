import { defineStore } from 'pinia';

export const useCounter = defineStore('count', {
  state: () => ({
    value: 0,
  }),

  getters: {
    doubled: (state) => state.value * 2,
  },

  actions: {
    increment(amount = 1) {
      this.value += amount;
    },
    reset() {
      this.value = 0;
    },
  },
});

export const useCounterAlt = defineStore('countAlt', () => {
  const value = ref(0);
  const doubled = computed(() => value.value * 2);

  function increment(amount = 1) {
    value.value += amount;
  }
  function reset() {
    value.value = 0;
  }

  return { value, doubled, increment, reset };
});

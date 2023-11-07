<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink },
  data() {
    return {
      played: false,
      current: 0,
      terminated: false,
      result: [],
      products: []
    }
  },
  methods: {
    play() {
      this.played = true
      this.current = 0
      this.result = []
      this.terminated = false
      this.products = []
      for (let i = 0; i < 10; i++) {
        const product = {
          product1: Math.floor(Math.random() * 10) + 1,
          product2: Math.floor(Math.random() * 10) + 1
        }
        product.suggestions = this.suggestions(product)
        this.products.push(product)
      }
    },
    suggestions(product) {
      const result = product.product1 * product.product2
      let suggestions = []
      suggestions.push(Number(result + product.product1))
      suggestions.push(Number(result + product.product2))
      suggestions.push(Number(result - product.product1))
      suggestions.push(Number(result - product.product2))
      suggestions.push(Number(result + Math.floor(Math.random() * product.product1)))
      suggestions.push(Number(result + Math.floor(Math.random() * product.product2)))
      suggestions.push(Number(result - Math.floor(Math.random() * product.product1)))
      suggestions.push(Number(result - Math.floor(Math.random() * product.product2)))
      this.Utils.shuffle(suggestions)
      const items = suggestions.slice(0, 5)
      items.splice(Math.floor(Math.random() * 5), 0, result)
      return items
    },
    select(selection) {
      const result =
        selection == this.products[this.current].product1 * this.products[this.current].product2
      this.result.push(result)
      if (this.current < this.products.length - 2) {
        this.current++
      } else {
        this.terminated = true
      }
    }
  }
}
</script>
<template>
  <main class="grid grid-cols-2 gap-2">
    <aside class="flex justify-center">
      <img style="height: calc(100vh - 6rem)" src="../assets/characters/Alicia.png" />
    </aside>
    <section class="pt-5">
      <h3 class="text-4xl text-green-500 font-bold text-center">¡Multiplícame si puedes!</h3>
      <template v-if="!played">
        <p class="mt-2">
          Divertidas tarjetas con multiplicaciones y sus respuestas correspondientes. Los niños
          pueden jugar al juego de memoria mientras practican sus habilidades de multiplicación. Te
          mostraremos una multiplicación y debes seleccionar el botón que contenga la respuesta
          correcta. ¿Estás listo?
        </p>
        <div class="w-full flex justify-center mt-4">
          <RouterLink
            to="/"
            class="py-2 px-6 text-2xl text-white font-bold bg-gradient-to-tr from-gray-400 to-gray-600 rounded-2xl border-4 border-gray-600"
          >
            VOLVER
          </RouterLink>
          <button
            @click="play"
            class="py-2 px-6 ms-2 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
          >
            JUGAR
          </button>
        </div>
      </template>
      <template v-else>
        <div class="mt-5" v-if="!terminated">
          <div class="flex items-center justify-center mt-5 w-full">
            <h2 class="text-comic text-green-500 text-8xl me-6">
              {{ products[current].product1 }}
            </h2>
            <h2 class="text-comic text-green-500 text-4xl mx-6">x</h2>
            <h2 class="text-comic text-green-500 text-8xl mx-6">
              {{ products[current].product2 }}
            </h2>
            <h2 class="text-comic text-green-500 text-8xl">=</h2>
          </div>
          <div class="mt-10">
            <button
              :key="suggestion"
              v-for="suggestion in products[current].suggestions"
              @click="select(suggestion)"
              class="py-2 px-6 mx-1 my-1 text-4xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              {{ suggestion }}
            </button>
          </div>
        </div>
        <div class="overflow-auto" style="max-height: calc(100vh - 8rem)" v-else>
          <div :key="'result_' + index" v-for="(item, index) in result">
            <div class="flex items-center my-3">
              <div class="ps-2 w-full flex items-center">
                <div>
                  <h4
                    class="font-bold text-5xl text-green-500 text-comic whitespace-nowrap text-end me-10"
                  >
                    {{ products[index].product1 }} x {{ products[index].product2 }} =
                    {{ products[index].product1 * products[index].product2 }}
                  </h4>
                  <div class="grid grid-cols-3">
                    <p class="m-1 whitespace-nowrap" v-for="n in 10" :key="'result_' + n">
                      {{ products[index].product1 }} * {{ n }} =
                      <strong>{{ products[index].product1 * n }}</strong>
                    </p>
                  </div>
                </div>
                <img v-if="item" class="h-8 w-8" src="../assets/good.png" />
                <img v-else class="h-8 w-8" src="../assets/bad.png" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center mt-8">
            <RouterLink
              to="/"
              class="py-2 px-6 text-2xl text-white font-bold bg-gradient-to-tr from-gray-400 to-gray-600 rounded-2xl border-4 border-gray-600"
            >
              REGRESAR AL INICIO
            </RouterLink>
            <button
              @click="play"
              class="py-2 px-6 ms-2 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              VOLVER A JUGAR
            </button>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>
<style scoped>
@font-face {
  font-family: 'PlanetComic';
  src: url('../assets/PlanetComic.ttf');
}
.text-comic {
  font-family: 'PlanetComic';
}
</style>

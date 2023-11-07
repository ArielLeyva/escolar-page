<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink },
  data() {
    return {
      played: false,
      terminated: false,
      current: 0,
      result: [],
      concepts: [
        {
          name: 'Abierto',
          image: 'img/concepts/abierto.jpg',
          description: '¿Cómo está el libro?',
          options: ['Abierto', 'Cerrado']
        },
        {
          name: 'Cerrado',
          image: 'img/concepts/cerrado.jpg',
          description: '¿Cómo está el libro?',
          options: ['Abierto', 'Cerrado']
        },
        {
          name: 'Adelante',
          image: 'img/concepts/adelante.jpg',
          description: '¿Dónde está la tortuga?',
          options: ['Adelante', 'Atrás']
        },
        {
          name: 'Atrás',
          image: 'img/concepts/atras.jpg',
          description: '¿Dónde está la tortuga?',
          options: ['Adelante', 'Atrás']
        },
        {
          name: 'Adentro',
          image: 'img/concepts/adentro.jpg',
          description: '¿Dónde está el perro?',
          options: ['Adentro', 'Afuera']
        },
        {
          name: 'Afuera',
          image: 'img/concepts/afuera.jpg',
          description: '¿Dónde está el perro?',
          options: ['Adentro', 'Afuera']
        },
        {
          name: 'Arriba',
          image: 'img/concepts/arriba.jpg',
          description: '¿Dónde está el gato?',
          options: ['Arriba', 'Abajo']
        },
        {
          name: 'Abajo',
          image: 'img/concepts/abajo.jpg',
          description: '¿Dónde está el gato?',
          options: ['Arriba', 'Abajo']
        },
        {
          name: 'Lleno',
          image: 'img/concepts/lleno.jpg',
          description: '¿Cómo está el vaso?',
          options: ['Lleno', 'Vacío']
        },
        {
          name: 'Vacío',
          image: 'img/concepts/vacio.jpg',
          description: '¿Cómo está el vaso?',
          options: ['Lleno', 'Vacío']
        }
      ]
    }
  },
  methods: {
    play() {
      this.played = true
      this.current = 0
      this.result = []
      this.Utils.shuffle(this.concepts)
      this.terminated = false
    },
    select(selection) {
      const result = selection == this.concepts[this.current].name
      this.result.push(result)
      if (this.current < this.concepts.length - 2) {
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
      <img style="max-height: calc(100vh - 6rem)" src="../assets/characters/Sonic.jpeg" />
    </aside>
    <section class="pt-5">
      <h3 class="text-4xl text-green-500 font-bold text-center">Conceptos</h3>
      <template v-if="!played">
        <p class="mt-2">
          Un divertido juego para identificar conceptos básicos (Arriba - Abajo, Adentro - Afuera,
          Adelante - Atrás, Lleno - Vacío, Abierto - Cerrado) a partir de fotografías de objetos
          animados e inanimados. Un juego muy intuitivo para los niños de educación preprimaria.
          Debes responser la pregunta que te haremos seleccionando el botón adecuado. ¿Estás listo?
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
        <div class="mt-5 flex items-center" v-if="!terminated">
          <img
            class="h-80 max-w-xs rounded-md shadow shadow-gray-300"
            :src="concepts[current].image"
          />
          <div class="text-center p-3">
            <h5>{{ concepts[current].description }}</h5>
            <button
              :key="option"
              v-for="option in concepts[current].options"
              @click="select(option)"
              class="py-2 px-6 mx-1 my-1 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              {{ option }}
            </button>
          </div>
        </div>
        <div class="overflow-auto" style="max-height: calc(100vh - 8rem)" v-else>
          <div :key="'result_' + index" v-for="(item, index) in result">
            <div class="flex items-center my-3">
              <div class="h-24 w-24 flex justify-center">
                <img class="max-w-full max-h-full rounded" :src="concepts[index].image" />
              </div>
              <div class="ps-2">
                <img v-if="item" class="h-10 w-10 float-right" src="../assets/good.png" />
                <img v-else class="h-10 w-10 float-right" src="../assets/bad.png" />
                <h4 class="font-bold text-xl text-green-500">
                  {{ concepts[index].name }}
                </h4>
                <p class="whitespace-nowrap mt-4">{{ concepts[index].description }}</p>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
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

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
      figures: [
        {
          name: 'Círculo',
          figure: 'img/figures/circle.png',
          description:
            'Un círculo es una figura geométrica que se forma al dibujar una línea curva cerrada en la que todos los puntos están a la misma distancia del centro. Es como un plato o un disco, pero sin bordes.'
        },
        {
          name: 'Óvalo',
          figure: 'img/figures/oval.png',
          description:
            'Un óvalo es una figura geométrica que se parece a un huevo o a una elipse. Es una forma cerrada y curva que no tiene lados rectos ni ángulos. Un óvalo tiene una línea de simetría que lo divide en dos partes iguales.'
        },
        {
          name: 'Rectángulo',
          figure: 'img/figures/rectangle.png',
          description:
            'Un rectángulo es una figura geométrica que tiene cuatro lados y cuatro ángulos rectos. Es como un cuadrado, pero sus lados opuestos son de diferente longitud. Imagina que tienes una caja de regalo rectangular. Si mides uno de los lados de la caja, y luego mides los otros tres lados, descubrirás que dos de ellos miden lo mismo y los otros dos miden lo mismo, pero son diferentes a los primeros dos.'
        },
        {
          name: 'Rombo',
          figure: 'img/figures/rombo.png',
          description:
            'Un rombo es una figura geométrica que tiene cuatro lados iguales y cuatro ángulos iguales. Es como un cuadrado que ha sido inclinado hacia un lado. Si pateas un cuadrado lo suficientemente fuerte como para que se incline un poco hacia un lado, obtendrás un rombo.'
        },
        {
          name: 'Cuadrado',
          figure: 'img/figures/square.png',
          description:
            'Un cuadrado es una figura geométrica que tiene cuatro lados iguales y cuatro ángulos iguales. Es como un rectángulo, pero todos sus lados tienen la misma longitud. Imagina que tienes una caja de regalo cuadrada. Si mides uno de los lados de la caja, y luego mides los otros tres lados, descubrirás que todos miden lo mismo.'
        },
        {
          name: 'Triángulo',
          figure: 'img/figures/triangle.png',
          description:
            'Un triángulo es una figura geométrica que tiene tres lados y tres ángulos. Es como una pizza cortada en tres partes iguales. Los lados son las líneas que forman el triángulo, y los ángulos son las esquinas donde se unen los lados.'
        }
      ]
    }
  },
  methods: {
    play() {
      this.played = true
      this.current = 0
      this.result = []
      this.Utils.shuffle(this.figures)
      this.terminated = false
    },
    select(selection) {
      const result = selection == this.figures[this.current].name
      this.result.push(result)
      if (this.current < this.figures.length - 2) {
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
      <img class="w-10/12" src="../assets/characters/BobEsponja.png" />
    </aside>
    <section class="pt-5">
      <h3 class="text-4xl text-green-500 font-bold text-center">¡Adivina la Figura!</h3>
      <template v-if="!played">
        <p class="mt-2">
          Este juego es una forma divertida de enseñar a los niños sobre las diferentes figuras
          geométricas y cómo identificarlas. También les ayuda a desarrollar habilidades de
          comunicación y pensamiento crítico. Debes seleccionar el botón que represente la figura
          geométrica que te presentaremos. ¿Estás listo?
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
          <img class="h-80" :src="figures[current].figure" />
          <div class="text-center">
            <button
              @click="select('Círculo')"
              class="py-2 px-6 mx-1 my-1 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              Círculo
            </button>
            <button
              @click="select('Óvalo')"
              class="py-2 px-6 mx-1 my-1 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              Óvalo
            </button>
            <button
              @click="select('Rectángulo')"
              class="py-2 px-6 mx-1 my-1 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              Rectángulo
            </button>
            <button
              @click="select('Rombo')"
              class="py-2 px-6 mx-1 my-1 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              Rombo
            </button>
            <button
              @click="select('Cuadrado')"
              class="py-2 px-6 mx-1 my-1 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              Cuadrado
            </button>
            <button
              @click="select('Triángulo')"
              class="py-2 px-6 mx-1 my-1 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
            >
              Triángulo
            </button>
          </div>
        </div>
        <div class="overflow-auto" style="max-height: calc(100vh - 8rem)" v-else>
          <div :key="'result_' + index" v-for="(item, index) in result">
            <div class="flex items-center my-1">
              <img class="h-24" :src="figures[index].figure" />
              <div class="ps-2">
                <h4 class="font-bold text-xl text-green-500">
                  {{ figures[index].name }}
                </h4>
                <img v-if="item" class="h-10 w-10 float-right" src="../assets/good.png" />
                <img v-else class="h-10 w-10 float-right" src="../assets/bad.png" />
                <p>{{ figures[index].description }}</p>
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

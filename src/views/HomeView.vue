<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink }
}
</script>
<template>
  <div
    class="grid grid-cols-3 px-32 py-2 gap-10 overflow-auto"
    style="max-height: calc(100vh - 5rem)"
  >
    <div class="rounded p-4 shadow shadow-gray-400">
      <img src="../assets/characters/Goofy.jpeg" class="rounded-t mt-2" />
      <h4 class="font-bold text-2xl text-center text-green-500">¡Adivina la figura!</h4>
      <p class="mb-5">
        Este juego es una forma divertida de enseñar a los niños sobre las diferentes figuras
        geométricas y cómo identificarlas. También les ayuda a desarrollar habilidades de
        comunicación y pensamiento crítico.
      </p>
      <div class="text-center mb-2">
        <RouterLink
          to="figures"
          class="py-2 px-6 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
          >JUGAR</RouterLink
        >
      </div>
    </div>
    <div class="rounded p-4 shadow shadow-gray-400">
      <img src="../assets/characters/NhoNho.png" class="rounded-t my-4" />
      <h4 class="font-bold text-2xl text-center text-green-500">Conceptos</h4>
      <p class="mb-5">
        Un divertido juego para identificar conceptos básicos (Arriba - Abajo, Adentro - Afuera,
        Adelante - Atrás, Lleno - Vacío, Abierto - Cerrado) a partir de fotografías de objetos
        animados e inanimados. Un juego muy intuitivo para los niños de educación preprimaria.
      </p>
      <div class="text-center mb-2">
        <RouterLink
          to="concepts"
          class="py-2 px-6 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
          >JUGAR</RouterLink
        >
      </div>
    </div>
    <div class="rounded p-4 shadow shadow-gray-400">
      <img src="../assets/characters/Donald.jpeg" class="rounded-t" />
      <h4 class="font-bold text-2xl text-center text-green-500">¡Multiplícame si puedes!</h4>
      <p class="mb-5">
        Divertidas tarjetas con multiplicaciones y sus respuestas correspondientes. Los niños pueden
        jugar al juego de memoria mientras practican sus habilidades de multiplicación.
      </p>
      <div class="text-center mb-2">
        <RouterLink
          to="products"
          class="py-2 px-6 text-2xl text-white font-bold bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl border-4 border-green-600"
          >JUGAR</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<template>
  <div>
    <p>🏛</p>
    <template v-for="(landmark, index) in landmarks">
      <span v-if="index != landmarksCount - 1" :key="index">
        <i>{{landmark}}</i>,
      </span>
      <span v-else :key="index">
        and
        <i>{{landmark}}</i>.
      </span>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    landmarksCount() {
      return this.landmarks.length;
    },
  },
  data() {
    return {
      landmarks: [
        'Arc de Triomphe',
        'Big Ben',
        'Casa Loma',
        'Castel Santangelo',
        'Charlottenburg Palace',
        'Colosseum',
        'Dresden Frauenkirche',
        'Eiffel Tower',
        'Independence Hall',
        'Leaning Tower of Pisa',
        'Milan Cathedral',
        'Notre Dame Cathedral',
        'Pantheon',
        'Reichstag',
        'Sacre Coeur Basilica',
        'Savior on Blood Church',
        'St Basil Cathedral',
        'St Louis Cathedral',
        'St Paul Cathedral',
        'Statue of Liberty',
        'Stephansdom',
        'Taj Mahal',
        'Trevi Foutain',
        'Tyn Church',
        'Westminster Abbey',
      ],
    };
  },
};
</script>


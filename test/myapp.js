
function helloFunction () {
  return 'Hi there!!'
}

function printWithPrefix (text) {
  console.log(`Hey you are calling for ${text}`)
}

export default {
  template: `<div id="warpper">
    <span class="number">{{ number }}</span>
    <button id="add-btn" @click="add">Plus</button>
    <button id="minus-btn" @click="minus">Minus</button>
    <button id="power-btn" @click="power">Power</button>
  </div>`,
  data() {
    return {
      number: 99,
      handshake: helloFunction()
    }
  },
  methods: {
    add () {
      this.number++
    },
    minus () {
      this.number--
    },
    power () {
      printWithPrefix('divide')
      this.number **= 2
    },
    divide () {
      this.number /= 2
    }
  }
}

function helloFunction() {
  return 'Hi there!!'
}

function printWithPrefix(text) {
  console.log(`Hey you are calling for ${text}`)
}

const appInstance = new Vue({
  el: '#app',
  data: {
    number: 99,
    handshake: helloFunction()
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
})
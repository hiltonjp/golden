var joke_getter = new Vue({
  el:"#joke_getter",
  data: {
    loading: false,
    joke_num: '',
    setup: '',
    punchline: '',
    type: ''
  },
  created: function() {
    this.crackAWiseOne();
  },
  methods: {
    crackAWiseOne: function() {
      this.loading = true;
      fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(response => {
      	return response.json();
      }).then(json => {
        this.loading = false;
      	this.joke_num = json.id;
        this.setup = json.setup;
        this.punchline = json.punchline;
        this.type = json.type;
      	return true;
      }).catch(err => {
      });
    }
  },
  computed: {
    phillipsJoke: function() {
      return this.type === "programming";
    }
  }
});

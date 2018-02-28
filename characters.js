var char_module = new Vue({
  el: "#char_module",
  data: {
    image: '',
    name: '',
    description: '',
    which: 0,
    characters: [
      {
        name: "Elder Jimmy Herbie",
        image: "char_Herbie.jpg",
        description: "Elder Herbie is first and foremost a people person. While he has some trouble staying focused, and isn't the most obedient missionary, his infectious positive attitude, love for the people, and easy-going personality still makes him an effective missionary."
      },
      {
        name: "Elder Wade Phillips",
        image: "char_Phillips.jpg",
        description: "Elder Phillips has a love for the rules and regulations of the mission. His willingness to work hard, be obedient, and listen to the spirit has helped him out a lot in the past. But, his inflexibility tends to make him harder to get along with, and his shy nature tends to get in the way of getting to know people."
      },
      {
        name: "President Brogill",
        image: "char_PresidentBrogill.jpg",
        description: "President Brogill's inspired leadership has helped the California, Nearville mission to truly flourish. He has a love for everyone, and an infectious positive attitude. Though, he wants to make sure the elders are hard at work!"
      },
      {
        name: "Robo Comp",
        image: "char_roboComp.jpg",
        description: "Robo Comp is a robotic missionary, specially designed for the field. His cold, calculating, algorithmic approach to the work assures that no one walks away without a chance to hear the gospel. Or perhaps get a Book of Mormon fired at their face."
      },
      {
        name: "Zone Lord Friend",
        image: "char_ZoneLordFriend.jpg",
        description: "Zone Lord Friend is one of the Zone Leaders of the Bucketsville Zone. He's practically oozing with charisma. But maybe that's just the hat talking. (fun fact: Elder Friend is based on one of my companions from the mission. He, too, wore a pointy hat with orange horns and a cape, but only to transfer meetings.)"
      },
      {
        name: "Zone Lord Baxter",
        image: "char_ZoneLordBaxter.jpg",
        description: "Little is known about Zone Lord Baxter, except that he likes pizza, wants to grow up to be a physicist, is 24 years old, and is actually one of the Assistants to the President in disguise."
      }
    ]
  },
  created: function() {
    this.loadCharacter();
  },
  methods: {
    loadCharacter: function() {
      let character = this.characters[this.which];
      this.image = "/image/" +  character.image;
      this.name = character.name;
      this.description = character.description;
    },
    setWhich: function(which) {
      this.which = this.which;
    }
  },
  watch: {
    which: function(val, oldvalue) {
      this.loadCharacter();
    }
  }
});

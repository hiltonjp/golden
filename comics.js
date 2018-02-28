var comic_viewer = new Vue({
  el:'#comic_viewer',
  data: {
    loading: true,
    number: '',
    max: '',
    title: '',
    image: '',
    alt: '',
    jump_value: '',
    comics: [
      {title: "Golden", src: "000_golden.jpg"},
      {title: "Knowledge", src: "001_knowledge.jpg"},
      {title: "Loopholes", src: "002_loopholes.jpg"},
      {title: "Night Time Prayers", src: "003_nighttime_prayers.jpg"},
      {title: "Contention", src: "004_contention.jpg"},
      {title: "Patience", src: "005_patience.jpg"},
      {title: "Leftovers", src: "006_leftovers.jpg"},
      {title: "Bubbles", src: "007_bubbles.jpg"},
      {title: "Dodgeball", src: "008_dodgeball.jpg"},
      {title: "Contacting", src: "009_contacting.jpg"},
      {title: "Handshakes", src: "010_handshakes.jpg"},
      {title: "Still Good", src: "011_still_good.jpg"},
      {title: "Moping", src: "012_moping_box.jpg"},
      {title: "Packages", src: "013_packages.jpg"},
      {title: "Perspective", src: "014_perspective.jpg"},
      {title: "Transfer Planning", src: "015_transfer_planning.jpg"},
      {title: "Comp Inventory", src: "016_comp_inventory.jpg"},
      {title: "Trust", src: "017_trust.jpg"},
      {title: "Comp Unity", src: "018_comp_unity.jpg"},
      {title: "Weekly Goals", src: "019_weekly_goals.jpg"},
      {title: "Fishermen", src: "020_fishermen.jpg"},
      {title: "Exceptions", src: "021_exceptions.jpg"},
      {title: "Sleeping In", src: "022_sleeping_in.jpg"},
      {title: "Diligence", src: "023_diligence.jpg"},
      {title: "Great Ideas", src: "024_small_and_simple.jpg"},
      {title: "Mother's Day", src: "025_mothers_day.jpg"},
      {title: "Birthday Presents", src: "026_birthday_presents.jpg"},
      {title: "Accountability", src: "027_accountability.jpg"},
      {title: "Father's Day", src: "028_fathers_day.jpg"},
      {title: "Tongues", src: "029_tongues.png"},
      {title: "Fireworks", src: "030_fireworks.jpg"},
      {title: "Forgiveness", src: "031_forgiveness.jpg"},
      {title: "Cooking", src: "032_comp_cooking.jpg"},
      {title: "Top Secret", src: "033_top_secret.jpg"},
      {title: "Delivery", src: "034_delivery.jpg"},
      {title: "Robo Comp", src: "035_robo_comp.jpg"},
      {title: "Languages", src: "036_languages.jpg"},
      {title: "Robo-contacting", src: "037_robocontacting.jpg"},
      {title: "Fasting", src: "038_fasting.jpg"},
      {title: "Contacting Styles", src: "039_statistics.jpg"},
      {title: "Home Town", src: "040_hometown.jpg"},
      {title: "Operating Manual", src: "041_operating_manual.jpg"},
      {title: "Trunky", src: "042_trunky.jpg"},
      {title: "Shutdown Sequence", src: "043_shutdown_sequence.jpg"},
      {title: "Error: Trunk Overload", src: "044_trunk_overload.jpg"},
      {title: "Inspired Measures", src: "045_inspired_measure.jpg"},
      {title: "Zone Lord Friend", src: "046_ZLF.jpg"},
      {title: "Transfer", src: "047_transfer.jpg"},
      {title: "Administrivia", src: "048_administrivia.jpg"},
      {title: "Strong Silent Types", src: "049_strong_silent_type.jpg"},
      {title: "Tracting", src: "050_tracting.jpg"},
      {title: "Key Indicators", src: "051_key_indicators.jpg"},
      {title: "Master Plan", src: "052_master_plan.png"},
      {title: "Horns", src: "053_coincidence.png"},
      {title: "New Investigators", src: "054_new_investigators.png"},
      {title: "Charity", src: "055_charity.jpg"},
      {title: "Christmas", src: "056_christmas.jpg"},
      {title: "Star Wards", src: "057_starwars.jpg"},
      {title: "Brother Skywalker", src: "058_the_gospel_is_surprisingly_applicable_to_vader.jpg"},
      {title: "Sand", src: "059_references.jpg"},
      {title: "Passoffs", src: "060_passoffs.jpg"},
      {title: "Ammon", src: "061_ammon.jpg"}
    ],
  },
  created: function() {
    this.max = this.comics.length
    this.number = 0;
    this.loadComic();
  },
  methods: {
    loadComic: function() {
      this.loading = true;
      let comic = this.comics[this.number]
      this.image = "/image/" + comic.src;
      this.title = "#" + this.number + ": " + comic.title;
      this.loading = false;
    },
    firstComic: function() {
      this.number = 0;
    },
    previousComic: function() {
      this.number -= 1;
    },
    nextComic: function() {
      this.number += 1;
    },
    newestComic: function() {
      this.number = this.max - 1;
    },
    gotoComic: function() {
      if (typeof(this.jump_value) === "number") {
        if (this.jump_value >= this.max) {
          this.number = this.max-1
        } else if (this.jump_value < 0) {
          this.number = 0;
        }else {
          this.number = this.jump_value;
        }
      }
    },
  },
  computed: {
    moreComics: function() { return this.number !== this.max - 1; },
    fewerComics: function() { return this.number !== 0; }
  },
  watch: {
    number: function(value, oldvalue) {
      this.jump_value = this.number;
      this.loadComic();
    }
  }


});

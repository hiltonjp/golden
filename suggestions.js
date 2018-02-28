Vue.component('star-rating', VueStarRating.default);

var sug_box = new Vue({
  el: "#suggestion_box",
  data: {
    addedName: '',
    overall: '',
    website: '',
    idea: '',
    rating: 0,
    comments: [],
    average: 0,
    unfilled: false,
    months: ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days: ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  methods: {
    addComment: function() {
      if (this.addedName !== '' || this.overall !== '') {
        this.comments.push({
          author: this.addedName,
          overall: this.overall,
          website: this.website,
          idea: this.idea,
          rating: this.rating
        });

        $.ajax({
            url: "//formspree.io/jerrodstorm.comics@gmail.com",
            method: "POST",
            data: {
              name: this.addedName,
              comment: this.overall,
              feedback: this.website,
              idea: this.idea,
              rating: this.rating
            },
            dataType: "json",
            success: function(json) {
              sug_box.addedName = '';
              sug_box.overall = '';
              sug_box.website = '';
              sug_box.idea = '';
              sug_box.rating = 0;
              sug_box.updateAverageRating();
              sug_box.unfilled = false;
            }
        });
      } else {
        this.unfilled = true;
      }
    },
    updateAverageRating: function() {
      let sum = 0;
      let num = 0;
      for (var comment of this.comments) {
        num++;
        sum += comment.rating;
      }
      let ave = sum/num;
      if (ave % 1 === 0 ||  (ave*10) % 1===0) //formatting magic.
        this.average = ave.toFixed(1);
      else
        this.average = ave.toFixed(2);
    },
  },
  computed: {
    year: function() { return new Date().getFullYear(); },
    month: function() { return this.months[new Date().getMonth()]; },
    date: function() {
      let date = new Date().getDate();
      let ending = date % 10;
      date = date + (ending > 3 ? "th" : ending === 1 ? "st" : ending === 2 ? "nd" : "rd");
      return date;
    },
    day: function() { return this.days[new Date().getDay()]; },
    hour: function() {
      let hour =  Date().getHours();
      hour = hour - hour > 12 ? 12 : 0;
      return hour;
    },
    minute: function() { return new Date().getMinutes(); },
    meridian: function() { return (new Date().getHours()) > 12 ? "pm" : "am"; }
  }
});

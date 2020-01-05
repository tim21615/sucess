var app = new Vue({
    el: "#app",
    data() {
      return {
        list1: [{
          name: "John",
          id: 1
        }, {
          name: "Joao",
          id: 2
        }, {
          name: "Jean",
          id: 3
        }, {
          name: "Gerard",
          id: 4
        }],
        list2: [{
          name: "Juan",
          id: 5
        }, {
          name: "Edgard",
          id: 6
        }, {
          name: "Johnson",
          id: 7
        }],
        list3: [{
          name: "Juan",
          id: 8
        }, {
          name: "Edgard",
          id: 9
        }, {
          name: "Juan",
          id: 10
        }, {
          name: "Edgard",
          id: 11
        }]
      };
    },
    methods: {
      log: function(evt) {
        window.console.log(evt);
      }
    }
  });
  
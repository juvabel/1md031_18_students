'use strict';
var socket = io();


var vm = new Vue({
  el: '#burgerselection',
  data: {
    title: 'Select your Burger ',
    burgers: burgerMenu,
    vegi: '---vegetarian'
  }

})


var vm2 = new Vue ({
  el: '#customerinformation',
  data: {
    name: '',
    // address: '',
    email: '',
    gender: '',
    allergies: '',
    payment: '',
    burgers: '',
    orders: {},
    position: {}
  },
  created: function () {
     // socket.on('initialize', function (data) {
     //   this.orders = data.orders;
     // }.bind(this));

     // socket.on('currentQueue', function (data) {
     //   this.orders = data.orders;
     // }.bind(this));
   },
  methods:{
    // returnOrder: function() {
    //   var custInfo = returnOrder();
    //   console.log(custInfo);
    //   console.log('button clicked');
    //   this.$data.name = 'Name: '+ custInfo[0];
    //   // this.$data.address = 'Address: '+ custInfo[1] + ' ' + custInfo[2] + ', ' + custInfo[3] + ' ' + custInfo[4];
    //   this.$data.email = 'Email: ' + custInfo[1];
    //   this.$data.gender = 'Gender: ' + custInfo[2];
    //   if (custInfo[3] == undefined) {
    //     this.$data.allergies = 'Allergies: none'
    //   }
    //   else {
    //     this.$data.allergies = 'Allergies: ' + custInfo[3];
    //   }
    //   this.$data.payment = 'Payment: ' +custInfo[4];
    //   this.$data.burgers = 'Your order: '+ custInfo[5];
    // },
    getNext: function () {
      // var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
      //   return Math.max(last, next);
      // }, 0);
      // return lastOrder + 1;
       return(Math.floor(Math.random()*1000));

    },
    addOrder: function (event) {

      var custInfo = returnOrder();
        this.$data.name = 'Name: '+ custInfo[0];
        this.$data.email = 'Email: ' + custInfo[1];
        this.$data.gender = 'Gender: ' + custInfo[2];
        if (custInfo[3] == undefined) {
          this.$data.allergies = 'Allergies: none';
          custInfo[3] = 'no allergies';
        }
        else {
          this.$data.allergies = 'Allergies: ' + custInfo[3];
        }
        this.$data.payment = 'Payment: ' +custInfo[4];
        this.$data.burgers = 'Your order: '+ custInfo[5];

      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: this.position.x,
                                           y: this.position.y },
                                orderItems: [custInfo[5]],
                                personalInfo: custInfo[0] + "( "+ custInfo[1]+ ", " + custInfo[2]+ ", " + custInfo[3]+ ", "+ custInfo[4] + " )"
                              });
    },
    displayOrder: function (event) {
      console.log("DEV map click");
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.position = { x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y }


    }
  }

})

// var vm3 = new Vue({
//   el: '#customerinformation',
//   data: {
//     orders: {},
//     position: {}
//   },
//   created: function () {
//     socket.on('initialize', function (data) {
//       this.orders = data.orders;
//     }.bind(this));
//
//     socket.on('currentQueue', function (data) {
//       this.orders = data.orders;
//     }.bind(this));
//   },
//   methods: {
//     getNext: function () {
//       var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
//         return Math.max(last, next);
//       }, 0);
//       return lastOrder + 1;
//     },
//     addOrder: function (event) {
//       var offset = {x: event.currentTarget.getBoundingClientRect().left,
//                     y: event.currentTarget.getBoundingClientRect().top};
//       socket.emit("addOrder", { orderId: this.getNext(),
//                                 details: { x: event.clientX - 10 - offset.x,
//                                            y: event.clientY - 10 - offset.y },
//                                 orderItems: ["Beans", "Curry"]
//                               });
//     },
//     displayOrder: function (event) {
//       var offset = {x: event.currentTarget.getBoundingClientRect().left,
//                     y: event.currentTarget.getBoundingClientRect().top};
//     this.position = { x: event.clientX - 10 - offset.x,
//                       y: event.clientY - 10 - offset.y }
//
//
//     }
//   }
// });

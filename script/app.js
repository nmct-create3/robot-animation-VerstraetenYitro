// gsap.to('#Robot', { duration: 1, x: 50 });  //==> naar links verschuiven

// gsap.from('#Robot', { duration: 1, x: 50 }); //==> van links naar rechts schuiven

// gsap.set('#Robot', { duration: 1, x: 50 }); //==> links staan

// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 }); //==> van een posistie naar een andere positie

// gsap.to('#Robot', {
//     duration: 2,
//     ease: 'elastic.out(2.5,0.1)',
//     y: 25,
//     x: 25,
//   })

// let tl = gsap.timeline()

// tl.fromTo('#Robot',{
//   y: 2.5,
// },{
//   duration: .75,
//   y: -2.5,
// }).to('#Shadow', {
//   duration: .75,
//   scale: 0.75,
// })

// let tl = gsap.timeline({
//   defaults: {
//     duration: 0.75,
//     ease: 'power1.inOut',
//   },
// });

// tl.fromTo(
//   '#Robot',
//   {
//     y: 2.5,
//   },
//   {
//     y: -2.5,
//   }
// ).to('#Shadow', {
//   scale: 0.75,
// });

// tl.fromTo(
//   '#Robot',
//   {
//     y: 2.5,
//   },
//   {
//     y: -2.5,
//   }
// )
//   .to(
//     '#Shadow',
//     {
//       scale: 0.75,
//     },
//     '-=.75'
//   )

//   .to(
//     '#Shadow',
//     {
//       scale: 0.75,
//     },
//     '<'
//   );

let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});
tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '-=.75'
  );

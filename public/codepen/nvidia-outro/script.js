Vue.component('debug', {
  name: 'Debug',
  props: ['text'],
  template: `
    <h2 :style="{
      textAlign: 'center',
      marginTop: '3rem'
    }">{{text}}</h2>
  ` });


Vue.component('cube', {
  template: '#cube-template',
  name: 'Cube',
  props: ['debug', 'solid'],
  computed: {
    debugNum() {
      return typeof this.debug !== 'undefined';
    } } });



Vue.component('logo', {
  template: '#logo-template',
  props: {
    start: { type: Number, default: 0 },
    show: { type: Boolean, default: false } } });



new Vue({
  el: '#app',
  data: () => ({
    tl: null,
    showLogo: false,
    showLogoAt: 2.8,
    cubes: [
    /* 0  */{ a: 0, x: 0, y: 0, z: 7000, s: 0.7, solid: 0, o: 1 },
    /* 1  */{ a: 0, x: 0, y: 0, z: 2000, s: 4, solid: 0, o: 0.2, zi: 4 },
    /* 2  */{ a: 1, x: -280, y: -210, z: 3000, s: 1.1, solid: 0, o: 1 },
    /* 3  */{ a: 2, x: -280, y: 20, z: 6000, s: 1.1, solid: 1, o: 1, zi: 2 },
    /* 4  */{ a: 2, x: -490, y: 80, z: 2000, s: 1.2, solid: 0, o: 1 },
    /* 5  */{ a: 2, x: -420, y: -280, z: 1000, s: 0.55, solid: 0, o: 1 },
    /* 6  */{ a: 2, x: 500, y: 45, z: 3000, s: 1.1, solid: 1, o: 0.8 },
    /* 7  */{ a: 2, x: 150, y: -200, z: 2000, s: 1, solid: 1, o: 0.7 },
    /* 8  */{ a: 1, x: 290, y: -220, s: 0.5, solid: 1, o: 0.7, zi: 2 },
    /* 9  */{ a: 1, x: 360, y: -190, s: 0.5, solid: 0, o: 0.4 },
    /* 10 */{ a: 2, x: 530, y: 210, z: 1000, s: 0.6, solid: 0, o: 0.5, zi: 2 },
    /* 11 */{ a: 1, x: 210, y: 160, z: 2000, s: 0.5, solid: 0, o: 0.7, zi: 2 },
    /* 12 */{ a: 2, x: 22, y: 237, s: 0.7, solid: 0, o: 1 },
    /* 13 */{ a: 1, x: -80, y: 250, z: 3000, s: 1.2, solid: 0, o: 0.7, zi: 2 },
    /* 14 */{ a: 1, x: -280, y: 367, z: 2000, s: 2.2, solid: 0, o: 0.7, zi: 2 },
    /* 15 */{ a: 1, x: -620, y: -180, z: 2000, s: 1, solid: 0, o: 1, zi: 2 },
    /* 16 */{ a: 1, x: -530, y: 270, z: 2000, s: 0.5, solid: 1, o: 1, zi: 2 },
    /* 17 */{ a: 2, x: 380, y: 50, z: 1000, s: 0.5, solid: 0, o: 0.5, zi: 2 },
    /* 18 */{ a: 1, x: 480, y: -270, s: 0.35, solid: 1, o: 0.85 }] }),


  computed: {
    range() {
      const xArr = this.cubes.map(c => c.x);
      return Math.abs(Math.min(...xArr)) + Math.abs(Math.max(...xArr));
    },

    delay() {
      return cube => {
        const [x, r] = [cube.x, this.range];
        return (r / 2 + (x < 0 ? Math.abs(x) : -Math.abs(x))) / r;
      };
    } },

  methods: {
    restart() {
      this.showLogo = false;
      this.tl.restart();

      setTimeout(() => {
        this.showLogo = true;
      }, this.showLogoAt * 1000);
    },
    play() {

    } },

  mounted() {
    setTimeout(() => {
      this.showLogo = true;
    }, this.showLogoAt * 1000);

    this.tl = new TimelineMax();
    this.tl.fromTo('.scene', 2, {
      perspective: 7000 },
    {
      perspective: 80000,
      ease: Power0.easeNone });


    this.cubes.forEach((cube, i) => {
      const delay = this.delay(cube) + .8;
      const el = `#cube-${i}`;
      if (cube.a === 1) {
        return this.tl.to(el, 1, {
          '--rz': '-90deg',
          '--s': 0,
          ease: Quad.easeInOut },
        delay);
      }

      if (cube.a === 2) {
        return this.tl.to(el, 1, {
          '--rx': '90deg',
          '--rz': '-90deg',
          '--ry': '-90deg',
          '--s': 0,
          ease: Quad.easeInOut },
        delay);
      }

      this.tl.
      to(el, 1, {
        '--rz': '180deg',
        '--rx': '90deg',
        '--s': 0.5,
        ease: Quad.easeInOut },
      delay).
      to(el, .2, { opacity: 0 }, '-=.1');
    });

    this.tl.staggerFromTo('.pen-list li', 0.5, {
      y: 20,
      opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay: 1.5 },
    0.05);
  } });
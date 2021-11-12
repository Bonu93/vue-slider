/*
 * Vue Slider
 */


const app = new Vue({
    el: '#app',

    created: function() {
        setInterval(() => {
            this.nextSlide();
        }, 3000);
    },

    data: {
        activeImg : 1,
    

        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Spiaggia',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
    },

    methods: {
        prevSlide() {
            this.activeImg--;
            if (this.activeImg < 0) {
                this.activeImg = this.slides.length -1;
            }
        },

        nextSlide() {
            this.activeImg++;
            if (this.activeImg  > this.slides.length -1) {
                this.activeImg = 0;
            }
        },

        activeSlide(index)  {
            this.activeImg = index;
        },
    },
});

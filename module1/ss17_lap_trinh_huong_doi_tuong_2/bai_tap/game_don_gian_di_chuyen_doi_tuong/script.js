/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function (speed) {
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function (speed) {
        this.top += speed;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function (speed) {
        this.left -= speed;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function (speed) {
        this.top -= speed;
        console.log('ok: ' + this.top);
    }
}

var hero = new Hero('tui nghe.jpg', 20, 30, 200);
let speed = parseInt(prompt("Enter ther speed"));

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top ===  20) {
        hero.moveRight(speed);
    } else if (hero.top < window.innerHeight - hero.size && hero.left > window.innerWidth - hero.size-20) {
        hero.moveDown(speed);
    } else if (hero.left > hero.size - hero.size) {
        hero.moveLeft(speed);
    } else if (hero.top > hero.size - hero.size) {
        hero.moveUp(speed);
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
}

start();
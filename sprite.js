var
img_grass,
img_rock,
img_stump,
img_sky,
img_water,
img_sign,
img_tree,
img_ship;





function Sprite(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Sprite.prototype.draw = function(ctx, x, y, w, h) {
    if (!w) w = this.w;
    if (!h) h = this.h;
    
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, w, h);
}






function initSprites() {
    var img = new Image();
    img.src = "maptile.png";
    
    img_grass = new Sprite(img, 1, 1, 32, 32);
    img_rock = new Sprite(img, 34, 1, 32, 32);
    img_stump = new Sprite(img, 67, 1, 32, 32);
    img_sky = new Sprite(img, 100, 1, 32, 32);
    img_water = new Sprite(img, 133, 1, 32, 32);
    img_sign = new Sprite(img, 166, 1, 32, 32);
    img_tree = new Sprite(img, 1, 36, 66, 85);
    img_ship = [new Sprite(img, 70, 51, 55, 70),
                new Sprite(img, 127, 51, 55, 70)];
}
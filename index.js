// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return Math.PI * this.diameter
    }
    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set diameter(d) {
        this.radius = d / 2;

    }
    set circumference(c) {
        let noPi = c / Math.PI
        return this.radius = noPi / 2
    }
}
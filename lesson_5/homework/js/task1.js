// task 1

var Point = {
    x: 9,
    y: -15,
    GetQuadrant: function() {
        // 1st Quadrant
        if (this.x >= 0 && this.y >= 0) {
            document.write('1st Quadrant');
        }
        // 2nd Quadrant
        else if (this.x < 0 && this.y > 0) {
            document.write('2nd Quadrant');
        }
        // 3rd Quadrant
        else if (this.x < 0 && this.y < 0) {
            document.write('3rd Quadrant');
        }
        // 4th Quadrant
        else {
            document.write('4th Quadrant');
        }
    }
}

document.write(Point.GetQuadrant());
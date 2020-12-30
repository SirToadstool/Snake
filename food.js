class Food extends Rectangle {
	constructor() {
		super(200, 200, 10, 10, '#e00');
	}
	move = (width, height, scale) => {
		let rows = height / scale;
		let columns = width / scale;

		this.position.x = Math.floor(Math.random() * columns) * 10;
		this.position.y = Math.floor(Math.random() * rows) * 10;
	}
}
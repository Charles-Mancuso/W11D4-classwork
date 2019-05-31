class Board {
    constructor() {
        this.grid = Board.make_grid();
    }

    static make_grid() {
        let grid = [];
        for (let i = 0; i < 3; i++){
            grid.push([]);   
            for (let j = 0; j < 3; j++) {
                grid[i].push(null);
            }
        }
        return grid;
    }

    isValidPos(pos) {
        return (pos[0] >= 0 && pos[0] < 3) && (pos[1] >= 0 && pos[1] < 3); 
    }

    display_grid() {
        console.log(this.grid[0]);
        console.log(this.grid[1]);
        console.log(this.grid[2]);
    } 

    won() {
        const xWinningPatterns = [
            [this.grid[0][0] === "x" && this.grid[0][1] === "x" && this.grid[0][2] === "x"],
            [this.grid[1][0] === "x" && this.grid[1][1] === "x" && this.grid[1][2] === "x"],
            [this.grid[2][0] === "x" && this.grid[2][1] === "x" && this.grid[2][2] === "x"],
            [this.grid[0][0] === "x" && this.grid[1][0] === "x" && this.grid[2][0] === "x"],
            [this.grid[0][1] === "x" && this.grid[1][1] === "x" && this.grid[2][1] === "x"],
            [this.grid[0][2] === "x" && this.grid[1][2] === "x" && this.grid[2][2] === "x"],
            [this.grid[0][0] === "x" && this.grid[1][1] === "x" && this.grid[2][2] === "x"],
            [this.grid[2][0] === "x" && this.grid[1][1] === "x" && this.grid[0][2] === "x"]
        ];

        const yWinningPatterns = [
            [this.grid[0][0] === "y" && this.grid[0][1] === "y" && this.grid[0][2] === "y"],
            [this.grid[1][0] === "y" && this.grid[1][1] === "y" && this.grid[1][2] === "y"],
            [this.grid[2][0] === "y" && this.grid[2][1] === "y" && this.grid[2][2] === "y"],
            [this.grid[0][0] === "y" && this.grid[1][0] === "y" && this.grid[2][0] === "y"],
            [this.grid[0][1] === "y" && this.grid[1][1] === "y" && this.grid[2][1] === "y"],
            [this.grid[0][2] === "y" && this.grid[1][2] === "y" && this.grid[2][2] === "y"],
            [this.grid[0][0] === "y" && this.grid[1][1] === "y" && this.grid[2][2] === "y"],
            [this.grid[2][0] === "y" && this.grid[1][1] === "y" && this.grid[0][2] === "y"]
        ];

        for (let i = 0; i < xWinningPatterns.length; i++) {
            if (xWinningPatterns[i][0]) {
                return true;
            } else if (yWinningPatterns[i][0]) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    winner() {
        const xWinningPatterns = [
            [this.grid[0][0] === "x" && this.grid[0][1] === "x" && this.grid[0][2] === "x"],
            [this.grid[1][0] === "x" && this.grid[1][1] === "x" && this.grid[1][2] === "x"],
            [this.grid[2][0] === "x" && this.grid[2][1] === "x" && this.grid[2][2] === "x"],
            [this.grid[0][0] === "x" && this.grid[1][0] === "x" && this.grid[2][0] === "x"],
            [this.grid[0][1] === "x" && this.grid[1][1] === "x" && this.grid[2][1] === "x"],
            [this.grid[0][2] === "x" && this.grid[1][2] === "x" && this.grid[2][2] === "x"],
            [this.grid[0][0] === "x" && this.grid[1][1] === "x" && this.grid[2][2] === "x"],
            [this.grid[2][0] === "x" && this.grid[1][1] === "x" && this.grid[0][2] === "x"]
        ];
        
        const yWinningPatterns = [
            [this.grid[0][0] === "y" && this.grid[0][1] === "y" && this.grid[0][2] === "y"],
            [this.grid[1][0] === "y" && this.grid[1][1] === "y" && this.grid[1][2] === "y"],
            [this.grid[2][0] === "y" && this.grid[2][1] === "y" && this.grid[2][2] === "y"],
            [this.grid[0][0] === "y" && this.grid[1][0] === "y" && this.grid[2][0] === "y"],
            [this.grid[0][1] === "y" && this.grid[1][1] === "y" && this.grid[2][1] === "y"],
            [this.grid[0][2] === "y" && this.grid[1][2] === "y" && this.grid[2][2] === "y"],
            [this.grid[0][0] === "y" && this.grid[1][1] === "y" && this.grid[2][2] === "y"],
            [this.grid[2][0] === "y" && this.grid[1][1] === "y" && this.grid[0][2] === "y"]
        ];

        for (let i = 0; i < xWinningPatterns.length; i++){
            if(xWinningPatterns[i][0]){
                return 'x';
            } else if (yWinningPatterns[i][0]) {
                return 'y';
            }
        }
    }

    isEmpty(pos) {
        let x = pos[0];
        let y = pos[1];
        return this.grid[x][y] === null;
    }

    place_mark(pos, mark) {
        let x = pos[0];
        let y = pos[1];
        if (this.isEmpty(pos)) {
            this.grid[x][y] = mark;
        }
    }

}


b = new Board();
b.display_grid();
b.place_mark([0,0], "x");
b.place_mark([0,1], "x");
b.place_mark([0,2], 'x');
b.place_mark([1, 0], "y");
b.place_mark([1, 1], "y");
b.place_mark([1, 2], 'y');

b.winner();




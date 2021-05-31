let tic_tac_toe_board = [['', '', ''],
    ['', '', ''],
    ['', '', '']]

let occupied_positions = []

const board = (player_position, player) => {
    for (let position = 0; position < occupied_positions.length; position++) {
        if (occupied_positions[position] == player_position) {
            return "Already Occupied";
        }
    }

    if (player_position == "1" && player == "X") {
        tic_tac_toe_board[0][0] = "X";
        occupied_positions.push("1");
    }

    else if (player_position == "2" && player == "X") {
        tic_tac_toe_board[0][1] = "X";
        occupied_positions.push("2");
    }

    else if (player_position == "3" && player == "X") {
        tic_tac_toe_board[0][2] = "X";
        occupied_positions.push("3");
    }

    else if (player_position == "4" && player == "X") {
        tic_tac_toe_board[1][0] = "X";
        occupied_positions.push("4");
    }

    else if (player_position == "5" && player == "X") {
        tic_tac_toe_board[1][1] = "X";
        occupied_positions.push("5");
    }

    else if (player_position == "6" && player == "X") {
        tic_tac_toe_board[1][2] = "X";
        occupied_positions.push("6");
    }

    else if (player_position == "7" && player == "X") {
        tic_tac_toe_board[2][0] = "X";
        occupied_positions.push("7");
    }

    else if (player_position == "8" && player == "X") {
        tic_tac_toe_board[2][1] = "X";
        occupied_positions.push("8");
    }

    else if (player_position == "9" && player == "X") {
        tic_tac_toe_board[2][2] = "X";
        occupied_positions.push("9");
    }

    else if (player_position == "1" && player == "O") {
        tic_tac_toe_board[0][0] = "O";
        occupied_positions.push("1");
    }

    else if (player_position == "2" && player == "O") {
        tic_tac_toe_board[0][1] = "O";
        occupied_positions.push("2");
    }

    else if (player_position == "3" && player == "O") {
        tic_tac_toe_board[0][2] = "O";
        occupied_positions.push("3");
    }

    else if (player_position == "4" && player == "O") {
        tic_tac_toe_board[1][0] = "O";
        occupied_positions.push("4");
    }

    else if (player_position == "5" && player == "O") {
        tic_tac_toe_board[1][1] = "O";
        occupied_positions.push("5");
    }

    else if (player_position == "6" && player == "O") {
        tic_tac_toe_board[1][2] = "O";
        occupied_positions.push("6");
    }

    else if (player_position == "7" && player == "O") {
        tic_tac_toe_board[2][0] = "O";
        occupied_positions.push("7");
    }

    else if (player_position == "8" && player == "O") {
        tic_tac_toe_board[2][1] = "O";
        occupied_positions.push("8");
    }

    else if (player_position == "9" && player == "O") {
        tic_tac_toe_board[2][2] = "O";
        occupied_positions.push("9");
    }

    return tic_tac_toe_board;
}

const check_win = () => {
    let tic_tac_toe_board = board();


    // Checking for a win for X in rows
    if (tic_tac_toe_board[0][0] == "X" && tic_tac_toe_board[0][1] == "X" && tic_tac_toe_board[0][2] == "X") {
        return "X";
    }

    else if (tic_tac_toe_board[1][0] == "X" && tic_tac_toe_board[1][1] == "X" && tic_tac_toe_board[1][2] == "X"){
    	return "X";
    }

    else if (tic_tac_toe_board[2][0] == "X" && tic_tac_toe_board[2][1] == "X" && tic_tac_toe_board[2][2] == "X"){
    	return "X";
    }


    // Checking For a win for X in column
    else if (tic_tac_toe_board[0][0] == "X" && tic_tac_toe_board[1][0] == "X" && tic_tac_toe_board[2][0] == "X"){
    	return "X";
    }

    else if (tic_tac_toe_board[0][1] == "X" && tic_tac_toe_board[1][1] == "X" && tic_tac_toe_board[2][1] == "X"){
    	return "X";
    }

    else if (tic_tac_toe_board[0][3] == "X" && tic_tac_toe_board[1][3] == "X" && tic_tac_toe_board[2][3] == "X"){
    	return "X";
    }

    // Checking For a win for X in diagonals
    else if (tic_tac_toe_board[0][0] == "X" && tic_tac_toe_board[1][1] == "X" && tic_tac_toe_board[2][2] == "X"){
    	return "X";
    }

    else if (tic_tac_toe_board[0][2] == "X" && tic_tac_toe_board[1][1] == "X" && tic_tac_toe_board[2][0] == "X"){
    	return "X";
    }


    // Checking for a win for O in rows
    if (tic_tac_toe_board[0][0] == "O" && tic_tac_toe_board[0][1] == "O" && tic_tac_toe_board[0][2] == "O") {
        return "X";
    }

    else if (tic_tac_toe_board[1][0] == "O" && tic_tac_toe_board[1][1] == "O" && tic_tac_toe_board[1][2] == "O"){
    	return "O";
    }

    else if (tic_tac_toe_board[2][0] == "O" && tic_tac_toe_board[2][1] == "O" && tic_tac_toe_board[2][2] == "O"){
    	return "O";
    }


    // Checking For a win for X in column
    else if (tic_tac_toe_board[0][0] == "O" && tic_tac_toe_board[1][0] == "O" && tic_tac_toe_board[2][0] == "O"){
    	return "O";
    }

    else if (tic_tac_toe_board[0][1] == "O" && tic_tac_toe_board[1][1] == "O" && tic_tac_toe_board[2][1] == "O"){
    	return "O";
    }

    else if (tic_tac_toe_board[0][3] == "O" && tic_tac_toe_board[1][3] == "O" && tic_tac_toe_board[2][3] == "O"){
    	return "O";
    }

    // Checking For a win for X in diagonals
    else if (tic_tac_toe_board[0][0] == "O" && tic_tac_toe_board[1][1] == "O" && tic_tac_toe_board[2][2] == "O"){
    	return "O";
    }

    else if (tic_tac_toe_board[0][2] == "O" && tic_tac_toe_board[1][1] == "O" && tic_tac_toe_board[2][0] == "O"){
    	return "O";
    }
}


const place = () => {
    let player = "X";
    let turn = document.getElementById("turn");

    console.log(turn)

    turn.innerHTML = "X's Turn";

    for (let i = 1; i < 10; i++) {
        let box = document.getElementById(`box${i}`);
        
        box.addEventListener("click", (e) => {
        	if (board(i, player) == "Already Occupied") {
            	return "Occupied";
            }

        	if (player == "X") {
                box.style = "background-image: url('./playerX.png')";
                board(`${i}`, "X");
                player = "O";
                turn.innerHTML = `${player}'s Turn`;
            }

            else if (player == "O") {
                box.style = "background-image: url('./playerO.png')";
                board(`${i}`, "O");
                player = "X";
                turn.innerHTML = `${player}'s Turn`;
            }

            if (check_win() == "X") {
               turn.innerHTML = `X Wins <a href="/">Play Again</a>`;
            	return "Game Ended";
            }

            else if (check_win() == "O") {
            	turn.innerHTML = `O Wins <a href="/">Play Again</a>`;
            	return "Game Ended";
            }


        })
    }
}

place();

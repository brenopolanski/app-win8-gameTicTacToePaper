// Description: Logic the game Tic Toe
// Version: 1.1
// Última atualização: 21/04/2013
// Author: Breno Polanski

// Variáveis
var turn = 1;
var old = 0;
var player = new Array();
player[1] = new Array();
player[2] = new Array();

// Início da lógica do game
$(document).ready(function () {
    $("td").click(function () {

        // O operador typeof retorna uma string indicando o tipo de um operando.
        // url: https://developer.mozilla.org/pt-BR/docs/JavaScript/Reference/Operators/typeof

        // Se o operando retornado do typeof for igual a indefinido, então:
        if (typeof $(this).attr("mark") == "undefined") {

            // O elemento html mark tem como função destacar um conteúdo

            // Adiciono ao elemento html "td" a classe player_1 ou player_2
            // Exemplo: <td class="player_1"></td>
            $(this).addClass("player_" + turn);

            // IMPORTANTE: O elemento html "mark" é atribuito dentro do elemento "td"
            // url: https://developer.mozilla.org/pt-BR/docs/HTML/Element/mark
            // Se dentro do elemento "td" existir um elemento "mark" é porque ele já foi marcado por X ou O

            /*
				EXEMPLO:

				<table>
					<tr>
						<td data-number="1" class="player_1"><mark>1</mark></td>
						<td data-number="2"></td>
						<td data-number="3" class="player_2"><mark>2</mark></td>
						<td data-number="4" class="snap_a"></td>
						<td data-number="5" class="snap_a"></td>
					</tr>
				</table>
			*/
            $(this).attr("mark", turn);

            // player[][] recebe o data-number
            // Verifo qual data-number foi clicado 1,2,3,4... etc.
            // Então meu array multidimensional player[][] recebe o data-number que foi selecionado
            player[turn][player[turn].length] = Number($(this).data("number"));
            // url: http://api.jquery.com/data/
            $(this).data("number", "");
            checkWin(turn);
            turn = turn == 1 ? 2 : 1;
            old += 1;
            oldD(old);
        }
    });
});

/*
* Função checkWin
* Verifica quem foi o vencedor
* @param turn valor que corresponde ao player 1 ou player 2
*/
function checkWin(turn) {
    if (player[turn].length >= 3) {
        for (i = 0; i < player[turn].length; i++) {
            // indexOf retorna a primeira ocorrência do valor especificado, a partir do primeiro índice. Retorna -1 se o valor não for encontrado
            // url: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/indexOf
            if ((player[turn].indexOf(player[turn][i] + 1) >= 0 && player[turn].indexOf(player[turn][i] + 2) >= 0)
				|| (player[turn].indexOf(player[turn][i] + 6) >= 0 && player[turn].indexOf(player[turn][i] + 12) >= 0)
				|| (player[turn].indexOf(player[turn][i] + 5) >= 0 && player[turn].indexOf(player[turn][i] + 10) >= 0)
				|| (player[turn].indexOf(player[turn][i] + 4) >= 0 && player[turn].indexOf(player[turn][i] + 8) >= 0)
				|| (player[turn].indexOf(player[turn][i] + 1) >= 0 && player[turn].indexOf(player[turn][i] + 2) >= 0)) {
                // Alerta do player que ganhou
                $('span.player-win').html('<img src="images/player_' + turn + '.png" id="player">');
                setTimeout(function () {
                    resetGame();
                }, 3000);
                break;
            }
        }
    }
}

/*
* Função oldD
* Deu velha...  :)
*/
function oldD(old) {
    if (old == 9) {
        $('div.smile').remove('.smile-win');
        $('div.smile').html('<img src="images/smile-ops.png" id="smile-ops" alt="Smile Ops">');
    }
}

/*
* Função resetGame
* Reseta Game para um novo jogo
*/
function resetGame() {
    this.document.location = this.document.location;
}
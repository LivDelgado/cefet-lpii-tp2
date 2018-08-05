$( document ).ready(function(){
    $("#button-menu").sideNav();
    $('select').material_select();
});

function sortTableASC() {
    alert("Função para ordenar a coluna de forma crescente");
}

function sortTableDESC() {
    alert("Função para ordenar a coluna de forma decrescente");
}

// método para efetuar o redirecionamento para a tela de check-in
function forwardCheckIn(ANroQuarto) {
    // envia a requisição para o servlet
    $.ajax({
        url: "http://localhost:8080/cefet-lpii-tp2/check-in",
        type: "POST",
        // manda como parâmetro de operação 1 --> salvar o nroQuarto e forward para a tela de check-in
        data: "operacaoRegistro=1" + "&nroQuarto="+ANroQuarto,
        success: function(data) {
            window.location.replace("http://localhost:8080/cefet-lpii-tp2/view/checkin.jsp");
        },
        error: function(data) {
            if (data.mensagem === null) {
                    alert("Não foi possível executar a operação");
            } else {
                    alert(data.mensagem);
            }
        }
    });
}

// método para efetuar o redirecionamento para a tela de detalhes da conta
function forwardAccountDetails(ANroQuarto) {
    // envia a requisição para o servlet
    $.ajax({
        url: "http://localhost:8080/cefet-lpii-tp2/detalhes-da-conta",
        type: "POST",
        data: "operacaoRegistro=1" + "&nroQuarto="+ANroQuarto,
        success: function(data) {
            window.location.replace("http://localhost:8080/cefet-lpii-tp2/view/conta-detalhes.jsp");
        },
        error: function(data) {
            if (data.mensagem === null) {
                    alert("Não foi possível executar a operação");
            } else {
                    alert(data.mensagem);
            }
        }
    });
}

// método para efetuar o redirecionamento para a tela de checkout
function forwardCheckOut(ANroQuarto) {
    // envia a requisição para o servlet
    $.ajax({
        url: "http://localhost:8080/cefet-lpii-tp2/detalhes-da-conta",
        type: "POST",
        data: "operacaoRegistro=2" + "&nroQuarto="+ANroQuarto,
        success: function(data) {
            window.location.replace("http://localhost:8080/cefet-lpii-tp2/view/checkout.jsp");
        },
        error: function(data) {
            if (data.mensagem === null) {
                    alert("Não foi possível executar a operação");
            } else {
                    alert(data.mensagem);
            }
        }
    });
}
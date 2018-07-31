$( document ).ready(function(){
    $("#button-menu").sideNav();
    $('select').material_select();
    $('.modal').modal();
});

function sortTableASC() {
    alert("Função para ordenar a coluna de forma crescente");
}

function sortTableDESC() {
    alert("Função para ordenar a coluna de forma decrescente");
}

//
// INSERÇÃO DE ITEM
//

// método para gravação dos dados inseridos
function saveInsertDialog () {
	// a var dados contém os dados dos inputs no formulário
	var dados = $( "#frmInsertItem" ).serialize();
	
	// envia a requisição pro servlet
	$.ajax({
		url: "http://localhost:8080/cefet-lpii-tp2/quarto",
		type: "POST",
		data: dados,
		success: function(data) {
			var rst = JSON.parse(data);
			alert(rst.mensagem);
		}
	});
}

// método para fechar o modal
function cancelInsertDialog () {
    $('#modal-add-item').modal('close');
}

//
// ALTERAÇÃO DOS DADOS DE UM ITEM
//

// método para exibir o modal com os dados
function showEditDialog (ANroQuarto) {
	// envia a requisição para o servlet
	$.ajax({
		url: "http://localhost:8080/cefet-lpii-tp2/quarto",
		type: "POST",
		// manda como parâmetro de operação 1 --> retornarDadosRegistro
		data: "operacaoItem=1" + "&nroQuarto="+ANroQuarto,
		success: function(responseText){
			// abre o modal
			$('#modal-edit-item').modal('open');
//			$('#frmEditItem').form('load', responseText);
			
			// modifica o valor dos inputs no formulário para os dados existentes
			$("#frmEditItem #nroQuarto").val(responseText.nroQuarto);
			$("#frmEditItem #nomCategoria").val(responseText.nomCategoria);
		}
	});
}

// método para gravação dos dados alterados
function saveEditDialog () { 
	var dados = $( "#frmEditItem" ).serialize();
	
	$.ajax({
		url: "http://localhost:8080/cefet-lpii-tp2/quarto",
		type: "POST",
		data: dados,
		success: function(data) {
			var rst = JSON.parse(data);
			alert(rst.mensagem);
		}
	});
}

// método para fechar o modal
function cancelEditDialog () {
    $('#modal-edit-item').modal('close');
}

//
// EXCLUSÃO DE ITEM
//

// método para exibir modal de exclusão
function showDeleteDialog (ANroQuarto) {
	$.ajax({
		url: "http://localhost:8080/cefet-lpii-tp2/quarto",
		type: "POST",
		data: "operacaoItem=1" + "&nroQuarto="+ANroQuarto,
		success: function(responseText){
			$('#modal-delete-item').modal('open');
			$("#frmDeleteItem #nroQuarto").val(responseText.nroQuarto);
		}
	});
}

// método para execução da exclusão
function executeDeleteDialog () {
	var dados = $( "#frmDeleteItem" ).serialize();
	
	$.ajax({
		url: "http://localhost:8080/cefet-lpii-tp2/quarto",
		type: "POST",
		data: dados,
		success: function(data) {
			var rst = JSON.parse(data);
			alert(rst.mensagem);
		}
	});
}

// método para fechar o modal
function cancelDeleteDialog () {
    $('#modal-delete-item').modal('close');
}		
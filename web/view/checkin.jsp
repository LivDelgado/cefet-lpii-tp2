<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <!-- Mostra para o browser que o site é otimizado para mobile -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Check-in</title>

        <!-- CSS -->
        <!-- Google Icon Font -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Materialize CSS -->
        <link type="text/css" rel="stylesheet" href="../css/materialize/materialize.css"/>
        <link type="text/css" rel="stylesheet" href="../css/checkin.css"/>
    </head>
    
    <body>
        <header>
            <%@include file="menu.jsp"%>
        </header>

        <main>            
            <h4 class="title">Check-in</h4>
            
            <div id="container" class="row">
                <div class="col s9 search-box">
                    <div class="input-field">
                        <i class="material-icons prefix">search</i>
                        <label for="search">Buscar hóspede por... (selecione um campo ao lado)</label>
                        <input id="search" type="search">
                    </div>
                </div>
                
                <div class="col s3 select-box">
                    <div class="input-field">
                        <select>
                            <option value="1">CPF</option>
                            <option value="2">Nome</option>
                            <option value="3">Email</option>
                            <option value="4">Telefone</option>
                        </select>
                        <label>Filtro</label>
                    </div>
                </div>
            </div>
            
            <table class="striped">
                <thead>
                    <tr>
                        <th>
                            CPF
                        </th>
                        <th>
                            Nome
                            <a href="#"><i class="material-icons right table-icon-sort" onclick="sortTableDESC()">arrow_drop_down</i></a>
                            <a href="#"><i class="material-icons right table-icon-sort" onclick="sortTableASC()">arrow_drop_up</i></a>
                        </th>
                        <th>
                            Email
                            <a href="#"><i class="material-icons right table-icon-sort" onclick="sortTableDESC()">arrow_drop_down</i></a>
                            <a href="#"><i class="material-icons right table-icon-sort" onclick="sortTableASC()">arrow_drop_up</i></a>
                        </th>
                        <th>
                            Telefone                        
                        </th>
                        <th><center>Ações</center></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>568.856.143-27</td>
                        <td>Bruna Duarte</td>
                        <td>bruduarte@gmail.com</td>
                        <td>(31)98606-0045</td>
                        <td>
                            <center>
                                <input name="radio-group" type="radio" id="hospede1"/>
                                <label for="hospede1">Selecionar hóspede</label>
                            </center>    
                        </td>
                    </tr>
                    <tr>
                        <td>462.869.375-27</td>
                        <td>Florence Welch</td>
                        <td>florence@gmail.com</td>
                        <td>(31)99009-9900</td>
                        <td>
                            <center>
                                <input name="radio-group" type="radio" id="hospede2"/>
                                <label for="hospede2">Selecionar hóspede</label>
                            </center>    
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div id="container">
                <div class="row">
                    <div class="col s12 form-input">
                        <div class="input-field">
                            <i class="material-icons prefix">date_range</i>
                            <label for="dias-estadia">Dias de estadia</label>
                            <input id="dias-estadia" type="number">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 form-input">
                        <div class="input-field">
                            <i class="material-icons prefix">wc</i>
                            <label for="qtd-adultos">Quantidade de adultos</label>
                            <input id="qtd-adultos" type="number">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 form-input">
                        <div class="input-field">
                            <i class="material-icons prefix">face</i>
                            <label for="qtd-criancas">Quantidade de crianças</label>
                            <input id="qtd-criancas" type="number">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card-action right-align button-box">
                <button id="checkin-button" class="btn waves-effect waves-light" onclick="checkin()"><i class="material-icons left">person_add</i>Check-in</button>
            </div>
        </main>

        <footer>
            <div class="footer-copyright">
                <div class="container">
                    Feito com  <i class="tiny material-icons">favorite_border</i> por estudantes do CEFET-MG
                </div>
            </div>
        </footer>
        
        <!--  Script -->
        <!-- Import jQuery before Materialize JS  -->
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="../js/materialize/materialize.js"></script>
        <script type="text/javascript" src="../js/checkin.js"></script>
    </body>
</html>
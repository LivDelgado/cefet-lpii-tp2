<%@page import="br.cefetmg.inf.model.login.AcessoPrograma"%>
<%
    AcessoPrograma acesso = new AcessoPrograma();
    String codCargo = (String)request.getSession().getAttribute("codCargo");
    String codUsuario = (String)request.getSession().getAttribute("codUsuario");
    String nomePagina = (String)request.getParameter("nomePagina");

    boolean acessoPermitido =
            acesso.temAcessoPagina(codUsuario, codCargo, nomePagina);

    if (!acessoPermitido) {
        request.setAttribute("mensagemAcessoNegado", "N�o � permitido o acesso a essa p�gina");
        request.getRequestDispatcher("/view/visualizacaoEstadoQuartos.jsp").forward(request, response);
    }
    
%>

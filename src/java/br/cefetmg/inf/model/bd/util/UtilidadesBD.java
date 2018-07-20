package br.cefetmg.inf.model.bd.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

public final class UtilidadesBD {
    
    private static Connection con = new ConnectionFactory().getConnection();

    public static int contaLinhasResultSet(ResultSet rs) throws SQLException {
        rs.last();
        int nroLinhas = rs.getRow();

        return nroLinhas;
    }

    public static String stringParaSHA256(String senha) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        MessageDigest ALGORITMOSHA256 = MessageDigest.getInstance("SHA-256");

        byte messageDigestSenhaAdmin[] = ALGORITMOSHA256.digest(senha.getBytes("UTF-8"));

        StringBuilder hexStringSenhaAdmin = new StringBuilder();
        for (byte b : messageDigestSenhaAdmin) {
            hexStringSenhaAdmin.append(String.format("%02X", 0xFF & b));
        }
        String senhaEmSHA256 = hexStringSenhaAdmin.toString();

        return senhaEmSHA256;
    }

    public static boolean verificaSenha(String senha, String senhaConvertida) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        return senhaConvertida.equals(stringParaSHA256(senha));
    }
}

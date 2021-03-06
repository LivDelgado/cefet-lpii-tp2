package br.cefetmg.inf.model.pojo.rel;

public class QuartoHospedagem {
    private int seqHospedagem;
    private int nroQuarto;
    private int nroAdultos;
    private int nroCriancas;
    private Double vlrDiaria;

    public QuartoHospedagem(int seqHospedagem, int nroQuarto, int nroAdultos, int nroCriancas, Double vlrDiaria) {
        this.seqHospedagem = seqHospedagem;
        this.nroQuarto = nroQuarto;
        this.nroAdultos = nroAdultos;
        this.nroCriancas = nroCriancas;
        this.vlrDiaria = vlrDiaria;
    }

    public int getSeqHospedagem() {
        return seqHospedagem;
    }

    public void setSeqHospedagem(int seqHospedagem) {
        this.seqHospedagem = seqHospedagem;
    }

    public int getNroQuarto() {
        return nroQuarto;
    }

    public void setNroQuarto(int nroQuarto) {
        this.nroQuarto = nroQuarto;
    }

    public int getNroAdultos() {
        return nroAdultos;
    }

    public void setNroAdultos(int nroAdultos) {
        this.nroAdultos = nroAdultos;
    }

    public int getNroCriancas() {
        return nroCriancas;
    }

    public void setNroCriancas(int nroCriancas) {
        this.nroCriancas = nroCriancas;
    }

    public Double getVlrDiaria() {
        return vlrDiaria;
    }

    public void setVlrDiaria(Double vlrDiaria) {
        this.vlrDiaria = vlrDiaria;
    }
}

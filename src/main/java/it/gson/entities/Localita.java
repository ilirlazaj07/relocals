/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package it.gson.entities;

/**
 *
 * @author Admin
 */
public class Localita {

    public Localita(String nome) {
        this.nomeLocalita = nome;
    }
    private String nomeLocalita;

    /**
     * @return the nomeLocalita
     */
    public String getNomeLocalita() {
        return nomeLocalita;
    }

    /**
     * @param nomeLocalita the nomeLocalita to set
     */
    public void setNomeLocalita(String nomeLocalita) {
        this.nomeLocalita = nomeLocalita;
    }
}

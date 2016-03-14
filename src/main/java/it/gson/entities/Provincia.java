/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package it.gson.entities;

import java.util.List;


public class Provincia {
    
    private String nomeProvincia;
    private List<Localita> listaLocalita;

  
    public String getNomeProvincia() {
        return nomeProvincia;
    }

   
    public void setNomeProvincia(String nomeProvincia) {
        this.nomeProvincia = nomeProvincia;
    }

   
    public List<Localita> getListaLocalita() {
        return listaLocalita;
    }

   
    public void setListaLocalita(List<Localita> listaLocalita) {
        this.listaLocalita = listaLocalita;
    }
    
}

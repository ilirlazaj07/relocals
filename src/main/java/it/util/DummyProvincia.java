/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package it.util;

import it.gson.entities.Localita;
import it.gson.entities.Provincia;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Admin
 */
public class DummyProvincia {
    
    private static List<Provincia> listaProvincie;
    
    static {
        Provincia prov1 = new Provincia();
        prov1.setNomeProvincia("BG");
        Localita loc1_1 = new Localita("ALBINO");
        Localita loc1_2 = new Localita("ANDREA SAN MARTINO");
        Localita loc1_3 = new Localita("ANDREA SAN ROCCO");
        List<Localita> listaLocalita1 = new ArrayList<Localita>();
        listaLocalita1.add(loc1_1);
        listaLocalita1.add(loc1_2);
        listaLocalita1.add(loc1_3);
        prov1.setListaLocalita(listaLocalita1);
        Provincia prov2 = new Provincia();
        prov2.setNomeProvincia("CO");
        Localita loc2_1 = new Localita("ALBAVILLA");
        Localita loc2_2 = new Localita("ALBIOLO");
        Localita loc2_3 = new Localita("ALSERIO");
        Localita loc2_4 = new Localita("ARGEGNO");
        List<Localita> listaLocalita2 = new ArrayList<Localita>();
        listaLocalita2.add(loc2_1);
        listaLocalita2.add(loc2_2);
        listaLocalita2.add(loc2_3);
        listaLocalita2.add(loc2_4);
        prov2.setListaLocalita(listaLocalita2);
        
        listaProvincie = new ArrayList<Provincia>();
        listaProvincie.add(prov1);
        listaProvincie.add(prov2);
    }
    
    public static List<Provincia> getProvincie() {
        return listaProvincie;        
    }
}

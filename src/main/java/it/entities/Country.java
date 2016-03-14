/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package it.entities;

/**
 *
 * @author Ilir
 */
public class Country {

    public Country() {
    }
    
    private String countryCode;
    private String countryName;
    private String continent;
    private int gnp;

    /**
     * @return the countryCode
     */
    public String getCountryCode() {
        return countryCode;
    }

    /**
     * @param countryCode the countryCode to set
     */
    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    /**
     * @return the countryName
     */
    public String getCountryName() {
        return countryName;
    }

    /**
     * @param countryName the countryName to set
     */
    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    /**
     * @return the continent
     */
    public String getContinent() {
        return continent;
    }

    /**
     * @param continent the continent to set
     */
    public void setContinent(String continent) {
        this.continent = continent;
    }

    /**
     * @return the gnp
     */
    public int getGnp() {
        return gnp;
    }

    /**
     * @param gnp the gnp to set
     */
    public void setGnp(int gnp) {
        this.gnp = gnp;
    }
}

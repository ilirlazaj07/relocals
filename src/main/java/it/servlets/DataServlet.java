/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package it.servlets;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import conn.ConnectionFac;
import conn.Test;
import it.util.DummyProvincia;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Ilir Lazaj
 */
public class DataServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("Evocato GET ");

        /*
         PrintWriter writer = response.getWriter();
         response.setContentType("text/plain");
         Gson gson = new Gson();
         JsonObject myObj = new JsonObject();
         JsonElement je =
         gson.toJsonTree(DummyProvincia.getProvincie());
         writer.println(je);
         System.out.println(je.toString());
         writer.close();
         */
        String url = "/home.jsp";
        request.setAttribute("utente", "testo");
        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(url);
        dispatcher.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String currPassword = request.getParameter("cpass");
        System.out.println("current pass: " + currPassword);
        String newPassword = request.getParameter("npass");
        PrintWriter pw = response.getWriter();
        Gson gson = new Gson();
        JsonObject myObj = new JsonObject();
        JsonElement je = gson.toJsonTree("STRINGA");
        if (checkPassword(currPassword)) {
            myObj.addProperty("success", true);
            myObj.add("mystring", je);
            pw.println(myObj.toString());
        } else {
            System.out.println("Non è vera");
            myObj.addProperty("success", false);
            myObj.add("mystring", je);
            pw.println(myObj.toString());
        }

        pw.close();
    }

    private boolean checkPassword(String currentPassword) {
        Connection con = ConnectionFac.getConnection();
        String pass = null;
        try {
            Statement stm = con.createStatement();
            ResultSet rs = stm.executeQuery("select password from user where id_user = 1");

            rs.first();
            pass = rs.getString("password");


        } catch (SQLException ex) {
            Logger.getLogger(Test.class.getName()).log(Level.SEVERE, null, ex);
        }
        return currentPassword.equals(pass);
    }
}

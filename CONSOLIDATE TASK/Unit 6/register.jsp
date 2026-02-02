<%@ page contentType="text/html;charset=UTF-8" %>

<%
String username = request.getParameter("username");
String email = request.getParameter("email");
%>

<h2>You have registered your account successfully.</h2>

<p>Username: <%= username %></p>
<p>Email: <%= email %></p>

<a href="events.html">Go to Events Page</a>
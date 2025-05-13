1. main.jsx------> Router-Setup
2. App.jsx ------> Haupt-Router-Komponente
3. MainLayout.jsx ----> Layout mit Navbar und Outlet
4. Navbar.jsx------> Navigationsleiste mit Links (Home, Creat Event &🔐 Login / Logout je nach Auth-Status  ) also muss useAuth benutzt 
5. AuthProvider/ AuthContext-----> useAuth
Stellt global zur Verfügung{ isAuthenticated, login(), logout()}✅ Wird um die App gelegt, damit alle Komponenten Zugriff auf Auth-Daten haben.
6. ProtectedRoute:  schützt Seiten, die nur für eingeloggte Nutzer sichtbar sein sollen (Nur eingeloggte Nutzer zugänglich sind, Wie "Create Event"-Seite. Die wird mit der ProtectedRoute-Komponente geschützt.) -----> Die Seite wird nur angezeigt, wenn der Nutzer eingeloggt ist.
7. Register: einen neuen Benutzer zu erstellen, bevor dieser sich einloggen kann , Der Benutzer gibt seine Informationen (z.B. E-Mail, Passwort) ein und registriert sich.
Wenn die Registrierung erfolgreich ist, wird der Benutzer zur Login-Seite weitergeleitet.
8. Login: Beim Login sendet der Benutzer seine E-Mail-Adresse und sein Passwort an den Server.
Wenn die Anmeldedaten korrekt sind, erhält der Benutzer ein JWT-Token (JSON Web Token) als Antwort.
Dieses Token wird dann verwendet, um den Benutzer bei weiteren Anfragen zu authentifizieren. Zum Beispiel könnte der Token bei API-Anfragen an den Server mitgeschickt werden, um zu bestätigen, dass der Benutzer authentifiziert ist.
9. Home-Seite anzeigen:
Der Benutzer wird auf die Home-Seite weitergeleitet, wenn der Login erfolgreich ist.
Auf der Home-Seite wird eine Liste von Events angezeigt, die der Benutzer ansehen kann. Dort kann er auch auf ein Event klicken, um zu dessen Detailseite zu gelangen.
- Ruft alle vorhandenen Events vom Backend ab (GET-Anfrage an /api/events).
- Jedes Event ist verlinkt zu seiner Detailansicht (/events/:id)
10. CreateEvent: eue Events zu erstellen. Sie enthält ein Formular mit den Feldern ... WICHTIG: Nur eingeloggte Benutzer mit gültigem API-Token können diese Seite aufrufen und Events erstellen.
- In der Navbar ist ein Link zu "/createEvent" eingebaut.
- Der Link erscheint nur, wenn der Nutzer eingeloggt ist (isAuthenticated).
- Die Route zur CreateEvent-Seite ist mit einer Protected Route abgesichert, sodass unautorisierte Benutzer die Seite nicht besuchen können.
11. EventDetalis: Unterseite von dem Event
- zeigt die detaillierten Informationen eines einzelnen Events, basierend auf der ID aus der URL.
- Holt die Event-ID mit useParams, Holt die Event-ID mit useParams ...


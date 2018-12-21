# appli_gantt

1/ CREATION DE L'APPLICATION : 
J'ai commencée par crée l'application avec cordova en tapant la commande suivante dans le terminal :
	-cordova create appli_gantt

2/ CREATION DU REPOSITORY SUR GITUHB : 
J'ai effectuée un nouveau depot git qui se nomme 'appli_gantt'.

3/ CREATION DE LA MAQUETTE VERSION 1 ET VERSION 2 :
J'ai réalisée une première maquette pour le formulaire d'ajout des taches. Ensuite j'ai enchainée avec la deuxième maquette de l'affichage des la liste des taches enregistrées.

4/ j'ai travaillé le html et le css pour afficher mon formulaire sur ma page d'acceuil de cordova sans qu'il soit encore fonctionnel.

5/ j'ai fait ma base de donnée via cordova:
	
    function populateDB(tx) 
    {
        tx.executeSql('DROP TABLE IF EXISTS GANTT');
        tx.executeSql('CREATE TABLE IF NOT EXISTS GANTT (id unique, nom, date_début, durée )');
        tx.executeSql('INSERT INTO GANTT (id, nom, date_début, durée) VALUES (1, "créer une application",  18/12/2018, "deux jours")');
        // tx.executeSql('INSERT INTO GANTT (id, nom, date_début, durée) VALUES (2, "Second row")');
    }
    
    function errorCB(err) 
    {
        alert("Error processing SQL: "+err.code);
    }
    
    function successCB() {
        alert("success!");
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
  
Il m'affiche bien l'alert : SUCCES. 

document.addEventListener("deviceready", onDeviceReady, false);

var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
var appli = "id, nom, date_debut, duree";
var nom;
var date_debut;
var duree;

function onDeviceReady() 
{
   db.transaction(populateDB, errorCB, successCB);
}


function populateDB(tx) 
{
    // tx.executeSql('CREATE TABLE IF EXISTS Gantt; 
    tx.executeSql('CREATE TABLE IF NOT EXISTS Gantt (id, nom, date_début, durée )');
}
    
function errorCB(err) 
{
    alert("Error processing SQL: "+err.code);
}
    
function successCB() 
{
    alert("success!");
}


function selectTable(tx)
{
  tx.executeSql('SELECT * FROM Gantt', [], function(tx, result)
  {
      console.log(result.rows);
  })
}

$('#bouton').click(function()
{
   document.location.href="http://localhost:8000/tableau.html";
//    alert("je lis la console");
   nom = $("#nom").val();
   date_debut = $("#date").val();
   duree = $("#time").val();
//    var array= [];

    // var table = array.push("nom", "date_debut", "duree");


    function dispAll(tx)
    {
          tx.executeSql('SELECT * FROM Gantt;', [], function(tx, result)
          {
              tache = result.rows;
              console.log(tache);
              for (i=0; i<tache.length; i++) 
              {
                  
                   $("#table").append("<tr>"+
                       "<th scope='col'>" + tache[i].id + "</th>"+
                       "<td scope='col'>" + tache[i].nom + "</td>"+
                       "<td scope='col'>" + tache[i].debut + "</td>"+
                       "<td scope='col'>" + tache[i].duree + "</td></tr>")
                   
              }
          })};
   
//    console.log(nom);
//    console.log(date_debut);
//    console.log(duree);
   
//    alert("j'ai remplis mes variables");
   db.transaction(insert, errorCB, successCB);
//    alert("j'ai insert into");
   db.transaction(selectTable, errorCB, successCB);
//    alert("je select *");
//    document.location.href="http://localhost:8000/tableau.html";
});


function insert(tx)
{
   console.log(nom);
   console.log(date_debut);
   console.log(duree);
   
   tx.executeSql('INSERT INTO Gantt (id, nom, date_debut, duree) VALUES (1, "' + nom + '", "'+ date_debut + '", "'+ duree +'", "")');
}



   
    




/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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
   

app.initialize();



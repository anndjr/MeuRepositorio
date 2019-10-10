// Função p/ replicamento de Trs e tds desativada
// function EspacamentoTabela(){
//       var tblVarivel = document.getElementById("TblEspacamento")
//       for (i=0; i<6; i++){
//          var tr = document.createElement('tr');
//          tblVarivel.appendChild(tr);

//          for(j=0; j<6; j++){
//             var td = document.createElement('td');
//             tblVarivel.appendChild(td);
//             }}};
//          EspacamentoTabela();

function criandoTable(){
        var body = document.body,
            tbl  = document.createElement('table');
        // tbl.style.width  = '100px';
        // tbl.style.border = '1px solid black';
    
        for(var i = 0; i < 6; i++){
            var tr = tbl.insertRow();
            for(var j = 0; j < 6; j++){
                
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode('Cell'));
                    td.style.border = '1px solid black';
                    
                    
                
            }
        }
        body.appendChild(tbl);
    }
    tableCreate();
    


   




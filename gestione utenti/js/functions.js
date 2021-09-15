function cambiaColoreTabella(codiceColore){

   document.getElementById('tabellaUtenti').className = 'table ' 
   + codiceColore + ' table-striped table-hover';
}

function chiamaServizioUtenti(){
  


}

function mostraNascondiTabella(){
  let tabella = document.getElementById('tabellaUtenti');

  //webservice = REST e SOAP ->

  //protocollo HTTP - GET POST PUT PATCH DELETE -> JSON - XML - HTML
  if (tabella.style.visibility === "hidden") {
   tabella.style.visibility = "visible";

   document.getElementById('lblSwitch').textContent = 'Nascondi tabella';
   //modificare la label che deve scrivere mostra tabella
 } else {
   tabella.style.visibility = "hidden";
    //modificare la label che deve scrivere mostra tabella
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        console.log(data);
      }
    });
         
    document.getElementById('lblSwitch').textContent = 'Mostra tabella';
 }
}

$(function(){
  $("#paragrafo").on("click",
    function(){
      $(this).hide();
    }
  );

  $("#fabrizio").hover(function(){
      $(this).css("color" , "red");
  },function(){    
    $(this).css("color" , "black");
  })

  $("#bottone").on(

    {
      mouseenter:function(){
      $(this).css("color" , "red");
    }
  },
    {mouseleave: function(){
    $(this).css("color" , "black");
  }});
 
  $("#bottone").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });

  $("#btnList").click(function(){
   

    let tr = $("<tr></tr>");
    
    let td1 = $("<td></td>").text($("#nome").val());
    let td2 = $("<td></td>").text($("#cognome").val());
    let td3 = $("<td></td>").text($("#sesso").val());
    let tdIcon = $("<td><i class='far fa-trash-alt'></i></td>");
    tr.append(th,td1,td2,td3,tdIcon);
    $("#bodyTable").append(tr);
  });

  $(document).on("click", ".fa-trash-alt", function(){
    $(this).closest("tr").remove();
    
  })
  //CHIAMATE AJAX
//CON  JQUERY
  /*$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      //let users = JSON.parse(data)
      console.log(data);
      let utenti = data.results;
      $each(utenti, function(index, utente)
      {
        let tr = $("<tr></tr>");
        let td1 = $("<td></td>").text(utente.id.name);
        let td2 = $("<td></td>").text(utente.id.name);
      }
      
      );
     
    },
    error: function(data){
      console.error(data);
    }
  });
  

  */
  
  
        

 
  fetch('https://randomuser.me/api/?results=10').then(
    
          function(data){
            return data.json();
          }
       
    
  ).then(
        (result) => {
            let utenti = result.results;
            console.log(utenti);
            return utenti.map(function(utente){
              let tBody = document.getElementById('bodyTable');
                let tr = document.createElement('tr');
                let tdImg = document.createElement('td');
                let img = document.createElement('img');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                img.src = utente.picture.medium;
               
                td1.innerHTML = utente.name.first + ' ' + utente.name.last;
                td2.innerHTML = utente.email;
                td3.innerHTML = utente.gender;
                td4.innerHTML = "<td><i class='far fa-trash-alt'></i></td>";
                tdImg.appendChild(img);
                tr.append(tdImg,td1,td2,td3,td4);
                tBody.appendChild(tr);
            });




        }
  ).then(
     (arrayMap) => console.log('array restituto da funzione map' + arrayMap)
  )

});



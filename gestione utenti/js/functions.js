function cambiaColoreTabella(codiceColore){

   document.getElementById('tabellaUtenti').className = 'table ' 
   + codiceColore + ' table-striped table-hover';
}


function mostraNascondiTabella(){
  let tabella = document.getElementById('tabellaUtenti');

  if (tabella.style.visibility === "hidden") {
   tabella.style.visibility = "visible";

   document.getElementById('lblSwitch').textContent = 'Nascondi tabella';
   //modificare la label che deve scrivere mostra tabella
 } else {
   tabella.style.visibility = "hidden";
    //modificare la label che deve scrivere mostra tabella
   
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

  
});



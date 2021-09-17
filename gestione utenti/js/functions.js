function cambiaColoreTabella(codiceColore) {

  document.getElementById('tabellaUtenti').className = 'table '
    + codiceColore + ' table-striped table-hover';
}

function chiamaServizioUtenti() {



}

function mostraNascondiTabella() {
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
      success: function (data) {

      }
    });

    document.getElementById('lblSwitch').textContent = 'Mostra tabella';
  }
}

$(function () {
  $("#paragrafo").on("click",
    function () {
      $(this).hide();
    }
  );

  $("#fabrizio").hover(function () {
    $(this).css("color", "red");
  }, function () {
    $(this).css("color", "black");
  })

  $("#bottone").on(

    {
      mouseenter: function () {
        $(this).css("color", "red");
      }
    },
    {
      mouseleave: function () {
        $(this).css("color", "black");
      }
    });

  $("#bottone").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    }
  });

  $("#btnList").click(function () {


    let tr = $("<tr></tr>");

    let td1 = $("<td></td>").text($("#nome").val());
    let td2 = $("<td></td>").text($("#cognome").val());
    let td3 = $("<td></td>").text($("#sesso").val());
    let tdIcon = $("<td><i class='far fa-trash-alt'></i></td>");
    tr.append(th, td1, td2, td3, tdIcon);
    $("#bodyTable").append(tr);
  });

  $(document).on("click", ".fa-trash-alt", function () {
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
  


  
var sleep = time => new Promise(resolve => setTimeout(resolve, time))

sleep(1000).then(
  () => console.log('ciao')
)
/*
var poll = (promiseFn, time) => promiseFn().then(
             sleep(time).then(() => poll(promiseFn, time)))

// Greet the World every second
poll(() => new Promise(() => console.log('Hello World!')), 1000)
        

 */

$("#numRisultati").on('change' , function(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=' + $('#numRisultati').val() + '&seed=fabriziopititto',
    dataType: 'json',
    success: function(data) {
      //let users = JSON.parse(data)
      console.log(data);
      $('#bodyTable').empty();
      let utenti = data.results;
      let currentPage = data.info.page;
      $('#currentPage').val(currentPage);
      $.each(utenti, function(index, utente)
      {
       renderTable(utente);


      }
      
      );
     
    },
    error: function(data){
      console.error(data);
    }
  });

})


  function renderTable(utente) {
    let tBody = document.getElementById('bodyTable');
    let tr = document.createElement('tr');
    let tdImg = document.createElement('td');
    let img = document.createElement('img');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let panel = document.createElement('div');
    panel.id="panel";
   
    img.src = utente.picture.medium;

    td1.innerHTML = utente.name.first + ' ' + utente.name.last;
    td2.innerHTML = utente.email;
    td3.innerHTML = utente.gender;
    td4.innerHTML = "<td><i class='far fa-trash-alt'></i></td>";
    tdImg.appendChild(img);
    tr.append(tdImg, td1, td2, td3, td4);
    tBody.append(tr,panel);
    
    
  }

  $(document).on('click', 'tr',function(){
    console.log($(this).siblings().first('#panel'));
    $($(this).siblings().first('#panel')).slideToggle("slow");
  });
  function renderPagination(){
   
    $('.pagination').append($("<li class='page-item' id='prevLI'></li>"));
   
    $(document).find('#prevLI').append($("<a  class='page-link' href=#></a>").text('Previous'));
   
    
   
    for( i = 1; i <= 10; i++){
     
      $('.pagination').append($("<li class='page-item'><a  class='page-link' href=#>"+ 
       i +"</a></li>"));
      
    }
    $('.pagination').append($("<li class='page-item' id='nextLI'></li>"));
    $(document).find('#nextLI').append($("<a class='page-link' href=#></a>").text('Next'));
   
  }
 
  renderPagination();

  $(document).on('click' , '.page-link', function(e){
    let numPage;
   e.preventDefault();
    if($(this).text() === 'Next'){
      numPage = parseInt($('#currentPage').val()) + 1
    }else if  ($(this).text() === 'Previous'){
      numPage =  parseInt($('#currentPage').val()) - 1 > 0 ?  parseInt($('#currentPage').val()) - 1 : 1;
    }else{
      numPage = $(this).text() ;
    }
   fetch('https://randomuser.me/api/?page=' + numPage + '&results= ' + $('#numRisultati').val() + '&seed=fabriziopititto',).then(

    function (data) {
      return data.json();
    }


  ).then(
    (result) => {
      $('#bodyTable').empty();
      let utenti = result.results;
     
      let currentPage = result.info.page;
      $('#currentPage').val(currentPage);
      return utenti.map(function (utente) {
        renderTable(utente);
      });
    }
  )

  })
  $('#search').on('click', function (e) {
    e.preventDefault();
    if($('#inputSearch').val().trim() !== ''){
    let rows = $('#bodyTable').children('tr');
   
    var rowArray = Array.prototype.slice.call(rows);


    let filtered = rowArray.filter(row =>
      row.childNodes[1].textContent.includes($('#inputSearch').val().trim())
    );
 
    $('#bodyTable').empty();
    filtered.forEach((input) => $('#bodyTable').append(input));
    }
  });




  fetch('https://randomuser.me/api/?results=10&seed=fabriziopititto').then(

    function (data) {
      return data.json();
    }


  ).then(
    (result) => {
      let utenti = result.results;
      console.log(utenti);
      let currentPage = result.info.page;
      $('#currentPage').val(currentPage);

      return utenti.map(function (utente) {
        renderTable(utente);
      });
    }
  )
});



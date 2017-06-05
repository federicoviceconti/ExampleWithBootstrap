function dynamicResponse(){
  var ajaxResponse = {
    status: 200,
    items: [
      {
        name: "Trita",
        imgPath: "https://cdn1.deliveroo.co.uk/media/menus/20218/360x180.jpg?v=1485770486",
        description: "Lorem ipsum docet e il resto che non ricordo, asdfghjk qpwoeqiwe"
      },
      {
        name: "California Bakery",
        imgPath: "https://cdn1.deliveroo.co.uk/media/menus/24164/360x180.jpg?v=1473859229",
        description: "Lorem ipsum, asdfghjk qpwoeqiwe, parte 2 docet e il resto che non ricordo"
      },
      {
        name: "Temptation Island",
        imgPath: "https://cdn1.deliveroo.co.uk/media/menus/24538/360x180.jpg?v=1474541235",
        description: "Bello, buono... gustoso asdfghjk qpwoeqiwe asdfghjk qpwoeqiwe"
      },
      {
        name: "Gran Turismo",
        imgPath: "https://cdn1.deliveroo.co.uk/media/menus/24538/360x180.jpg?v=1474541235",
        description: "La pizzeria napolitaine de Belleville qui sent bon l’Italie, la pizza qui sort tout juste du four et le Spritz !"
      }
    ]
  };

  $.each(ajaxResponse.items, function(i, element){
    buildItem(element);
  });
}

function buildItem(element){
  console.log(element.imgPath);

  var div = $("<div/>").addClass("col-md-4 p20h p20w");
  var capt = $("<div/>").addClass("col-md-12 p20h");
  var name = $("<p/>").addClass("bold big").html(element.name);
  var desc = $("<p/>").addClass("").html(element.description);
  var imgs = $("<img/>").addClass("animated bounceIn col-md-12 dynamicElement").attr("src", element.imgPath);

  $(div).append(imgs);
  $(div).append(capt);
  $(capt).append(name);
  $(capt).append(desc);
  $("#itemsContainter").append(div);
}

function setup(){
  $(document).on("click", ".dynamicElement", function(){
    alert($(this).attr("src"));
  });
}

function animazionePazzerella(){
  $("img").click(function(){
    $("img").toggleClass("animated bounceIn");
  });
}

$(document).ready(function(){
  dynamicResponse();
  setup();
  animazionePazzerella();
});

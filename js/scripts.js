$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var count = parseInt($("#count").val());
    var multiple = parseInt($("#multiple").val());
    var result = 0;
    // console.log(count);
    // console.log(multiple);
    // for( multiple  ; multiple <= count ; multiple += count ){
    //   result *= multiple;
    //     alert("Total is: " + result);
    // }

    for(var currentNumber = multiple ; currentNumber <= count ; currentNumber += multiple ){
      result += multiple;
      alert("Total is: " + result);
    }


  });
});

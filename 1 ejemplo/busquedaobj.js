function checkObj(obj, checkProp) {
  
    // Cambia solo el código debajo de esta línea
    if (obj.hasOwnProperty(checkProp)){
      return obj.checkProp;
    };
   
    return "Not Found";
    // Cambia solo el código encima de esta línea
  }
  const checkObje={
    gift:"pony",
    pet:"kitten",
    bed:"sleigh"
  };
  
//   console.log(checkObj(checkObje,"gift"));

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  

  const gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);
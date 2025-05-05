function main(params) {

    console.log(JSON.stringify(params));
    
    const pets = [
      { id: 1, name: "Fluffy", species: "Cat" },
      { id: 2, name: "Spot",   species: "Dog" }
    ];

    let id =  (new URLSearchParams(params.__ow_query)).get("id");

    if (!id) {
        return /* all pets */ {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: pets 
        };
    }

    id = parseInt(id);
    const pet = pets.find(obj => obj.id === id);

    if (pet) {
        return /* pet */ {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: pet
        }
    }

    return /* 404 */  {
        statusCode: 404,
        headers: { "Content-Type": "application/json" },
        body: {"error": "Not found"}
    }
    
  }

  exports.main = main;
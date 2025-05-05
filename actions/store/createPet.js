function main(params) {
    
    let pet;
    try {
      pet = JSON.parse(atob(params.__ow_body) || "{}");
    } catch {
      return { statusCode: 400, body: { error: "Invalid JSON" } };
    }
  
    pet.id = Date.now();        // dummy id 
    
    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: pet
    };
  }

  exports.main = main;
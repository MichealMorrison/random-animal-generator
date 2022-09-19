//array to store earth species.
const earthSpecies = ['lion', 'elephant','cheeta','rhinoceros','leopard', 'gorilla','penguins', 'seals', 'albatross', 'monkey', 'panda', 'tiger', 'orangutan', 'leopard', 'cobra', 'kangaroo', 'koala','crocodile', 'dingo', 'platypus','lynx','reindeer', 'bison', 'bear','wold','moose', 'bobcat','liama', 'sloth', 'anaconda','jaguar'];
//array to store diet type
const typeOfDiets = ['carnivore', 'herbivore', 'omnivore'];
//array to store habitats
const habitat = ['wetlands', 'tundra', 'savanna', 'tropical rainforest', 'desert', 'artic', 'grassland', 'mountains', 'coast'];

//Define variable to store a random number
let randOne = 0;
let randTwo = 0;
//We are going to randomly choose two random animals from the earth species array
const animals = species => {
    //Produce a random number to select the first animal
    randOne = Math.floor(Math.random() * (species.length - 1));
    
    //Produce a random number to select the second animal
    randTwo = Math.floor(Math.random() * (species.length - 1));

    //This loop will run if the two random numbers are the same and will continue to run if they remain the same. This will prevent from having two of he same animals
    while(randOne === randTwo){
        randTwo = Math.floor(Math.random() * (species.length - 1));
    }
};

//randomly choose the new animals diet
const whatDoIEat = diet =>{
    let randnum = Math.floor(Math.random() * 2);
    return diet[randnum];
};

//randomly chooses the new animals habitat
const whereDoILive = animalHabitat =>{
    let randnum = Math.floor(Math.random() * 8);
    return animalHabitat[randnum];
};

//this will choose if the anmial is a prey or predator. This function will depend on the animals diet type
const whatAmI = (diet) =>{
    if(diet === 'carnivore'){
        return 'predator'
    }else if(diet === 'herbivor'){
        return 'prey'
    }else{
        return 'predator and prey'
    }
}

const newSpecies = (num1, num2,species) =>{
    let half1 = 0;
    let half2 = 0;
    
    //find out if the aminal's name has an even amount of charaters or not. 
    if(species[num1].length%2 === 0){
        // divid in half and subtract 1 to account for index
        half1 = (species[num1].length/2) - 1;
    }else{
        //divid in half and subtract 1 to account for index and round to nearest whole number. 
        half1 = Math.floor((species[num1].length/2) - 1);
    }

    if(species[num2].length%2 === 0){
        half2 = (species[num2].length/2) - 1;
    }else{
        half2 = Math.floor((species[num2].length/2) - 1);
    }

    let newname = '';
    //iterate through the first animals name and save it to new name variable
    for(let i = 0; i <= half1; i++){
        newname += species[num1][i];
    }

    //iterate through the second animals name and save it to new name variable
    for(let i = 0; i <= half2; i++){
        newname += species[num2][i];
    }

    //return new animal name
    return newname;
    
}

animals(earthSpecies);

console.log(newSpecies(randOne, randTwo, earthSpecies));
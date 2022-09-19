//array to store earth species.
const earthSpecies = ['lion', 'elephant','cheeta','rhinoceros','leopard', 'gorilla','penguins', 'seals', 'albatross', 'monkey', 'panda', 'tiger', 'orangutan', 'leopard', 'cobra', 'kangaroo', 'koala','crocodile', 'dingo', 'platypus','lynx','reindeer', 'bison', 'bear','wold','moose', 'bobcat','liama', 'sloth', 'anaconda','jaguar'];
//array to store diet type
const typeOfDiets = ['carnivore', 'herbivore', 'omnivore'];
//array to store habitats
const habitat = ['wetlands', 'tundra', 'savanna', 'tropical rainforest', 'desert', 'artic', 'grassland', 'mountains', 'coast'];

//randomly choose the new animals diet
const whatDoIEat = diet =>{
    let randnum = Math.floor(Math.random() * 3);
    return diet[randnum];
};

//randomly chooses the new animals habitat
const whereDoILive = animalHabitat =>{
    let randnum = Math.floor(Math.random() * 9);
    return animalHabitat[randnum];
};

const newSpecies = (species) =>{
    //Produce a random number to select the first animal
    let num1 = Math.floor(Math.random() * (species.length - 1));
    
    //Produce a random number to select the second animal
    let num2 = Math.floor(Math.random() * (species.length - 1));

    //This loop will run if the two random numbers are the same and will continue to run if they remain the same. This will prevent from having two of he same animals
    while(num1 === num2){
        num2 = Math.floor(Math.random() * (species.length - 1));
    }

    //These variables are to keep track of taking a piece of the species name. 
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

const animalCreater = (species, diet, habitat) =>{
    return{
        species:species,
        diet:diet,
        habitat:habitat,
        whatAmI (){
            if(this.diet === 'carnivore'){
                return 'predator'
            }else if(this.diet === 'herbivore'){
                return 'prey'
            }else{
                return 'predator and prey'
            }
        }
    }
};

let animalOne = animalCreater(newSpecies(earthSpecies), whatDoIEat(typeOfDiets), whereDoILive(habitat));

console.log(animalOne);
console.log(animalOne.whatAmI());

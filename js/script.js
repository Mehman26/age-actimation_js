var age = prompt('Ведите ваш возвраст');
var height = prompt('Ведите ваш рост в метрах');
var weight = prompt('Ведите ваш вес в килограмах');

var bodyWeightIndex = weight / (height * height);
var groupNumber;

if(age >= 18 && age <=25){
    var groupNumber = 1;
} else if( age >= 25 && age <= 46){
    var groupNumber = 2;
} else{
    var groupNumber = 3;
}

if(groupNumber === 1 && bodyWeightIndex < 17.5){
    alert('Ваш вес недостаточен для здоровья');
} else if(groupNumber === 1 && bodyWeightIndex >= 17.5 && bodyWeightIndex < 19.5){
    alert('Ваш вес слегка недостаточен для здоровья');
} else if(groupNumber === 1 && bodyWeightIndex >= 19.5 && bodyWeightIndex < 23){
    alert('Ваш вес нормальный');
} else if(groupNumber === 1 && bodyWeightIndex >= 23 && bodyWeightIndex < 27.5){
    alert('Ваш вес излищний');
} else if(groupNumber === 1 && bodyWeightIndex >= 27.5 && bodyWeightIndex < 30){
    alert('Ожирение 1 степени');
} else if(groupNumber === 1 && bodyWeightIndex >= 30 && bodyWeightIndex < 35){
    alert('Ожирение 2 степени');
} else if(groupNumber === 1 && bodyWeightIndex >= 35 && bodyWeightIndex < 40){
    alert('Ожирение 3 степени');
} else if(groupNumber === 1 && bodyWeightIndex >= 40){
    alert('Ожирение 4 степени');
} else if(groupNumber === 2 && bodyWeightIndex < 18){
    alert('Ваш вес недостаточен для здоровья');
} else if(groupNumber === 2 && bodyWeightIndex >= 18 && bodyWeightIndex < 20){
    alert('Ваш вес слегка недостаточен для здоровья');
} else if(groupNumber === 2 && bodyWeightIndex >= 20 && bodyWeightIndex < 26){
    alert('Ваш вес нормальный');
} else if(groupNumber === 2 && bodyWeightIndex >= 26 && bodyWeightIndex < 28){
    alert('Ваш вес излищний');
} else if(groupNumber === 2 && bodyWeightIndex >= 28 && bodyWeightIndex < 31){
    alert('Ожирение 1 степени');
} else if(groupNumber === 2 && bodyWeightIndex >= 31 && bodyWeightIndex < 36){
    alert('Ожирение 2 степени');
} else if(groupNumber === 2 && bodyWeightIndex >= 36 && bodyWeightIndex < 41){
    alert('Ожирение 3 степени');
} else if(groupNumber === 2 && bodyWeightIndex >= 41){
    alert('Ожирение 4 степени');
} else if( groupNumber === 3){
    alert('Нет данных для вашего возвраста');
}
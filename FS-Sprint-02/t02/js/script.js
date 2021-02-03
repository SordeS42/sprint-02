let animal = prompt("What animal is the superhero most similar to?");
let x = /^[a-z, A-Z]\D*$/;
if (x.exec(animal) != null && animal.length <= 20) {
    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    let y = /^female$|^male$|^()$/i;
    // const regexp 
    if (y.exec(gender) != null) {
        let age = prompt("How old is the superhero?");
        let z = /\d+/
        if (z.exec(age) != null && age.length <= 5) {
            if (age < 18 && gender === 'male') {
                alert('The superhero name is: ' + animal.toLowerCase() + '-' + 'boy!');
            }
            if (age > 18 && gender === 'male') {
                alert('The superhero name is: ' + animal.toLowerCase() + '-' + 'man!');
            }
            if (age < 18 && gender === 'female') {
                alert('The superhero name is: ' + animal.toLowerCase() + '-' + 'girl!');
            }
            if (age > 18 && gender === 'female') {
                alert('The superhero name is: ' + animal.toLowerCase() + '-' + 'woman');
            }
            if (age < 18 && gender === '') {
                alert('The superhero name is: ' + animal.toLowerCase() + '-' + 'kid!');
            }
            if (age > 18 && gender === '') {
                alert('The superhero name is: ' + animal.toLowerCase() + '-' + 'hero!');
            } 
        }else alert("Wrong");
    } else alert("Wrong");
} else alert("Wrong");


// let age = prompt("How old is the superhero?");
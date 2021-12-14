let answer;

console.log('Here are all the available people:', people);
$(ready)
function ready(){
    randomCharacter();
    render();
    $(document).on('click', 'img', playerAttempt);
    $('body').css('background-image', `url("<img data-name="${answer.name}" 
        src="https://github.com/${answer.githubUsername}.png?" 
        alt="Profile image of ${answer.name}></img>")`)
}

///super messy code
//copy of people
let copycat = people.slice()
function render(){
    console.log('working');
    //loop through copy arr until empty
    while(copycat.length > 0){
        //use random index between 0 and copycat length and append to dom
        let randomPerson = renderRand(copycat)
        $('#folks').append(`
            <div>
                <img data-name="${randomPerson.name}" 
                src="https://github.com/${randomPerson.githubUsername}.png?size=250" 
                alt="Profile image of ${randomPerson.name}">
            </div>
            <div class="freeSpace">
            </div>
        `);
        //delete random index so no repeats
        let index = copycat.indexOf(randomPerson)
        copycat.splice(index, 1)
    }
    //rest copy
    copycat = people.slice()
}

function renderRand(arr){
    let number = randomNumber(0, arr.length - 1)
    let human = arr[number]
    return human;
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}



function randomCharacter(){
    let character = people[Math.floor(Math.random() * people.length)];
    answer = character;
    window.alert(`Please find ${character.name}`)
}



function playerAttempt(){
    if($(this).data('name') === answer.name){
        $('#folks').empty();
        $('#onWin').css("display", "initial")
        
        setTimeout(winningEvent, 1500)
    } else if($(this).data('name') !== answer.name){
        window.alert('Try Again')
    }
}



function playAgain(){
    let anotherRound = window.confirm('Play again?')
    if(anotherRound){
        $('#onWin').css("display", "none")
        randomCharacter()
        render()
    } else {
        window.alert('Your loss')
        $('html').remove()
    }
}

function winningEvent(){
    window.alert('you\'re a friggen genius');
    playAgain()
}
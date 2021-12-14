let answer;
console.log('Here are all the available people:', people);
$(ready)
function ready(){
    randomCharacter();
    render();
    $(document).on('click', 'img', playerAttempt)
}


function render(){
    for(let person of people){
        $('#folks').append(`
        <div>
            <img data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
    `);
    }
}

function randomCharacter(remove){
    let character = people[Math.floor(Math.random() * people.length) + 1];
    answer = character;
    window.alert(`Please find ${character.name}`)
    console.log(character);
    $('body').css('background-image', `url("<img data-name="${answer.name}" 
        src="https://github.com/${answer.githubUsername}.png?size=250" 
        alt="Profile image of ${answer.name}></img>")`)
}

function playerAttempt(){
    if($(this).data('name') === answer.name){
        window.alert('you\'re a friggen genius');
        playAgain()
        //setTimeout(winningEvent, 2000)
        
    } else if($(this).data('name') !== answer.name){
        window.alert('Try Again')
    }
    console.log($(this).data('name'));
}

function playAgain(){
    let anotherRound = window.confirm('Play again?')
    if(anotherRound){
        randomCharacter()
    } else {
        window.alert('Your loss')
        $('html').remove()
    }
}
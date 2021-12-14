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



function render(){
    let copycat = people
    //loop through copy arry
    for(let index in copycat){
        //use random index between 0 and copycat length and append to dom
        index = Math.floor(Math.random() * (copycat.length - 1));
        console.log('index,', index);
        console.log(index, index, index,);
        $('#folks').append(`
            <div>
                <img data-name="${copycat[index].name}" 
                src="https://github.com/${copycat[index].githubUsername}.png?size=250" 
                alt="Profile image of ${copycat[index].name}">
            </div>
        `);
        //delete index so no repeats
        copycat.splice(index, 1) /// giving me random index?????.... was using wrong arr.. going to sleep now.
        console.log(copycat.length, i);
        console.log(copycat);
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
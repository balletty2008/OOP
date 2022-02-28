const prompts = require('prompts');

//Enermy: Small sewer rat, Giant Dragon
    let rat = {
        Name: "Small sewer rat",
        hitPoint: 2,
        attackDamage: 1,
        chanceOfattack: 50,
    };
    let dragon = {
        Name: "Giant dragon",
        hitPoint: 4,
        attackDamage: 8,
        chanceOfattack: 90,
    };
    
//When player or enemy attacks the attack success chance should be based on the “chance of attack hits” property.
//If the attack hits, the “attack damage points” should be subtracted from target hitpoint value. If hitpoints go
//to zero or below, the target is destroyed. 
class player {
    constructor(name, playerHitPoint, attackPoint, chanceOfHits) {
        this.name = name;
        this.playerHitPoint = playerHitPoint;
        this.attackPoint = attackPoint;
        this.chanceOfHits = chanceOfHits;
    }
    //Enemy should attack a player which enters the room and when the player looks around. 
    //hitPointChange() {
    //    this.playerHitPoint = this.playerHitPoint - huaPoint
    //}
}

let hua = new player('Hua', 10, 2, 75);
//    hua.hitPointChange();

async function gameLoop() {
    let continueGame = true;

    // Example set of UI options for the user to select
    //Main menu
    const initialActionChoices = [
        { title: 'Look around', value: 'Look around' },
        { title: 'Go to Room', value: 'Go to Room' },
        { title: 'Attack', value: 'Attack'},
        { title: 'Exit game', value: 'exit'}
    ];

    const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Choose your action',
        choices: initialActionChoices
    });

    // Deal with the selected value
    //console.log('You selected ' + response.value);
    console.log('--------------------');

    switch(response.value) {
        //Dungeon is in Look around
        case 'Look around':
            console.log('You look around');
            //player 
            console.log('You are in The dungeon and it is a big and damp room with broken statues all around');
            console.log('\n');
            console.log('There are doorways leading to:');
            console.log('Hallway');
            console.log('\n');
            console.log('--------------------');
            break;
        
        case 'Go to Room':
            const RoomActionChoices = [
                { title: 'Hallway', value: 'Hallway' },
                { title: 'Chamber', value: 'Chamber' },
                { title: 'Glowing Portal', value: 'Glowing Portal' },
            ];
    
        // select room
        // The execution does not proceed from here until the user selects an option.
            const responseRoom = await prompts({
                type: 'select',
                name: 'value',
                message: 'Which room are you going to?',
                choices: RoomActionChoices
            });
    
        //display selection
            console.log('You move to ' + responseRoom.value);
            console.log('--------------------');

            switch(responseRoom.value) {
                case 'Hallway': 
                    console.log('You look around');
                    console.log('You are in Hallway and it is a long and dark hallway with dark pools of water on the floor and some fungus growing on the walls');
                    console.log('\n');
                    console.log('There are doorways leading to:');
                    console.log('The dungeon');
                    console.log('Chamber');
                    console.log('\n');
                    console.log('You see a Small sewer rat');
                    let oneOrZero = (Math.random()>0.5)? 1 : 0; //get a random number which show the enemy attack successful or not
                    if(oneOrZero == 1) {
                        var huaPoint = 10 - rat.attackDamage; //Player hitPoint - rat attack damage points
                        console.log(rat.Name + ' attacks ' + hua['name'] + ' with its Sharp teeths'); 
                        console.log(rat.Name +' hits ' + hua['name'] +' with ' + rat.attackDamage +' points!');
                        console.log(hua['name'] + ' has hitpoints: ' + huaPoint + ' remaining.');
                    }
                    else{
                        const huaPoint = 10;
                        console.log(rat.Name + ' attacks misses!\n'); //Player hitpoint no change.
                        console.log(hua['name'] + ' is survival and has hitpoints: ' + huaPoint +' remaining!');
                    }
                    console.log('--------------------');
                    break;
            
                case 'Chamber':
                    console.log('You look around');
                    console.log('You are in Chamber and it is a small chamber, which is illuminated by a glowing portal of somekind');
                    console.log('\n');
                    console.log('There are doorways leading to:');
                    console.log('Hallway');
                    console.log('Glowing Portal');
                    console.log('\n');
                    console.log('You see a ' + dragon.Name);

                    let oneOrZero1 = (Math.random()>0.5)? 1 : 0; //get a random number which show the enemy attack successful or not
                    if(oneOrZero1 == 1) {
                        var huaPoint = 10 - dragon.attackDamage; //If put hua['playerHitPoint'], the number displays incorrect
                        console.log(dragon.Name +' attacks ' + hua['name'] + ' with its Sharp Claws and fire breath'); //Player hitPoint - dragon attack damage points
                        console.log(dragon.Name +' hits ' + hua['name'] +' with ' + dragon.attackDamage +' points!');
                        console.log(hua['name'] + ' is hit and has ' + huaPoint + ' hitpoints remaining');
                    } else{
                        //I don't find out the problem, so I directly put "10" instead hua['playerHitPoints']
                        const huaPoint = 10; //If put hua['playerHitPoint'], the number displays incorrect
                        console.log(dragon.Name + ' attacks misses!\n');
                        console.log(hua['name'] + ' is survival and has hitpoints: ' + huaPoint + ' remaining!');
                    }
                    console.log('--------------------');
                    break;

                case 'Glowing Portal':
                    console.log('Congradulations, you made through the dungeons!');
                    console.log('\n');
                    console.log('--------------------');
                    continueGame = false;
                    break;
            }
            break;

        //Enemies to attack  
        case 'Attack':
            console.log('Which enermy you want to attack?');
            const actionAttack = [
                { title: 'Small sewer rat', value: 'Small sewer rat' },
                { title: 'Giant Dragon', value: 'Giant Dragon' },
            ];
    
            const responseAttack = await prompts({
                type: 'select',
                name: 'value',
                message: 'Choose your action',
                choices: actionAttack
            });

            console.log('You choose to attack ' + responseAttack.value);
            console.log('--------------------');

            //If the attack hits, the “attack damage points” should be subtracted
            //from target hitpoint value. If hitpoints go to zero or below, the target is destroyed.
            switch(responseAttack.value) {
                case 'Small sewer rat': 
                    let oneOrZero2 = (Math.random()>0.5)? 1 : 0;    //get a random number which show the enemy attack successful or not
                    if(oneOrZero2 == 1) {
                        console.log('You bravely attack ' + responseAttack.value + ' with your Sharp sword');
                        var ratPoint = 2 - hua['attackPoint'];  //rat hitPoint - player attack damage points
                        console.log(hua['name'] +' hits ' + responseAttack.value + ' with ' + hua['attackPoint'] + ' points');
                        console.log(rat.Name + ' is hit and has ' + ratPoint + ' hitpoints remaining');
                        console.log(responseAttack.value + ' is destroyed!');
                    } else{
                        //rat attack Hua, rat damage point 1, hua.hitPoint - 1 points
                        var huaPoint = 10 - rat.attackDamage; //Player hitPoint - rat attack damage points
                        console.log(rat.Name + ' attacks ' + hua['name'] + ' with its Sharp teeths'); 
                        console.log(hua['name'] + ' is hit and has ' + huaPoint + ' hitpoints remaining');
                    } 
                    break;

                case 'Giant Dragon': 
                    console.log('You see a Giant Dragon');
                    let oneOrZero3 = (Math.random()>0.5)? 1 : 0;    //get a random number which show the enemy attack successful or not
                    if(oneOrZero3 == 1) {
                        console.log('You bravely attack ' + responseAttack.value + ' with your Sharp sword');
                        var dragonPoint = 4 - hua['attackPoint'];  //dragon hitPoint - player attack damage points
                        console.log(hua['name'] +' hits ' + responseAttack.value + ' with ' + hua['attackPoint'] + ' points');
                        console.log(dragon.Name + ' is hit and has ' + dragonPoint + ' hitpoints remaining');
                    } else{
                        //var huaPoint = 10 - dragon.attackDamage; //If put hua['playerHitPoint'], the number displays incorrect
                        var huaPoint = 10 - dragon.attackDamage;
                        console.log(dragon.Name +' attacks ' + hua['name'] + ' with its Sharp Claws and fire breath'); //Player hitPoint - dragon attack damage points
                        console.log(dragon.Name +' hits ' + hua['name'] +' with ' + dragon.attackDamage +' points!');
                        console.log(hua['name'] + ' is hit and has ' + huaPoint + ' hitpoints remaining');
                    }
                    console.log('--------------------');
                    break;
            }
                break;
            
        case 'exit':
            continueGame = false;
            break;
    }

    if(hua['playerHitPoint'] = 0) {
        continueGame = false;
    }
    
    if(continueGame) {
        gameLoop();
    }    
}

process.stdout.write('\033c'); // clear screen on windows

console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
console.log('================================================')
console.log('You walk down the stairs to the dungeons')
gameLoop();

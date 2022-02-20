// TEXT ADVENTURE 

// Beginning

alert(`Welcome to Luigi's Mansion 3 1/2! Press OK to start!
You have 100 hp`)

const gameOver = "GAME OVER!";
const invalid = "Please type 1 or 2"

let answer = 2
let hp = 100;

while (answer == 2) {
    answer = prompt(`${hp} HP
    Luigi gets a random invitation to a very fancy ball and decides he deserves a break from the plumbing. He arrives at the mansion, but something is off... What should you do?
    1. Go inside
    2. Run away
    (Chose an option by typing 1 or 2)`);

    if (answer == 2) {
        alert(`${hp} HP
        You think about running away, but then think of all the fancy food that might be at the ball.`);
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 2;
            alert(invalid)
        } 
    }
}

alert(`You look around and see that the walls are crumbling and Gargoyles line the edge of the roof... it feels like they're staring at you...`)

answer = 1;
while (answer == 1) {
    answer = prompt(`${hp} HP
    You walk inside, but no one seems to be home. There is a big, fancy door and you can hear strange voices on the other side. But there's also a door labeled "Laboratory". Should you:
    1. Go in the big doors
    2. Go into the Lab`);

    if (answer == 1) {
        alert(`${hp} HP
        You open the door and find a bunch of ghost! With nothing to fight with, Luigi is quickly overpowered, but barely escapes.
        You lose 40 hp`);
        hp -= 40;
        if (hp <= 0) {
            alert("GAME OVER")
            throw new Error();
        }
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 1;
            alert(invalid);
        } 
    }
}

answer = 1;
while (answer == 1) {
    answer = prompt(`${hp} HP
    You enter the Lab hesitantly, but find it empty except for a strange vacuum-backpack like device on the floor.
    1. kick the device
    2. Put the device on`);

    if (answer == 1) {
        alert(`${hp} HP
        You kick the device and it starts sucking in everything! It takes all your agility and strength to turn it off. 
        You lose 10 hp`);
        hp -= 10;
        if (hp <= 0) {
            alert("GAME OVER")
            throw new Error();
        }
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 1;
            alert(invalid);
        } 
    }
}

alert(`You put on the device. Now all the memories are coming back to you. This is one of Professor E. Gadd's inventions: the Poltergust 3000. You can use it to suck up and blow away ghosts!`);

answer = 1;
while (answer == 1) {
    answer = prompt(`${hp} HP
    Now equipped, you return to the main room. There are still voices on the other side of the big, fancy door. What do you do?
    1. Wait until the voices quiet down
    2. Run into the room and attack the ghosts`);

    if (answer == 1) {
        alert(`${hp} HP
        You wait and wait. You wait for minutes, hours, days, years, centuries... ok probably a couple seconds, but the voices are still as loud as ever. 
        You lose 5 hp for some reason`);
        hp -= 5;
        if (hp <= 0) {
            alert("GAME OVER")
            throw new Error();
        }
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 1;
            alert(invalid);
        } 
    }
}

alert(`You gather up all your courage and sprint into the room!`);

answer = 2;
while (answer == 2) {
    answer = prompt(`${hp} HP
    No time to take in the surroundings! You see three ghost. Two green ones and one big red one. What do you do?
    1. Stun them with the flashlight
    2. Suck them in vacuum`);

    if (answer == 2) {
        alert(`${hp} HP
        They are too fast! They get a swipe at you.
        You lose 20 hp`);
        hp -= 20;
        if (hp <= 0) {
            alert("GAME OVER")
            throw new Error();
        }
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 2;
            alert(invalid);
        } 
    }
}

answer = 2;
while (answer == 2) {
    answer = prompt(`${hp} HP
    You flash them with the light. They can barely move!
    1. Vacuum them!
    2. Flash yourself with the flashlight`);

    if (answer == 2) {
        alert(`${hp} HP
        OUCH!! Oh boy, I think you just blinded yourself. The ghosts laugh at your feeble brain, then attack.
        You lose 100 hp`);
        hp -= 100;
        if (hp <= 0) {
            alert("GAME OVER")
            throw new Error();
        }
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 2;
            alert(invalid);
        } 
    }
}

alert(`With a giant vortex, you suck in all three stunned ghosts! Whew glad that's over... but wait, whose doing that manacle laughing?
"Mmuahuahahahaa"`)

answer = 1;
while (answer == 1) {
    answer = prompt(`${hp} HP
    OH NO! It's King Boo, wearing his power gem crown and a huge, creepy smile! He's heading straight for you, what do you do?
    1. Try to vacuum him
    2. Try to blow him away`);

    if (answer == 1) {
        alert(`${hp} HP
        You try to suck him into the Poltergust, but he doesn't even budge! He takes a swipe at you with his big tongue. 
        You lose 50 hp`);
        hp -= 50;
        if (hp <= 0) {
            alert("GAME OVER")
            throw new Error();
        }
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 1;
            alert(invalid);
        } 
    }
}

answer = 2;
while (answer == 2) {
    answer = prompt(`${hp} HP
    You reverse the settings and blow King Boo with all you got! His crown almost falls. What now?
    1. Blow again
    2. Flash him`);

    if (answer == 2) {
        alert(`${hp} HP
        You try to stun King Boo, but to no avail! He's too clever for that! He rams into you.
        You lose 50 hp`);
        hp -= 50;
        if (hp <= 0) {
            alert("GAME OVER")
            throw new Error();
        }
    }
    if (answer != 1) {
        if (answer != 2) {
            answer = 2;
            alert(invalid);
        } 
    }
}

alert(`${hp} HP
You blow again with all your might. The crown falls and smashes onto the ground into a billion pieces!
"NNOOooOOooOoo! I'm powerless without my crown! Argh, you win this time pesky plumber, but just you wait till I return!`);

alert(`Luigi is filled with relief as King Boo floats away. He did it!
Just then, Mario and Peach come in the door with a mushroom pizza and cake. 
"Oh, luigi! You finally made it!`)

alert( `Congratulations!! You WIN!
You finished with ${hp} HP left`)

// answer = _;
// while (answer == _) {
//     answer = prompt(``);

//     if (answer == _) {
//         alert(``);
//     }
//     if (answer != 1) {
//         if (answer != 2) {
//             answer = _;
//             alert(invalid);
//         } 
//     }
// }
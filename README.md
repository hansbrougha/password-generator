# 03 JavaScript: Password Generator

    This week's assignment was to assemble Javascript code in order to generate a random password from upper and lower case letters, numbers, special characters.

    First I set my variables for each set of characters. These are contained in lines 2-6.
    Next in line is the generatePassword function, lines 9-46. This function contains a prompt asking the user to enter a number between 8-128(totalChar). The following confirms ask the user to confirm use of upperCase, lowerCase, numbers, and specChar. These variables are then added to the charBank (Line 22) for character selection. Lines 23-46 concatenate each string within the charBank. The for loop (41-46) then selects a random character from the charBank array up to the amount of characters specified in the totalChar variable. It then returns a random password.

    As for the code provided from the class-repo edition of the script file, I wasn't sure what to do with it all. If i deleted it, the function won't display the random password. I also couldn't seem to get the addEventListener to work properly. It generates a new password, but does not reset the original values and also does not display the new characers.
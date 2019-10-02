<template>
    <div class="container">
        
        <div class="row">
            <h1>Permutations:</h1>
            <ul>
                <li>Counting WITHOUT replacement</li>
                <li>Order matters</li>
            </ul>

            <strong>P(n,r) = n!/(n-r)!</strong>
<pre>
ex. => P(6,6) = 6!/(6-6)! = (6*5 *4*3*2*1)/1 = 720
    => P(10,4) = 10!/(10-4)! = (10*9*8*7*6*5*4*3*2*1)/(6*5*4*3*2*1) = (10*9*8*7) = 5040
</pre>
            <hr />

            <h2>Suppose 10 horses run a race; <br/>
                How many different ways could 1st, 2nd, and 3rd place occur?</h2>
<pre>
P(10,3) = 10!/7! = (10*9*8) = 720 combinations that 10 horses can finish in the top 3 places
</pre>
            <hr />

            <h2>Suppose there is a class of 20 students and an elections are being made for a president and VP;<br />
            How many different ways could the candidates be picked?</h2>

<pre>
P(20,2) = 20!/18! = (20*19) = 380 combinations of Pres/VP
</pre>
            </div>
=============================================
=============================================
=============================================

Combinations:
 - Counting WITHOUT replacement
 - Order does NOT matter

The total number of combinations on N-objects taken R at a time, denoted:

C = "Choose" when spoken
nCr = n!/(n-r)!r!

ex. => 5C2 = 5!/(5-2)!2! = 5!/3!2! = (5*4*3*2*1)/(3*2*1)(2*1) = (5*4)/(2*1) = 20/2 = 10
    => 8C6 = 8!/2!6! = [expand the factorials and cancel out the bottom/top] = (8*7)/2 = 28

____________________________________________

Suppose 10 horses run a race;
How many different ways could 3 horses finish in 1st, 2nd, 3rd IN ANY ORDER?
{A,B,C},{B,C,A},{C,B,A}...etc...

10C3 = 10!/7!3! = (10*9*8)/(3*2*1) = [REDUCE = 10*3*4] = 720/6 = 120 

____________________________________________

On a test, a student must select 6 our of 10 questions.  
In how many ways can this be done?

10C6 = 10!/4!6! = (10*9*8*7)/(4*3*2*1) = 10*3*7*1 = 210

____________________________________________

Playing Poker!
How many 5-card poker hands consisting of 3 Aces and 2 cards 
that are NOT aces are possible with a 52 card deck?

N(select 3A's out of 4A's)
    AND (multiply)
N(select 2 cards out of 48)

= (4C3)*(48C2) = (4!/1!3!)(48!/46!2!) = 4,512 (full house)

=============================================
=============================================
=============================================

Anagrams:
- They are just Factorials of the total number of the sample.
- BUT if there are repeat letters, you divide the initial-factorial by the number of repeats-factorial

ex. => ANAGRAM (7 total letters, with 3 repeats) = 7!/3! = 50/40/6 = 840
ex. => LITTLE (6 letters, with 2Ls and 2Ts) = [multiple the repeat factorials] 6!/2!2! = 720/4 = 180

Then we could further filter out for English words...


<!-- 
    @Note: test these with larger factorials to determine speed 
    https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
 -->
        </pre>
    </div>
</template>
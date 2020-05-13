var trin3 = {
    template: `
    <form action="Index.html" method="GET">
    <div class="flex">
        <div class="board__input">
            <h3>6.1 PROBLEM</h3>
            <p>
                Problem fra punkt 4.1 flyttet hertil.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="board__input">
            <h3>6.2 TEKNOLOGI</h3>
            <p>
                Flyttet fra punkt 4.3 hertil.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="board__input">
            <h3>6.3 LØSNING</h3>
            <p>
                Beskriv løsningen på problemet i en sætning.
            </p>
            <input type="text" name="losning">
        </div>
    </div>
            <div class="board__input">
                <h3>7.1 VISUALISER LØSNING</h3>
                <p>
                    Lav en simpel tegning af hvordan jeres person oplever løsningen.
                </p>
                <div class="flex">
                    <label for="losningfor">Før personen oplever problemet</label>
                    <input type="file" name="losningfor" accept="image/*">
                </div>
                <div class="flex">
                    <label for="losningunder">Når personen oplever problemet</label>
                    <input type="file" name="losningunder" accept="image/*">
                </div>
                <div class="flex">
                    <label for="losningefter">Efter personen har oplevet problemet</label>
                    <input type="file" name="losningefter" accept="image/*">
                </div>
            </div>
        <div class="flex">
            <div class="board__input">
                <h3>8.1 PLACÉR FEEDBACK HER</h3>
                <p>
                    Få en anden til at se jeres løsning igennem og bed om feedback.
                </p>
                <textarea rows="6"></textarea>
            </div>
            <div class="board__input">
                <h3>8.2 HJÆLP TIL FEEDBACK</h3>
                <p>
                    Inspiration til feedback.
                </p>
                <ol>
                    <li>Hvorfor ville du ikke bruge løsningen?</li>
                    <li>Hvis du kunne nævne to ting du syntes fungerer godt, hvad ville det så være? Og hvorfor?</li>
                    <li>Hvis du skulle nævne to ting der kunne gøre løsningen endnu bedre, hvad ville det så være? Og hvorfor?</li>
                </ol>
            </div>
        </div>
            <div class="board__input">
            <h3>9.1 EVALUER FEEDBACK</h3>
            <p>
                Beskriv hvordan I vil ændre jeres løsning, udfra feedbacken.
            </p>
            <textarea rows="6"></textarea>
        </div>
    
<div class="flex-end">
    <input type="submit" value="Næste">
</div>
</form>
  `,
  };
  new Vue({
    el: '#app',
    components: {
      'trin3': trin3
    }
  })
  
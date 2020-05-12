var trin4 = {
    template: `
   <form action="Index.html" method="GET">
                      
                      <div class="flex">
                          <div class="board__input">
                              <h3>10.1 PERSON</h3>
                              <p>
                                  Person fra 1.2 flyttet hertil.
                              </p>
                              <img class="billede" src="../img/logo.png">
                          </div>
                          <div class="board__input">
                              <h3>10.2 PROBLEM</h3>
                              <p>
                                  Problem fra punkt 6.1 flyttet hertil.
                              </p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                          <div class="board__input">
                              <h3>10.3 VISUALISERING AF PROBLEM</h3>
                              <p>
                                  Flyttet fra punkt 1.3 hertil.
                              </p>
                              <div class="flex">
                                  <div class="flex-column-center">
                                      <img class="billede" src="../img/logo.png">
                                      <p>
                                          Før
                                      </p>
                                  </div>
                              <div class="flex-column-center">
                                      <img class="billede" src="../img/logo.png">
                                      <p>
                                          Under
                                      </p>
                                  </div>
                                  <div class="flex-column-center">
                                      <img class="billede" src="../img/logo.png">
                                      <p>
                                          Efter
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flex">
                          <div class="board__input">
                              <h3>10.4 TEKNOLOGI</h3>
                              <p>
                                  Beskrivelse af teknologi flyttet fra punkt 6.2.
                              </p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                          <div class="board__input">
                              <h3>10.5 LØSNING</h3>
                              <p>
                                  Løsning fra punkt 6.3 flyttet hertil.
                              </p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                          <div class="board__input">
                              <h3>10.3 VISUALISERING AF Løsning</h3>
                              <p>
                                  Flyttet fra punkt 7.1 hertil.
                              </p>
                              <div class="flex">
                                  <div class="flex-column-center">
                                      <img class="billede" src="../img/logo.png">
                                      <p>
                                          Før
                                      </p>
                                  </div>
                              <div class="flex-column-center">
                                      <img class="billede" src="../img/logo.png">
                                      <p>
                                          Under
                                      </p>
                                  </div>
                                  <div class="flex-column-center">
                                      <img class="billede" src="../img/logo.png">
                                      <p>
                                          Efter
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="board__input">
                          <h3>10.7 VORES LØSNING</h3>
                          <p>
                              Navngiv og beskriv løsningen i en sætning.
                          </p>
                          <textarea rows="6" class="100"></textarea>
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
      'trin4': trin4
    }
  })
  
var opretBoard = {
    template: `
   <form action="Index.html" method="GET">
                      <div class="flex-column">
                      <label for="navn">Boardnavn</label>
                      <input type="text" name="navn">
                  </div>
                      <div class="flex-column checkbox">
                          <h3>Tilknyt teammedlemmer</h3>
                          <div>
                              <input type="checkbox" name="sisv" value="sisv">
                              <label for="sisv">Signe Svendsen - Sisv@mail.dk</label>
                          </div>
                          <div>
                              <input type="checkbox" name="mimo" value="mimo">
                              <label for="mimo">Michael Mortensen - Mimo@mail.dk</label>
                          </div>
                          <div>
                              <input type="checkbox" name="elri" value="elri">
                              <label for="elri">Elisa Rimpler - Elri@mail.dk</label>
                          </div>
                          <div>
                              <input type="checkbox" name="memi" value="memi">
                              <label for="memi">Mette Mikkelsen - Memi@mail.dk</label>
                          </div>
                          <div>
                              <input type="checkbox" name="ibib" value="ibib">
                              <label for="ibib">Ib Von Ibsen - Ibib@mail.dk</label>
                          </div>
                          <div>
                              <input type="checkbox" name="clbe" value="clbe">
                              <label for="clbe">Claus Bergman - Clbe@mail.dk</label>
                          </div>
                  </div>
                  <div class="flex-end">
                      <input type="submit" value="Opret board">
                  </div>
                  </form>
  `,
  };
  new Vue({
    el: '#opretBoard',
    components: {
      'opret-board': opretBoard
    }
  })
  
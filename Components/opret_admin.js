var opretAdmin = {
  template: `
 <div class="opret_admin--wrapper">
                    <div>
                        
                        <form action="Index.html" method="GET">                         
                            <div class="flex-column">
                                <label for="brugernavn">Admin navn</label>
                                <input type="text" name="brugernavn">
                            </div>
                            <div class="flex-column">
                                <label for="email">Admin e-mail</label>
                                <input type="email" name="email">
                            </div>

                            <div class="flex-column">
                                <label for="Projektnavn">Projektnavn</label>
                                <input type="text" name="Projektnavn">
                            </div>
                        
                            <div class="flex opret_admin--opret_button">
                                <input type="submit" value="Opret admin">
                            </div>
                        </form>
                                       
                    </div>
                </div>
`,
};
new Vue({
  el: '#app',
  components: {
    'opret-admin': opretAdmin
  }
})
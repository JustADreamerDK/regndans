var navi = {
    template: `
   <div class="left">
                  <nav>
                      <ul>
                        <li><a href="Index.html">Kunder</a></li>
                        <li><a href="../Index.html">Log ud</a></li>
                      </ul>
                  </nav>
              </div>
  `,
  };
  new Vue({
    el: '#app',
    components: {
      'navi': navi
    }
  })
  
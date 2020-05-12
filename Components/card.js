var card = {
    template: `
   <div class="card">
   <div class="card__forside" id="card__forside[i]">
       <h5>
           {{ teknologi }}
       </h5>
       <h4>
           {{ forklaring }}
       </h4>
   </div>
   <div class="card__bagside" id="card__bagside[i]">
       <h5>
           Eksempler:
       </h5>
       <ol>
           <li>
               {{ eksempel }}
           </li>
       </ol>
   </div>
  </div>
  `,
    data: function() {
      return {
        teknologi: 'info@mycompany.com',
        forklaring: 'lalala',
        eksempel: 'loemfnkdsl fjsdkl fsjk lfs'
      }
    },
  };
  new Vue({
    el: '#app',
    components: {
      'card': card
    }
  })
  
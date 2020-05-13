const app = new Vue({
    el:'#table',
    data:{
      boards:[{name: "Lad os lave en hjemmeside", amount: "34", red: "red"},
        {name: "En ny app", amount: "2", blue: "blue"},
        {name: "Sitetech opfinder", amount: "12", pink: "pink"},
        {name: "Blomsterfestival", amount: "5", blue: "blue"},
        {name: "Strik din egen hue", amount: "61", red: "red"},
        {name: "The Voice", amount: "13", green: "green"},
        {name: "Vejrapp", amount: "32", yellow: "yellow"}],
      pageSize: 5,
      currentPage:1
    },
    methods:{
      nextPage:function() {
        if((this.currentPage*this.pageSize) < this.boards.length) this.currentPage++;
      },
      prevPage:function() {
        if(this.currentPage > 1) this.currentPage--;
      }
  
    },
    computed:{
      sortedBoards:function() {
        return this.boards.sort((a,b) => {
        }).filter((row, index) => {
          let start = (this.currentPage-1)*this.pageSize;
          let end = this.currentPage*this.pageSize;
          if(index >= start && index < end) return true;
        });
      }
    }
  })
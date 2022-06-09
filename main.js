var vm = new Vue({
    el: '#form',
    data: {
        cout: 0,
        Todo: '',
        DoList: [
            {
                do:"Học PHP"
            }
        ],
        DoComple: [
            {
                do:"Học HTML"
            }
        ]
    },
    methods: {
        Add: function() {
            if(this.Todo != "")
            this.DoList.push({
                do: this.Todo
            })
            this.Todo =""
        
        },
        Delete: function(id, array) {
            array.splice(id,1);
        },
        Complete: function(id) {
            this.DoComple.push(this.DoList[id])
            this.DoList.splice(id,1);
        },
        ReAdd: function(id) {
            this.DoList.push(this.DoComple[id])
            this.DoComple.splice(id,1);
        }
        
    }
})
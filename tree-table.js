

var data = [
   {
      mesa: 1
      , buffet: 'queijo'
      , data: '2018-12-01'
      , itens: 3
      , total: 160.50
   },
   {
      mesa: 2
      , buffet: 'queijo'
      , data: '2018-12-02'
      , itens: 2
      , total: 130.00
   },
   {
      mesa: 1
      , buffet: 'carne'
      , data: '2018-12-01'
      , itens: 8
      , total: 310.10
   },
   {
      mesa: 2
      , buffet: 'carne'
      , data: '2018-12-03'
      , itens: 4
      , total: 200.00
   }
];

var fields = [
   {
      field: 'buffet'
      
   },
   {
      field: 'itens',
      agreg: (result, item) => { return result + item; }
   }
];

var agregation = function (data, fields) {

   let _data = data;

   let _fields = fields;

   let _distinct = [];

   // recupera os valores únicos dos campos que serão agrupados 
   _fields.filter((item)=>{ return   !item.agreg;})
      .forEach((item, idx, arr) => {

         let group = {};

         group.field = item.field;

         group.value = _data.map((a_item) => { return a_item[item.field]; })
            .filter((a_item, a_idx, a_arr) => {
               return a_arr.indexOf(a_item) == a_idx;
            });

         _distinct.push(group);

      });

   return _distinct;

};


let result = agregation(data, fields);


console.log(result);
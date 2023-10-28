var customersDB = [
    {id:"C00-001",name:"shamod dilanka",address:"Galle",salary:20000},
    {id:"C00-002",name:"pasindu",address:"Matara",salary:35000},
    {id:"C00-003",name:"sahan",address:"Panadura",salary:40000}
];
var itemsDB = [
    {code:"I00-001",name:"ice cream",price: 145.00,quantity: 100},
    {code:"I00-002",name:"milo",price: 345.00,quantity: 150},
    {code:"I00-003",name:"revelo",price: 245.00,quantity: 400}
];
var ordersDB = [
    {oid:"OID-001", date:"2023/10/06", customerID:"C00-001",
        orderDetails:[
            {oid:"OID-001", code:"I00-001", qty:10, payment:145.00},
            {oid:"OID-001", code:"I00-002", qty:2, payment:345.00}
        ]
    }
];
var cartDetails=[];
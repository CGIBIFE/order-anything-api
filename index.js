const {getCuisine, getGender, getRegions, addMerchant, addOrder, addProduct, storeLogin, getProducts, editProduct, deleteProduct, getOrders, viewOrder, getCustomerDetails, getOrderStatus, setOrderStatus, getStores, getStoreItems } = require('./queryservice/query');
var bodyParser = require('body-parser');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 5100;
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.listen(port);

app.get('/api/gender', (req, res) => {
    getGender((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/api/', (req, res) => {
    getGender((err) => {
        if (err) throw err;
        res.send({Error: 'We sorry we unable to help you with the request'})
    })
})

app.get('/api/cuisine', (req, res) => {
    getCuisine((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/api/regions', (req, res) => {
    getRegions((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.post('/api/merchant/add', (req, res) => {
    addMerchant(req.body,(err, result) => {
        if(err) throw err;
        if(result.insertId){
            res.send({msg:`Congrats! Your store ${req.body.storeName} is created, Please follow the instruction sent to your email ${req.body.contactEmail} to proceed further`})
        }

    });
});

app.post('/login/store', (req, res) => {
    storeLogin(req.body, (err, result) => {
        if(err) throw err;
            if(result){
                res.send({loginStatus:101, id: result})
            }else {
                res.send({loginStatus:401})
            }

    })
})

app.post('/api/order/add', (req, res,) => {
    addOrder(req.body,(err, result) => {
        if(err) throw err;
        if(result){
            res.status(200).json({msg:"Order Successfully created!!"});
        }
    });
});

app.post('/api/product/add',(req, res) => {
    addProduct(req.body, (err, result) => {
        if(err) throw err;
        if(result){
            res.status(200).json({msg:"Product Successfully created!!"});
        }
    })
})
app.post('/api/products/',(req, res) => {
    getProducts(req.body, (err, result) => {
        if(err) throw err;
        if(result){
            res.status(200).json({products:result});
        }
    })
})

app.post('/api/products/edit/',(req, res) => {
    editProduct(req.body, (err, result) => {
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})

app.post('/api/products/delete/',(req, res) => {
    deleteProduct(req.body, (err, result) => {
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})

app.post('/api/orders/',(req, res) => {
    getOrders(req.body, (err, result) => {
        console.log(result)
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})

app.post('/api/orders/view',(req, res) => {
    viewOrder(req.body, (err, result) => {
        console.log(result)
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})

app.post('/api/orders/get/customer',(req, res) => {
    getCustomerDetails(req.body, (err, result) => {
        console.log(result)
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})
app.post('/api/orders/get/status',(req, res) => {
    getOrderStatus(req.body, (err, result) => {
        console.log(result)
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})

app.post('/api/orders/set/status',(req, res) => {
    setOrderStatus(req.body, (err, result) => {
        console.log(result)
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})

app.post('/api/store/get',(req, res) => {
    getStores(req.body, (err, result) => {
        console.log(result)
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})

app.post('/api/store/get/products',(req, res) => {
    getStoreItems(req.body, (err, result) => {
        console.log(result)
        if(err) throw err;
        if(result){
            res.status(200).json({result});
        }
    })
})


console.log('Server has started at: ' + port);

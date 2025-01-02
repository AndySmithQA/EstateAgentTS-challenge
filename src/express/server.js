import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 8080;

const seller = [{"firstName": "Stephanie ","surname": "Hill","address": "brecon Town, Brecon","postcode": "BR1 2JE","phone": "","id": "8"},{"firstName": "Jade","surname": "Song","address": "Sichuan, China","postcode": "1131321","phone": "","id": "9"},{"firstName": "Nicohola","surname": "Green","address": "Fairwater, Cardiff","postcode": "CF1 1AA","phone": "1234234","id": "10"},{"firstName": "Cookie","surname": "Cat","address": "Tesco Street","postcode": "A11 AA1","phone": "12345","id": "12"},{"firstName": "Sam","surname": "Ash","address": "Very We","postcode": "QA1 1QA","phone": "123344556","id": "13"}];
const property = [{"id": "1","address": "34 OK Place, OK Town","postcode": "OK1 1OK","type": "DETACHED","price": 100000,"bedroom": 3,"bathroom": 1,"garden": 0,"sellerId": 1,"status": "SOLD","buyerId": "1"},{"id": "2","address": "Somewhere House, Some Street, Some City","postcode": "SO1 2ME","type": "APARTMENT","price": 200000,"bedroom": 1,"bathroom": 1,"garden": 0,"sellerId": 1,"status": "SOLD","buyerId": 3},{"address": "8 Hilltop, Ebbw Vale","postcode": "EB1 2VA","type": "DETACHED","price": 99000,"bedroom": 3,"bathroom": 3,"garden": 1,"sellerId": 4,"status": "SOLD","id": "4"},{"address": "107 Fairway","postcode": "NR85HE","type": "SEMI","price": 234567,"bedrooms": 1,"bathrooms": 1,"garden": "true","sellerId": "1","status": "FORSALE","id": "o6suYCb"}];


app.get('/seller', (req, res) => {
    res.json(seller);
});

app.get('/property', (req, res) => {
    res.json(property);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
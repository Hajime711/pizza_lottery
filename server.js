const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/pizza_lottery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');    
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
const jsonDataSchema = new mongoose.Schema({
  data: Object, 
});
const JsonData = mongoose.model('JsonData', jsonDataSchema);
app.post('/json', (req, res) => {
    const jsonData = new JsonData({
      data: req.body,
    });
  
    jsonData.save()
      .then(() => {
        res.status(201).send('JSON data saved');
      })
      .catch((error) => {
        console.error('Error saving JSON data:', error);
        res.status(500).send('Error saving JSON data');
      });
});
app.get('/json', (req, res) => {
    JsonData.find({})
    .then((jsonData) => {
        res.json(jsonData);
    })
    .catch((error) => {
        console.error('Error fetching JSON data:', error);
        res.status(500).send('Error fetching JSON data');
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  
   


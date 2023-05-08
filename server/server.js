import express from "express";
import * as dotenv from "dotenv";
import cors from 'cors'
import { Configuration, OpenAIApi } from "openai";

dotenv.config(); 

const configuration = new Configuration({
    apikey: process.env.OpenAIApi
});

//creating an instance of OpenAi
const openai = new  OpenAIApi(configuration);

const app = express();

//it allows us to made the cross-origin request
app.use(cors());

//allow us to pass json from front-end to back-end
app.use(express.json());

app.get('/', async(req, res)=>{
    res.status(200).send({
        message: "Hello, from codeX"
    })
})

//now we can get the data from the front-end body
app.post('/', async(req, res)=>{
    try {
        const prompt = req.body.prompt
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        })
        res.status(200).send({
            bot: response.data.choices[0].text
        })
    } catch (error) {
        console.log(err); 
        res.status(500).send(error)     
    }
})

app.listen(5000, (req, res)=>{
    console.log("server listening on http://localhost:5000");
})
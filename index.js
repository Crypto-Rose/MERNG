const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const Post = require('./models/Post');
const { MONGODB } = require('./config.js');

const typeDefs = gql`
    type Query{
        getPosts
    }
`
const resolvers = {
    Query: {
        sayHi: () => 'Hi World! :3'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MongoDB connected')
    return server.listen({ port: 5000 })
})
.then(res =>{
    console.log(`Server running at ${ res.url }`)
})
.catch(err =>{
    console.log(err)
})
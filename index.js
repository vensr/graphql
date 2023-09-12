import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from "./_db.js";
import { v4 as uuidv4 } from 'uuid';

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        review(_, args) {
            return db.reviews.find((review) => args.id === review.id)
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => parent.id === review.game_id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
        }
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter((game) => game.id !== args.id)
            return db.games
        },
        addGame(_, args) {
            let game = { ...args.game, id: uuidv4() }
            db.games.push(game)
            return game
        },
        updateGame(_, args) {
            db.games = db.games.map((game) => {
                if(game.id === args.id) {
                    return {...game, ...args.edits}
                }
                return game
            })
            return db.games.find((game) => game.id === args.id)
        }
    }
}

// server setup
const server = new ApolloServer({
    // typeDefs -- definitions of types of data, schema
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000}
})

console.log("Server ready at port", 4000)


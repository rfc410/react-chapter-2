import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'

import { App } from './App'

createServer({
  models: {
    transaction: Model
  },
  routes () {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
  seeds (server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          amount: 1656.48,
          category: 'Jobs',
          createdAt: new Date('2020-04-05 08:56:23'),
          title: 'Salary',
          type: 'deposit'
        },
        {
          id: 2,
          amount: 60,
          category: 'Education',
          createdAt: new Date('2020-04-15 10:00:00'),
          title: 'Alura',
          type: 'withdraw'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

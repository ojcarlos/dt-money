import console from 'console'
import { useEffect } from 'react'
import { Container } from './styles'

export function TransactionsTable(){

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);
    return(
      <Container>
          <table>
            <thead>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </thead>
            <tbody>
              <tr>
                <td>Desenvolvimento website</td>
                <td className = "deposito" >12000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
              </tr>
              <tr>
                <td>Aluguel</td>
                <td className = "retirada" >11000</td>
                <td>casa</td>
                <td>20/02/2021</td>
              </tr>
            </tbody>
          </table>
      </Container>  
    )
}
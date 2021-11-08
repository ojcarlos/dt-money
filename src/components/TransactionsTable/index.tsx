import { Container } from './styles'

export function TransactionsTable(){
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
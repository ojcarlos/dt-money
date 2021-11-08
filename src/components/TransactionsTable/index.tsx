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
                <td>12000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
              </tr>
              <tr>
                <td>Desenvolvimento website</td>
                <td>12000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
              </tr>
              <tr>
                <td>Desenvolvimento website</td>
                <td>12000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
              </tr>
              <tr>
                <td>Desenvolvimento website</td>
                <td>12000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
              </tr>
            </tbody>
          </table>
      </Container>  
    )
}
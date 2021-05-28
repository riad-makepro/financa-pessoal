import { Container } from './styles'

export function TransactionsTable(){

    return(

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desensolvimento de site</td>
                        <td className="deposito">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>28/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">- R$ 1.000</td>
                        <td>Casa</td>
                        <td>28/05/2021</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );
}
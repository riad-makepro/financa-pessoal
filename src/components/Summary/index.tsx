import { Container } from './styles';

import {  useTransactions } from '../../hooks/useTransactions';


import entrada from '../../assets/entradas.svg';
import saida from '../../assets/saidas.svg';
import total from '../../assets/total.svg';



export function Summary() {

    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposito') {

            acc.depositos += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.retiradas += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        depositos: 0,
        retiradas: 0,
        total: 0,
    }

    )

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entrada} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.depositos)}

                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saida} alt="Saidas" />
                </header>
                <strong>- {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(summary.retiradas)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}
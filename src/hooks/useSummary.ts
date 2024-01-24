import { useContext } from "react";
import { TrasactionContext } from "../contexts/transactionsContext";

export function useSummary() {
    const { transactions } = useContext(TrasactionContext);

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === "income") {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
            return acc;
        },
        {
            income: 0,
            outcome: 0,
            total: 0,
        }
    );
    return summary;
}
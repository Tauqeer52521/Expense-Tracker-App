import { dashboard, expenses, transactions, trend } from "./Icons";

export const MenuItems=[
    {
        id:1,
        title:'Dashboard',
        icon:dashboard,
        link:'/finance/tracking'
    },
    {
        id:2,
        title:'Transactions',
        icon:transactions,
        link:'/finance/tracking/transaction'
    },
    {
        id:3,
        title:'Incomes',
        icon:trend,
        link:'/finance/tracking/incomes'
    },
    {
        id:4,
        title:'Expenses',
        icon:expenses,
        link:'/finance/tracking/expenses'
    },
];
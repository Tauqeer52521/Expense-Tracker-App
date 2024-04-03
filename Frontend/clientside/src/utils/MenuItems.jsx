import { dashboard, expenses, transactions, trend } from "./Icons";

export const MenuItems=[
    {
        id:'1',
        title:'Dashboard',
        icon:dashboard,
        link:'/financial-tracking/dashboard'
    },
    {
        id:'2',
        title:'Transactions',
        icon:transactions,
        link:'/financial-tracking/transaction'
    },
    {
        id:'3',
        title:'Incomes',
        icon:trend,
        link:'/financial-tracking/incomes'
    },
    {
        id:'4',
        title:'Expenses',
        icon:expenses,
        link:'/financial-tracking/expenses'
    },
];
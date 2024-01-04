import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import {fetchCustomers, fetchFilteredCustomers, fetchInvoicesPages} from '@/app/lib/data';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
    title: 'Customers'
};


export default async function Page({
    searchParams,
     }: {
    searchParams?: {
        query?: string;
    };
}) {
    const customers = await fetchFilteredCustomers(searchParams?.query || '');
    return (
        <CustomersTable customers={customers} />
    );
}
